import json, os, re
from reportlab.lib.pagesizes import A4
# units not needed
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph,
                                Spacer, ListFlowable, ListItem, HRFlowable)
from reportlab.lib.styles import ParagraphStyle

SCRATCH = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(SCRATCH, "..", "..", "public", "policies")
os.makedirs(OUT, exist_ok=True)
LETTERHEAD = os.path.join(SCRATCH, "letterhead.png")

PW, PH = A4  # 595.27 x 841.89
GREEN = HexColor("#1B5E20")
DARK = HexColor("#1f2937")
GRAY = HexColor("#6b7280")

# Safe content area clearing the top-right logo and the bottom footer band
L, R = 64, 64
TOP_MARGIN, BOTTOM_MARGIN = 128, 116
frame = Frame(L, BOTTOM_MARGIN, PW - L - R, PH - TOP_MARGIN - BOTTOM_MARGIN,
              leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)

def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

title_style = ParagraphStyle("title", fontName="Times-Bold", fontSize=15, leading=19,
                             textColor=GREEN, alignment=TA_CENTER, spaceAfter=2)
ref_style = ParagraphStyle("ref", fontName="Times-Italic", fontSize=9.5, leading=12,
                           textColor=GRAY, alignment=TA_CENTER, spaceAfter=6)
h_style = ParagraphStyle("h", fontName="Times-Bold", fontSize=11.5, leading=14,
                         textColor=DARK, spaceBefore=11, spaceAfter=4)
sub_style = ParagraphStyle("sub", fontName="Times-Bold", fontSize=10.2, leading=13,
                           textColor=GREEN, spaceBefore=7, spaceAfter=3)
body = ParagraphStyle("body", fontName="Times-Roman", fontSize=10, leading=14,
                      textColor=DARK, alignment=TA_JUSTIFY, spaceAfter=6)
li_style = ParagraphStyle("li", fontName="Times-Roman", fontSize=10, leading=14,
                          textColor=DARK, alignment=TA_JUSTIFY)

def bg(canvas, doc):
    canvas.drawImage(LETTERHEAD, 0, 0, width=PW, height=PH,
                     preserveAspectRatio=False, mask=None)

def blocks_to_story(policy):
    story = [Paragraph(esc(policy["title"]), title_style)]
    if policy.get("reference"):
        story.append(Paragraph(esc(policy["reference"]), ref_style))
    story.append(HRFlowable(width="30%", thickness=1, color=GREEN,
                            spaceBefore=2, spaceAfter=10, hAlign="CENTER"))
    for b in policy["blocks"]:
        t = b["type"]
        if t == "heading":
            story.append(Paragraph(esc(b["text"]), h_style))
        elif t == "subheading":
            story.append(Paragraph(esc(b["text"]), sub_style))
        elif t == "para":
            story.append(Paragraph(esc(b["text"]), body))
        elif t == "list":
            ordered = b.get("ordered", False)
            items = [ListItem(Paragraph(esc(x), li_style), spaceBefore=2)
                     for x in b["items"]]
            if ordered:
                story.append(ListFlowable(
                    items, bulletType="1", bulletFormat="%s.", start=1,
                    bulletColor=GREEN, bulletFontName="Times-Bold",
                    bulletFontSize=10, leftIndent=20, spaceAfter=6))
            else:
                story.append(ListFlowable(
                    items, bulletType="bullet", start="\u2022",
                    bulletColor=GREEN, bulletFontSize=7,
                    leftIndent=16, spaceAfter=6))
        elif t == "defs":
            for d in b["items"]:
                story.append(Paragraph(
                    f'<b>&#8220;{esc(d["term"])}&#8221;</b> {esc(d["text"])}', body))
    return story

def build(policy):
    path = os.path.join(OUT, policy["slug"] + ".pdf")
    doc = BaseDocTemplate(path, pagesize=A4,
                          leftMargin=L, rightMargin=R,
                          topMargin=TOP_MARGIN, bottomMargin=BOTTOM_MARGIN,
                          title=policy["title"], author="MRC Agrotech Limited")
    doc.addPageTemplates([PageTemplate(id="lh", frames=[frame], onPage=bg)])
    doc.build(blocks_to_story(policy))
    return path

data = json.load(open(os.path.join(SCRATCH, "policies.json")))
alldocs = data["policies"] + data["disclosures"]
for p in alldocs:
    path = build(p)
    print(f"{p['slug']:38} {os.path.getsize(path)//1024} KB")
print(f"\nGenerated {len(alldocs)} PDFs into {OUT}")
