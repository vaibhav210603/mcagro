import type { Policy } from './PolicyLayout';

// Full text of the statutory policies of MRC Agrotech Limited, drafted from the standard
// SEBI (LODR) Regulations, 2015 / Companies Act, 2013 / SEBI (PIT) Regulations, 2015 templates
// adopted by comparable listed agri companies. Reviewed and adopted by the Board.

const materialSubsidiaries: Policy = {
    slug: 'material-subsidiaries',
    title: 'Policy for Determining Material Subsidiaries',
    reference: 'Regulation 16(1)(c) & 24 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Preamble and Background' },
        {
            type: 'para',
            text: 'MRC Agrotech Limited (hereinafter referred to as the “Company”) is a company incorporated under the laws of India and having its equity shares listed on BSE Limited (Scrip Code: 540809). As a listed entity, the Company is required to comply with the Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015 (the “Listing Regulations”) and the Companies Act, 2013 (the “Act”) together with the rules made thereunder.',
        },
        {
            type: 'para',
            text: 'Regulation 16(1)(c) of the Listing Regulations requires every listed entity to formulate a policy for determining “material” subsidiaries and to disclose such policy on its website. Accordingly, the Board of Directors of the Company (the “Board”) has framed and adopted this Policy for Determining Material Subsidiaries (this “Policy”), which shall be read in conjunction with the applicable provisions of the Listing Regulations, the Act and the other policies of the Company.',
        },
        { type: 'heading', text: '2. Objective and Purpose' },
        {
            type: 'para',
            text: 'The objective of this Policy is to lay down the criteria for identifying the subsidiaries of the Company which are “material”, and to govern the dealings, oversight and disclosures relating to such material subsidiaries. The Policy is intended to ensure that the business and affairs of material subsidiaries are conducted with an appropriate level of governance and oversight by the Board and the Audit Committee of the Company, and that the interests of the shareholders and other stakeholders of the Company are adequately protected.',
        },
        { type: 'heading', text: '3. Definitions' },
        {
            type: 'para',
            text: 'In this Policy, unless the context otherwise requires, the following terms shall have the meanings assigned to them below. Words and expressions used but not defined herein shall have the meanings respectively assigned to them under the Listing Regulations, the Act, the Securities Contracts (Regulation) Act, 1956, the Depositories Act, 1996, and the rules and regulations made thereunder.',
        },
        {
            type: 'defs',
            items: [
                {
                    term: 'Act',
                    text: 'means the Companies Act, 2013 together with the rules made thereunder, including any statutory modification(s) or re-enactment(s) thereof for the time being in force.',
                },
                {
                    term: 'Audit Committee',
                    text: 'means the Audit Committee constituted by the Board of Directors of the Company under Section 177 of the Act and Regulation 18 of the Listing Regulations.',
                },
                {
                    term: 'Subsidiary',
                    text: 'means a subsidiary company as defined under Section 2(87) of the Act, being a company in which the Company controls the composition of the board of directors, or exercises or controls more than one-half of the total voting power, either on its own or together with one or more of its subsidiaries.',
                },
                {
                    term: 'Material Subsidiary',
                    text: 'means a subsidiary whose income or net worth (i.e. paid-up share capital together with free reserves) exceeds ten per cent (10%) of the consolidated income or net worth respectively of the Company and its subsidiaries in the immediately preceding accounting year.',
                },
                {
                    term: 'Net Worth',
                    text: 'shall have the meaning assigned to it under Section 2(57) of the Act.',
                },
            ],
        },
        { type: 'heading', text: '4. Criteria for Determination of a Material Subsidiary' },
        {
            type: 'para',
            text: 'A subsidiary of the Company shall be considered a “Material Subsidiary” for the purposes of this Policy if it meets either of the following thresholds, computed on the basis of the audited consolidated financial statements of the Company for the immediately preceding accounting year:',
        },
        {
            type: 'list',
            ordered: true,
            items: [
                'the income of the subsidiary exceeds ten per cent (10%) of the consolidated income of the Company and its subsidiaries; or',
                'the net worth of the subsidiary exceeds ten per cent (10%) of the consolidated net worth of the Company and its subsidiaries.',
            ],
        },
        {
            type: 'para',
            text: 'For the purpose of determining the enhanced governance obligations set out in this Policy (including the requirement to sell, dispose of or reduce shareholding only with shareholder approval), a subsidiary whose income or net worth exceeds twenty per cent (20%) of the consolidated income or net worth respectively of the Company and its subsidiaries in the immediately preceding accounting year shall be treated as a material subsidiary in accordance with Regulation 24 of the Listing Regulations.',
        },
        { type: 'heading', text: '5. Governance and Oversight of Material Subsidiaries' },
        { type: 'subheading', text: '5.1 Board Representation' },
        {
            type: 'para',
            text: 'The Company shall ensure that at least one Independent Director on the Board of Directors of the Company is a director on the board of directors of an unlisted material subsidiary, whether incorporated in India or not, where such subsidiary meets the threshold prescribed under Regulation 24(1) of the Listing Regulations.',
        },
        { type: 'subheading', text: '5.2 Oversight by the Audit Committee and the Board' },
        {
            type: 'list',
            ordered: true,
            items: [
                'The Audit Committee of the Company shall review the financial statements, and in particular the investments made by the unlisted subsidiary, of the Company.',
                'The minutes of the meetings of the board of directors of the unlisted subsidiary shall be placed before the meeting of the Board of Directors of the Company.',
                'The management shall periodically bring to the attention of the Board of Directors of the Company a statement of all significant transactions and arrangements entered into by the unlisted subsidiary. For this purpose, a “significant transaction or arrangement” means any individual transaction or arrangement that exceeds or is likely to exceed ten per cent (10%) of the total revenues, expenses, assets or liabilities, as the case may be, of the unlisted subsidiary for the immediately preceding accounting year.',
                'The Company shall not permit any material subsidiary to divest, dispose of or otherwise deal with its shareholding or assets except in accordance with this Policy and the Listing Regulations.',
            ],
        },
        { type: 'heading', text: '6. Disposal of Shares and Reduction of Control' },
        {
            type: 'para',
            text: 'The Company shall not dispose of shares in its material subsidiary resulting in reduction of its shareholding (either on its own or together with other subsidiaries) to less than or equal to fifty per cent (50%), or cease the exercise of control over the subsidiary, without passing a special resolution in its General Meeting, except in cases where such divestment is made under a scheme of arrangement duly approved by a Court or Tribunal, or under a resolution plan duly approved under Section 31 of the Insolvency and Bankruptcy Code, 2016 and such an event is disclosed to the recognised stock exchange(s) within one day of the resolution plan being approved.',
        },
        { type: 'heading', text: '7. Sale, Disposal or Lease of Assets of a Material Subsidiary' },
        {
            type: 'para',
            text: 'Selling, disposing of or leasing of assets amounting to more than twenty per cent (20%) of the assets of the material subsidiary on an aggregate basis during a financial year shall require prior approval of the shareholders of the Company by way of a special resolution, unless the sale, disposal or lease is made under a scheme of arrangement duly approved by a Court or Tribunal or the National Company Law Tribunal.',
        },
        { type: 'heading', text: '8. Secretarial Audit and Compliance' },
        {
            type: 'para',
            text: 'Where applicable, the Company shall ensure that each material unlisted subsidiary incorporated in India undertakes a secretarial audit and annexes the secretarial audit report with the annual report of the Company, as required under the Listing Regulations. The Company shall further ensure that the accounts of material subsidiaries are consolidated with those of the Company in accordance with the applicable accounting standards.',
        },
        { type: 'heading', text: '9. Disclosure Requirements' },
        {
            type: 'para',
            text: 'This Policy shall be disclosed on the website of the Company and a web-link thereto shall be provided in the Annual Report of the Company. Any transaction or arrangement in respect of a material subsidiary that requires shareholder or Board approval under this Policy shall be disclosed to the stock exchange(s) to the extent, and within the timelines, prescribed under the Listing Regulations.',
        },
        { type: 'heading', text: '10. Responsibility, Interpretation and Conflict' },
        {
            type: 'para',
            text: 'The Company Secretary & Compliance Officer of the Company shall be responsible for administering this Policy and for ensuring compliance with its provisions. In the event of any question of interpretation of this Policy, or any doubt regarding whether a particular subsidiary is material, the decision of the Board shall be final. In the event of any conflict between the provisions of this Policy and the Listing Regulations, the Act or any other applicable law, the provisions of such law shall prevail.',
        },
        { type: 'heading', text: '11. Review, Amendment and Effective Date' },
        {
            type: 'para',
            text: 'This Policy has been approved and adopted by the Board of Directors of the Company and is effective from the date of such adoption. The Board is authorised to review and amend this Policy from time to time. Any subsequent amendment or modification in the Listing Regulations, the Act or other applicable laws shall automatically apply to this Policy and, to the extent of any inconsistency, shall be deemed to have modified the relevant provisions of this Policy from the date such amendment becomes effective, whether or not this Policy is formally amended.',
        },
    ],
};

const familiarisation: Policy = {
    slug: 'familiarisation',
    title: 'Familiarisation Programme for Independent Directors',
    reference: 'Regulation 25(7) of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Preamble' },
        {
            type: 'para',
            text: 'MRC Agrotech Limited (the “Company”) recognises that Independent Directors bring an objective and independent element to the deliberations of the Board of Directors (the “Board”) and play a vital role in the governance of the Company. In order that Independent Directors are able to discharge their duties effectively, it is essential that they have a good understanding of the Company, the industry in which it operates, the business model and operations of the Company, and their own roles, rights and responsibilities.',
        },
        {
            type: 'para',
            text: 'This Familiarisation Programme (this “Programme”) has been formulated and adopted by the Board pursuant to Regulation 25(7) of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (the “Listing Regulations”) read with Schedule IV to the Companies Act, 2013 (the “Act”), which requires the Company to familiarise Independent Directors with the Company through various programmes.',
        },
        { type: 'heading', text: '2. Objective' },
        {
            type: 'para',
            text: 'The objective of this Programme is to:',
        },
        {
            type: 'list',
            items: [
                'familiarise the Independent Directors with the Company, its promoters, its group structure, subsidiaries and the business environment in which the Company operates;',
                'familiarise the Independent Directors with the nature of the agriculture and agri-processing industry, and the Company’s business model, products, markets, competition, operations and internal control systems;',
                'familiarise the Independent Directors with their roles, rights, responsibilities, duties and liabilities in the Company; and',
                'build and develop, on a continuing basis, the understanding and knowledge of the Independent Directors about the Company so as to enable them to make an effective and informed contribution as members of the Board.',
            ],
        },
        { type: 'heading', text: '3. Familiarisation at the Time of Appointment (Induction)' },
        {
            type: 'para',
            text: 'On appointment, each Independent Director is issued a formal letter of appointment setting out in detail the terms and conditions of appointment, the duties, roles and responsibilities expected of the Director, the expected time commitment, the Company’s policies and codes applicable to Directors, and the Company’s Code of Conduct and Code of Conduct for Prevention of Insider Trading. A copy of the letter of appointment is available on the website of the Company.',
        },
        {
            type: 'para',
            text: 'The Company Secretary & Compliance Officer conducts an induction for each newly appointed Independent Director and briefs the Director on, among other things:',
        },
        {
            type: 'list',
            items: [
                'the constitution of the Company, its Memorandum and Articles of Association, and the composition of the Board and its Committees;',
                'the group structure of the Company, its subsidiaries, associates and joint ventures, if any;',
                'the Board processes and procedures, the matters reserved for the Board, and the schedule and conduct of Board and Committee meetings; and',
                'the governance framework of the Company, including the applicable statutory, regulatory and internal codes and policies.',
            ],
        },
        { type: 'heading', text: '4. Ongoing Familiarisation' },
        {
            type: 'para',
            text: 'The Independent Directors are, on an ongoing basis, familiarised with the following through presentations at Board and Committee meetings, interactions with the management, site visits and circulation of updates:',
        },
        {
            type: 'list',
            items: [
                'the nature of the agri-business, cultivation, processing, manufacturing, trading and export operations of the Company and the geographies and markets it serves;',
                'the Company’s business model, product portfolio (including essential oils, lemongrass, tea, seeds, nano fertilizers and guar gum), supply chain and go-to-market strategy;',
                'the applicable regulatory framework, including the Act, the Listing Regulations, the SEBI (Prohibition of Insider Trading) Regulations, 2015 and other laws relevant to the Company’s operations;',
                'the Company’s strategic plans, annual budgets, financial performance, capital expenditure, funding position and internal financial control systems;',
                'significant developments in the Company’s business, and changes in the operating environment, economy, industry and regulatory landscape; and',
                'the roles, rights, responsibilities, duties and liabilities of Independent Directors under applicable law, and any material changes therein.',
            ],
        },
        { type: 'heading', text: '5. Responsibility for Implementation' },
        {
            type: 'para',
            text: 'The Managing Director / Whole-time Director, the Chief Financial Officer and the Company Secretary & Compliance Officer are collectively responsible for organising and implementing this Programme. The Company may, where considered appropriate, engage external experts, professionals or agencies to conduct sessions for the Independent Directors on specific subjects, including changes in law and regulation.',
        },
        { type: 'heading', text: '6. Disclosure' },
        {
            type: 'para',
            text: 'The details of the familiarisation programmes imparted to the Independent Directors during a financial year, including the number of programmes attended and the number of hours spent by each Independent Director in such programmes, shall be disclosed on the website of the Company, and a web-link thereto shall be provided in the Corporate Governance Report forming part of the Annual Report of the Company, in accordance with the Listing Regulations.',
        },
        { type: 'heading', text: '7. Review and Amendment' },
        {
            type: 'para',
            text: 'This Programme shall be reviewed periodically by the Nomination and Remuneration Committee, which may recommend such amendments to the Board as it considers necessary. The Board is authorised to amend this Programme from time to time. Any subsequent amendment in the Listing Regulations or the Act shall automatically apply to this Programme and shall be deemed to be incorporated herein to the extent of any inconsistency.',
        },
    ],
};

const idTerms: Policy = {
    slug: 'independent-directors-terms',
    title: 'Terms and Conditions for Appointment of Independent Directors',
    reference: 'Schedule IV, Companies Act, 2013 & Regulation 46 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Introduction' },
        {
            type: 'para',
            text: 'These terms and conditions govern the appointment of Independent Directors of MRC Agrotech Limited (the “Company”) and are issued pursuant to Schedule IV to the Companies Act, 2013 (the “Act”) and Regulation 46 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (the “Listing Regulations”), which require the Company to disclose on its website the terms and conditions of appointment of its Independent Directors. These terms are to be read together with the letter of appointment issued to each Independent Director, the Act, the Listing Regulations and the applicable codes and policies of the Company.',
        },
        { type: 'heading', text: '2. Appointment and Term' },
        {
            type: 'para',
            text: 'Independent Directors are appointed by the shareholders of the Company on the recommendation of the Board of Directors (the “Board”) and the Nomination and Remuneration Committee, in accordance with the provisions of the Act and the Listing Regulations. The appointment of an Independent Director shall be for a term as approved by the shareholders and shall be subject to the provisions relating to the maximum tenure of Independent Directors under Section 149(10) and 149(11) of the Act.',
        },
        {
            type: 'para',
            text: 'The continuation of an Independent Director in office is at all times subject to the Director continuing to meet the criteria of independence prescribed under Section 149(6) of the Act and Regulation 16(1)(b) of the Listing Regulations, not being disqualified from being appointed as a director under Section 164 of the Act, registering with the Independent Directors’ databank maintained by the Indian Institute of Corporate Affairs and complying with the online proficiency self-assessment requirements to the extent applicable, and not being restrained from acting as a director by any order of a competent authority.',
        },
        { type: 'heading', text: '3. Role, Duties and Responsibilities' },
        {
            type: 'para',
            text: 'An Independent Director shall abide by the duties of directors provided under the Act, including Section 166 thereof, the “Code for Independent Directors” set out in Schedule IV to the Act, and the Code of Conduct of the Company. In particular, an Independent Director shall:',
        },
        {
            type: 'list',
            items: [
                'uphold ethical standards of integrity and probity and act objectively and constructively in the best interests of the Company and its stakeholders;',
                'exercise their responsibilities in a bona fide manner and devote sufficient time and attention to their professional obligations for informed and balanced decision making;',
                'bring an independent judgment to bear on the deliberations of the Board, particularly on issues of strategy, performance, risk management, resources, key appointments and standards of conduct;',
                'scrutinise and monitor the performance of management in meeting agreed goals and objectives, and satisfy themselves on the integrity of financial information and that financial controls and systems of risk management are robust and defensible;',
                'safeguard the interests of all stakeholders, particularly the minority shareholders, and balance the conflicting interests of the stakeholders;',
                'report concerns about unethical behaviour, actual or suspected fraud or violation of the Company’s Code of Conduct or ethics policy; and',
                'not disclose confidential information, including commercial secrets, technologies, advertising and sales promotion plans and unpublished price sensitive information, unless such disclosure is expressly approved by the Board or required by law.',
            ],
        },
        { type: 'heading', text: '4. Remuneration and Reimbursement of Expenses' },
        {
            type: 'para',
            text: 'An Independent Director shall be entitled to sitting fees for attending meetings of the Board and its Committees, reimbursement of expenses incurred for participation in such meetings and in connection with the business of the Company, and profit-related commission (if any) as may be approved by the shareholders within the limits prescribed under the Act. The criteria of making payments to Non-Executive Directors, including Independent Directors, are as set out in the Nomination and Remuneration Policy of the Company. Independent Directors shall not be entitled to any stock options of the Company.',
        },
        { type: 'heading', text: '5. Time Commitment' },
        {
            type: 'para',
            text: 'An Independent Director is expected to devote sufficient time to the affairs of the Company and to be available to attend the meetings of the Board and of the Committees of which the Director is a member, the general meetings of the Company, and the separate meeting of Independent Directors held in accordance with Schedule IV to the Act and Regulation 25 of the Listing Regulations. An Independent Director is also expected to spend time to familiarise themselves with the Company and its business under the Company’s Familiarisation Programme.',
        },
        { type: 'heading', text: '6. Evaluation of Performance' },
        {
            type: 'para',
            text: 'The performance of each Independent Director is evaluated annually. The performance evaluation of Independent Directors is carried out by the entire Board of Directors (excluding the Director being evaluated), and the continuation or extension of the term of appointment of an Independent Director is based on the outcome of such evaluation.',
        },
        { type: 'heading', text: '7. Directors and Officers Liability, Confidentiality and Insurance' },
        {
            type: 'para',
            text: 'An Independent Director shall maintain the confidentiality of all confidential information of the Company acquired during the course of the appointment and shall not use such information for personal advantage or for the advantage of any third party. The Company may, at its discretion, maintain a directors and officers liability insurance policy for its Directors, including its Independent Directors.',
        },
        { type: 'heading', text: '8. Resignation, Removal and Cessation' },
        {
            type: 'para',
            text: 'An Independent Director may resign from office by giving notice in writing in accordance with Section 168 of the Act, and may be removed in accordance with the provisions of the Act and the Listing Regulations. The office of an Independent Director shall be vacated in the circumstances set out under Section 167 of the Act, or upon the Director ceasing to meet the criteria of independence.',
        },
        { type: 'heading', text: '9. Disclosure' },
        {
            type: 'para',
            text: 'The terms and conditions of appointment of Independent Directors are disclosed on the website of the Company in accordance with Regulation 46 of the Listing Regulations. In the event of any conflict between these terms and conditions and the provisions of the Act or the Listing Regulations, the provisions of the Act and the Listing Regulations shall prevail.',
        },
    ],
};

const groupCompany: Policy = {
    slug: 'group-company-material-litigation',
    title: 'Policy on Determination of Group Companies, Material Creditors & Material Litigation',
    reference: 'SEBI (LODR) Regulations, 2015 & applicable disclosure requirements',
    blocks: [
        { type: 'heading', text: '1. Preamble and Purpose' },
        {
            type: 'para',
            text: 'MRC Agrotech Limited (the “Company”) is a listed entity whose equity shares are listed on BSE Limited. In the interest of transparency and good corporate governance, and to ensure timely and accurate disclosures, the Board of Directors (the “Board”) has framed and adopted this Policy on Determination of Group Companies, Material Creditors and Material Litigation (this “Policy”).',
        },
        {
            type: 'para',
            text: 'This Policy lays down the criteria for the determination of “Group Companies”, “Material Creditors” and “Material Litigation” for the purposes of disclosures and compliance under applicable laws, including the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (the “Listing Regulations”), the Companies Act, 2013 (the “Act”) and, where relevant, the SEBI (Issue of Capital and Disclosure Requirements) Regulations, 2018.',
        },
        { type: 'heading', text: '2. Definitions' },
        {
            type: 'defs',
            items: [
                {
                    term: 'Associate',
                    text: 'shall have the meaning assigned to it under the Act and the applicable accounting standards.',
                },
                {
                    term: 'Promoter and Promoter Group',
                    text: 'shall have the meanings respectively assigned to them under the Listing Regulations and the SEBI (Issue of Capital and Disclosure Requirements) Regulations, 2018.',
                },
                {
                    term: 'Related Party',
                    text: 'shall have the meaning assigned to it under Section 2(76) of the Act and Regulation 2(1)(zb) of the Listing Regulations, read with the Company’s Policy on Related Party Transactions.',
                },
            ],
        },
        { type: 'heading', text: '3. Determination of Group Companies' },
        {
            type: 'para',
            text: 'A company, body corporate or entity shall be considered a “Group Company” of the Company if it falls within any of the following categories:',
        },
        {
            type: 'list',
            ordered: true,
            items: [
                'entities that are members of the promoter group and/or the promoter of the Company;',
                'companies (other than the promoter and subsidiaries) with which the Company has entered into one or more related party transactions, individually or in the aggregate during a financial year, that are material in terms of the Company’s Policy on Related Party Transactions;',
                'companies which are considered material by the Board on the basis of the nature and extent of the relationship, and the interests of the Company and its stakeholders; and',
                'such other entities as are required to be disclosed as group companies under the applicable accounting standards or applicable law.',
            ],
        },
        {
            type: 'para',
            text: 'The Board may, on a case-to-case basis and on the recommendation of the management, consider whether any additional company should be regarded as a Group Company for the purposes of this Policy.',
        },
        { type: 'heading', text: '4. Determination of Material Creditors' },
        {
            type: 'para',
            text: 'A creditor of the Company shall be considered a “Material Creditor” if the amounts due to such creditor exceed five per cent (5%) of the total trade payables of the Company as per the latest audited standalone financial statements of the Company.',
        },
        {
            type: 'para',
            text: 'The Company shall maintain a list of its Material Creditors and shall make such disclosures in respect of dues to Material Creditors, including any default in payment thereof, as may be required under the Listing Regulations and other applicable law. Any default in the payment of dues to a Material Creditor shall be dealt with in accordance with the Company’s Policy for Determination of Materiality of Events or Information.',
        },
        { type: 'heading', text: '5. Determination of Material Litigation' },
        {
            type: 'para',
            text: 'Litigation, legal proceedings, disputes, claims, show-cause notices or regulatory or governmental actions involving the Company, its directors, its promoters or its subsidiaries shall be considered “Material Litigation” if:',
        },
        {
            type: 'list',
            ordered: true,
            items: [
                'the monetary amount of the claim or proceeding, individually, exceeds the lower of (a) two per cent (2%) of the turnover, (b) two per cent (2%) of the net worth, or (c) five per cent (5%) of the average of the absolute value of profit or loss after tax, of the Company as per the last audited consolidated financial statements of the Company; or',
                'the litigation or proceeding, although not quantifiable in monetary terms, is such that its outcome is likely to have a material bearing on the business, operations, performance, prospects, reputation or financial position of the Company.',
            ],
        },
        {
            type: 'para',
            text: 'In assessing the materiality of any litigation, the Board and the management shall also have regard to any criminal proceedings, proceedings involving allegations of fraud, economic offences, or actions by any regulatory or statutory authority, irrespective of the monetary amount involved.',
        },
        { type: 'heading', text: '6. Disclosure and Responsibility' },
        {
            type: 'para',
            text: 'Disclosures in respect of Group Companies, Material Creditors and Material Litigation shall be made to the stock exchange(s), in the offer documents (where applicable) and in the periodic filings of the Company, to the extent and within the timelines required under applicable law. The Company Secretary & Compliance Officer shall be responsible for administering this Policy and for making the necessary disclosures.',
        },
        { type: 'heading', text: '7. Review, Interpretation and Amendment' },
        {
            type: 'para',
            text: 'This Policy shall be reviewed by the Board as and when required to align it with amendments in applicable law. In cases of ambiguity or where the materiality of a particular entity, creditor or proceeding is not clear, the decision of the Board shall be final. Any subsequent amendment or modification in the applicable law shall automatically apply to this Policy and shall be deemed to be incorporated herein to the extent of any inconsistency.',
        },
    ],
};

const ifc: Policy = {
    slug: 'internal-financial-control',
    title: 'Internal Financial Control Policy',
    reference: 'Section 134(5)(e) & 143(3)(i), Companies Act, 2013',
    blocks: [
        { type: 'heading', text: '1. Preamble and Regulatory Framework' },
        {
            type: 'para',
            text: 'The Companies Act, 2013 (the “Act”) places significant emphasis on internal financial controls. Section 134(5)(e) of the Act requires the directors of a listed company to state, in the Directors’ Responsibility Statement forming part of the Board’s Report, that they have laid down internal financial controls to be followed by the company and that such internal financial controls are adequate and were operating effectively. Section 143(3)(i) of the Act requires the statutory auditors to report on the adequacy and operating effectiveness of the internal financial controls with reference to the financial statements. Regulation 17(8) of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (the “Listing Regulations”) requires a compliance certificate from the Chief Executive Officer and the Chief Financial Officer in respect of internal controls for financial reporting.',
        },
        {
            type: 'para',
            text: 'In compliance with the above requirements, the Board of Directors (the “Board”) of MRC Agrotech Limited (the “Company”) has adopted this Internal Financial Control Policy (this “Policy”) to establish and maintain adequate internal financial controls commensurate with the size, scale and complexity of the operations of the Company.',
        },
        { type: 'heading', text: '2. Definition and Objective' },
        {
            type: 'para',
            text: '“Internal Financial Controls” means the policies and procedures adopted by the Company for ensuring the orderly and efficient conduct of its business, including adherence to the Company’s policies, the safeguarding of its assets, the prevention and detection of frauds and errors, the accuracy and completeness of the accounting records, and the timely preparation of reliable financial information. The objective of this Policy is to ensure that such controls are designed, implemented and maintained so as to provide reasonable assurance regarding the reliability of financial reporting and the preparation of financial statements in accordance with applicable law.',
        },
        { type: 'heading', text: '3. Components of the Internal Financial Control Framework' },
        {
            type: 'para',
            text: 'The internal financial control framework of the Company is designed around the following inter-related components:',
        },
        { type: 'subheading', text: '3.1 Control Environment' },
        {
            type: 'para',
            text: 'The Company maintains a defined organisational structure with clear lines of reporting, an approved delegation of authority, appropriate segregation of duties, and a documented framework of policies, codes and standard operating procedures. The control environment reflects the overall attitude, awareness and actions of the Board and the management concerning internal controls and their importance.',
        },
        { type: 'subheading', text: '3.2 Risk Assessment' },
        {
            type: 'para',
            text: 'The Company identifies and assesses the risks relevant to the preparation of financial statements and the safeguarding of assets, including the risk of fraud, and determines how such risks are to be managed. This process is aligned with the Company’s Risk Management Policy.',
        },
        { type: 'subheading', text: '3.3 Control Activities' },
        {
            type: 'list',
            items: [
                'authorisation and approval matrices for expenditure, procurement, payments and investments;',
                'segregation of incompatible duties across initiation, authorisation, recording and custody functions;',
                'periodic reconciliations of bank accounts, ledgers, receivables, payables and inter-unit balances;',
                'physical verification of fixed assets, inventory and cash at defined intervals, with reconciliation of differences;',
                'controls embedded within the accounting, enterprise resource planning and information technology systems of the Company, including access and change-management controls; and',
                'a defined process for review and approval of the periodic financial statements.',
            ],
        },
        { type: 'subheading', text: '3.4 Information and Communication' },
        {
            type: 'para',
            text: 'The Company maintains reliable financial and operational reporting systems that capture and communicate relevant information in a form and within a timeframe that enables the Board, the management and other personnel to carry out their responsibilities.',
        },
        { type: 'subheading', text: '3.5 Monitoring' },
        {
            type: 'para',
            text: 'The internal financial controls are monitored through a combination of ongoing management reviews, independent testing by the internal audit function, and oversight by the Audit Committee. Deficiencies identified are reported to, and remedial actions are tracked by, the appropriate levels of management and the Audit Committee.',
        },
        { type: 'heading', text: '4. Roles and Responsibilities' },
        {
            type: 'list',
            items: [
                'The Board is responsible for laying down internal financial controls and for satisfying itself, through the Audit Committee and the auditors, that such controls are adequate and operating effectively.',
                'The management of the Company is responsible for establishing, documenting, implementing, maintaining and operating internal financial controls and for their day-to-day effectiveness.',
                'The Internal Auditor evaluates the adequacy and operating effectiveness of the internal financial controls, carries out risk-based internal audits and reports observations and recommendations to the Audit Committee.',
                'The Audit Committee reviews the adequacy of the internal financial control systems, the scope and performance of the internal audit function, and the significant findings of internal and statutory audits.',
                'The Statutory Auditors report on the adequacy and operating effectiveness of the internal financial controls with reference to the financial statements, as required under Section 143(3)(i) of the Act.',
            ],
        },
        { type: 'heading', text: '5. Reporting of Deficiencies and Fraud' },
        {
            type: 'para',
            text: 'Any material weakness or significant deficiency in the internal financial controls, and any instance of fraud or suspected fraud identified during the course of internal or statutory audit or otherwise, shall be reported to the Audit Committee and dealt with in accordance with the Act, the Company’s Vigil Mechanism / Whistle Blower Policy and other applicable policies of the Company.',
        },
        { type: 'heading', text: '6. Review and Amendment' },
        {
            type: 'para',
            text: 'This Policy and the underlying control framework shall be reviewed periodically by the management and the Audit Committee, and shall be updated to reflect changes in the business, processes, systems, organisational structure or the regulatory environment. The Board is authorised to amend this Policy from time to time. In the event of any conflict between this Policy and applicable law, the provisions of applicable law shall prevail.',
        },
    ],
};

const archival: Policy = {
    slug: 'archival',
    title: 'Archival Policy',
    reference: 'Regulation 30(8) & 46 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Preamble and Purpose' },
        {
            type: 'para',
            text: 'MRC Agrotech Limited (the “Company”) is required, under Regulation 30 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (the “Listing Regulations”), to disclose to the stock exchange(s) all events or information which, in the opinion of the Board of Directors of the Company, are material. Regulation 30(8) of the Listing Regulations requires the Company to host all such disclosures on its website for a minimum period of five years and thereafter as per the archival policy of the Company. Regulation 46 of the Listing Regulations requires the Company to maintain a functional website containing certain specified information.',
        },
        {
            type: 'para',
            text: 'Accordingly, the Board of Directors (the “Board”) of the Company has framed and adopted this Archival Policy (this “Policy”), which governs the period for which disclosures made by the Company to the stock exchange(s) and hosted on the Company’s website shall be retained on the website, and the manner in which they shall thereafter be archived.',
        },
        { type: 'heading', text: '2. Scope' },
        {
            type: 'para',
            text: 'This Policy applies to all events and information disclosed by the Company to the stock exchange(s) under Regulation 30 of the Listing Regulations and hosted on the website of the Company, as well as to the other information required to be disclosed on the website of the Company under Regulation 46 of the Listing Regulations. This Policy shall be read in conjunction with the Company’s Policy for Preservation of Documents and its Policy for Determination of Materiality of Events or Information.',
        },
        { type: 'heading', text: '3. Retention and Archival of Website Disclosures' },
        {
            type: 'list',
            ordered: true,
            items: [
                'All events or information disclosed by the Company to the stock exchange(s) under Regulation 30 of the Listing Regulations shall be hosted on the website of the Company for a minimum period of five (5) years from the date of such disclosure.',
                'On the expiry of the said period of five years, such disclosures shall be archived by moving them to a separate archive section or repository maintained by the Company (whether on the website or otherwise), and shall be retained thereafter for such further period as may be required under the Company’s Policy for Preservation of Documents and applicable law.',
                'Other information required to be disclosed on the website of the Company under Regulation 46 of the Listing Regulations shall be retained on the website in accordance with the requirements of that Regulation, and shall be updated as and when there is any change in such information.',
                'The archived disclosures shall be capable of being retrieved and made available to the stock exchange(s), the Securities and Exchange Board of India or any other statutory or regulatory authority, as and when required.',
            ],
        },
        { type: 'heading', text: '4. Mode of Archival' },
        {
            type: 'para',
            text: 'The archival of disclosures and documents under this Policy may be maintained in physical form or in electronic form, or both, as may be considered appropriate by the Company Secretary & Compliance Officer, provided that the integrity, authenticity and retrievability of the archived records are preserved. The Company shall take reasonable measures to protect the archived records against unauthorised access, alteration, loss or destruction.',
        },
        { type: 'heading', text: '5. Custodian and Responsibility' },
        {
            type: 'para',
            text: 'The Company Secretary & Compliance Officer shall be the custodian responsible for implementing and administering this Policy, and for archiving and, where applicable and permissible, disposing of the records in accordance with this Policy and the Company’s Policy for Preservation of Documents. The Company Secretary & Compliance Officer may, with the approval of the Board or a Committee thereof, put in place such procedures as may be necessary to give effect to this Policy.',
        },
        { type: 'heading', text: '6. Review and Amendment' },
        {
            type: 'para',
            text: 'This Policy shall be reviewed by the Board as and when required, and in any event upon any amendment to the Listing Regulations affecting the archival of disclosures. The Board is authorised to amend this Policy from time to time. Any subsequent amendment or modification in the Listing Regulations shall automatically apply to this Policy and shall be deemed to be incorporated herein to the extent of any inconsistency. In the event of any conflict between this Policy and the Listing Regulations, the provisions of the Listing Regulations shall prevail.',
        },
    ],
};

const materialityEvents: Policy = {
    slug: 'determination-materiality-events',
    title: 'Policy for Determination of Materiality of Events or Information',
    reference: 'Regulation 30 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Preamble and Purpose' },
        {
            type: 'para',
            text: 'Regulation 30 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (the “Listing Regulations”) requires a listed entity to make disclosure of events or information which, in the opinion of its board of directors, are material. Regulation 30(4)(ii) of the Listing Regulations requires the listed entity to frame a policy for determination of materiality, based on criteria specified therein, duly approved by its board of directors, and to disclose such policy on its website.',
        },
        {
            type: 'para',
            text: 'Accordingly, the Board of Directors (the “Board”) of MRC Agrotech Limited (the “Company”) has framed and adopted this Policy for Determination of Materiality of Events or Information (this “Policy”) to ensure timely, adequate and accurate disclosure of events and information to the stock exchange(s), and to lay down the criteria and authority for determining the materiality of such events or information.',
        },
        { type: 'heading', text: '2. Categories of Events and Information' },
        {
            type: 'para',
            text: 'For the purpose of disclosure under Regulation 30 of the Listing Regulations, events and information are classified into the following categories:',
        },
        {
            type: 'list',
            ordered: true,
            items: [
                'Events specified in Para A of Part A of Schedule III to the Listing Regulations, which shall be disclosed by the Company to the stock exchange(s) without any application of the test of materiality;',
                'Events specified in Para B of Part A of Schedule III to the Listing Regulations, which shall be disclosed by the Company on the basis of the criteria of materiality set out in this Policy; and',
                'Any other event or information which, in the opinion of the Board or the Authorised Officers, is material for the Company and requires disclosure in the interest of transparency and investor protection.',
            ],
        },
        { type: 'heading', text: '3. Criteria for Determination of Materiality' },
        {
            type: 'para',
            text: 'An event or information falling under Para B of Part A of Schedule III, or any other event or information, shall be considered material if, in the opinion of the Board or the Authorised Officers (as defined below), it satisfies any one or more of the following criteria:',
        },
        {
            type: 'list',
            items: [
                'the omission of the event or information is likely to result in discontinuity or alteration of an event or information already available publicly;',
                'the omission of the event or information is likely to result in a significant market reaction if such omission came to light at a later date;',
                'the event or information is such that it is likely to have a material impact on the business, operations, performance, prospects or reputation of the Company;',
                'the value or the expected impact of the event or information, in terms of value, exceeds the lower of two per cent (2%) of turnover, two per cent (2%) of net worth, or five per cent (5%) of the average of the absolute value of profit or loss after tax, as per the last audited consolidated financial statements of the Company, being the threshold specified under Regulation 30(4) of the Listing Regulations; or',
                'in the opinion of the Board of Directors, the event or information is otherwise considered material.',
            ],
        },
        { type: 'heading', text: '4. Authority for Determination and Disclosure' },
        {
            type: 'para',
            text: 'The Board has authorised the Key Managerial Personnel of the Company, namely the Managing Director / Whole-time Director, the Chief Financial Officer and the Company Secretary & Compliance Officer, severally, as the “Authorised Officers” for the purpose of determining the materiality of an event or information, and for making disclosures to the stock exchange(s) under this Policy and the Listing Regulations. The contact details of the Authorised Officers shall be disclosed to the stock exchange(s) and hosted on the website of the Company.',
        },
        { type: 'heading', text: '5. Timing and Manner of Disclosure' },
        {
            type: 'list',
            ordered: true,
            items: [
                'The Company shall first disclose to the stock exchange(s) all events or information which are material, and shall do so as soon as reasonably possible and, in any event, within the timelines prescribed under Regulation 30(6) of the Listing Regulations from the occurrence of the event or from the Company becoming aware of the event or information.',
                'Where an event occurs or information is available at a time when the disclosure cannot be made within the prescribed timeline, the Company shall, along with the disclosure, provide an explanation for the delay.',
                'The Company shall, with respect to disclosures made under Regulation 30, provide updates on a regular basis, till such time the event is resolved or closed, with relevant explanations.',
                'The disclosures shall be hosted on the website of the Company in accordance with the Company’s Archival Policy.',
            ],
        },
        { type: 'heading', text: '6. Overriding Effect, Review and Amendment' },
        {
            type: 'para',
            text: 'This Policy is intended to supplement, and not override, the provisions of the Listing Regulations. In the event of any conflict between this Policy and the Listing Regulations, the provisions of the Listing Regulations shall prevail. This Policy shall be reviewed by the Board as and when required, and any subsequent amendment or modification in the Listing Regulations shall automatically apply to this Policy and shall be deemed to be incorporated herein to the extent of any inconsistency.',
        },
    ],
};

const preservation: Policy = {
    slug: 'preservation-documents',
    title: 'Policy for Preservation of Documents',
    reference: 'Regulation 9 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Preamble and Purpose' },
        {
            type: 'para',
            text: 'Regulation 9 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (the “Listing Regulations”) requires a listed entity to have a policy for preservation of documents, approved by its board of directors, classifying documents in at least two categories — documents to be preserved permanently, and documents to be preserved for a period of not less than eight years after completion of the relevant transactions.',
        },
        {
            type: 'para',
            text: 'Accordingly, the Board of Directors (the “Board”) of MRC Agrotech Limited (the “Company”) has framed and adopted this Policy for Preservation of Documents (this “Policy”), read with the applicable provisions of the Companies Act, 2013 (the “Act”) and the rules made thereunder, to classify the documents and records of the Company and to prescribe the manner and period of their preservation, maintenance and, where permissible, disposal.',
        },
        { type: 'heading', text: '2. Scope and Definitions' },
        {
            type: 'para',
            text: 'This Policy applies to all documents and records of the Company, whether in physical or electronic form. For the purpose of this Policy, “Documents” means any records, registers, deeds, agreements, correspondence, statements, returns, certificates, minutes, financial records and other documents, whether maintained in physical or electronic form, that are created, received or maintained by the Company in the course of its business or in compliance with applicable law.',
        },
        { type: 'heading', text: '3. Classification of Documents' },
        {
            type: 'para',
            text: 'For the purpose of this Policy, the documents and records of the Company are classified into the following two categories:',
        },
        { type: 'subheading', text: '3.1 Documents to be Preserved Permanently' },
        {
            type: 'para',
            text: 'Documents whose preservation is required permanently under any applicable law, and such other documents as the Board or any person authorised by it may consider necessary to be preserved permanently. These include, among others:',
        },
        {
            type: 'list',
            items: [
                'the Certificate of Incorporation (including the fresh certificate consequent upon change of name) and the Memorandum and Articles of Association of the Company;',
                'the statutory registers required to be maintained permanently under the Act, including the register of members;',
                'the minutes of general meetings and of meetings of the Board of Directors and its Committees;',
                'records of allotment, transfer and transmission of securities of the Company; and',
                'title deeds and documents relating to the ownership of the immovable properties and material assets of the Company.',
            ],
        },
        { type: 'subheading', text: '3.2 Documents to be Preserved for Not Less than Eight Years' },
        {
            type: 'para',
            text: 'Documents whose preservation is required for a specified period, being not less than eight (8) years after completion of the relevant transactions, under applicable law, after which they may be destroyed in accordance with this Policy. These include, among others, books of account and financial records, tax records, contracts and agreements after their expiry, and general business correspondence.',
        },
        { type: 'heading', text: '4. Mode of Preservation' },
        {
            type: 'para',
            text: 'Documents may be preserved and maintained either in physical form or in electronic form, or in both forms, to the extent permitted under applicable law. Where documents are maintained in electronic form, the Company shall ensure that they remain legible, authentic, complete and capable of being retrieved, and that adequate back-up and information-security measures are in place to protect against loss, unauthorised access, alteration or destruction.',
        },
        { type: 'heading', text: '5. Destruction of Documents' },
        {
            type: 'para',
            text: 'On the expiry of the applicable retention period, documents (other than those required to be preserved permanently) may be destroyed in a manner authorised by the Company Secretary & Compliance Officer. However, notwithstanding anything contained in this Policy, no document shall be destroyed if it is the subject of, or may be relevant to, any pending or threatened litigation, dispute, claim, investigation, inspection, audit or regulatory proceeding, or is otherwise required to be preserved under any applicable law or order of a competent authority.',
        },
        { type: 'heading', text: '6. Custodian, Review and Amendment' },
        {
            type: 'para',
            text: 'The Company Secretary & Compliance Officer shall be the custodian responsible for administering this Policy and for maintaining a record of documents preserved and destroyed under it. This Policy shall be reviewed by the Board as and when required. The Board may amend this Policy from time to time to give effect to any change in applicable law. In the event of any conflict between this Policy and applicable law, the provisions of applicable law shall prevail.',
        },
    ],
};

const riskManagement: Policy = {
    slug: 'risk-management',
    title: 'Risk Management Policy',
    reference: 'Regulation 21 of SEBI (LODR) Regulations, 2015 & Section 134(3)(n), Companies Act, 2013',
    blocks: [
        { type: 'heading', text: '1. Preamble and Regulatory Framework' },
        {
            type: 'para',
            text: 'MRC Agrotech Limited (the “Company”) operates in the agriculture and agri-processing sector and, in the ordinary course of its business, is exposed to a variety of internal and external risks. Effective risk management is integral to the achievement of the Company’s strategic objectives and to the protection of the interests of its shareholders and other stakeholders.',
        },
        {
            type: 'para',
            text: 'This Risk Management Policy (this “Policy”) has been framed and adopted by the Board of Directors (the “Board”) of the Company pursuant to Section 134(3)(n) of the Companies Act, 2013 (the “Act”), which requires the Board’s Report to include a statement indicating the development and implementation of a risk management policy, and Regulation 17(9) and (where applicable) Regulation 21 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (the “Listing Regulations”).',
        },
        { type: 'heading', text: '2. Objective' },
        {
            type: 'para',
            text: 'The objective of this Policy is to establish a structured and disciplined framework for the identification, assessment, monitoring, mitigation and reporting of the risks that may affect the achievement of the Company’s objectives, so as to:',
        },
        {
            type: 'list',
            items: [
                'embed a risk-aware culture across the organisation and integrate risk management with the strategic, operational and financial decision-making of the Company;',
                'identify and assess, on a continuing basis, the risks that could materially affect the Company’s business, and to determine the Company’s appetite and tolerance for such risks;',
                'put in place appropriate measures to mitigate, transfer, avoid or accept the identified risks; and',
                'ensure timely reporting of, and response to, material risks to the Board and its Committees.',
            ],
        },
        { type: 'heading', text: '3. Categories of Risk' },
        {
            type: 'para',
            text: 'The principal categories of risk to which the Company is exposed include, but are not limited to, the following:',
        },
        {
            type: 'list',
            items: [
                'Business and operational risks, including risks arising from crop cycles, seasonality, weather and climatic conditions, pests and diseases, availability, quality and cost of raw material, and disruption in cultivation, processing, storage, logistics and the supply chain;',
                'Market and commodity price risks, including volatility in the prices of agricultural produce, essential oils, seeds and other inputs and outputs, and changes in demand and competition;',
                'Financial risks, including liquidity risk, credit and counterparty risk, interest rate risk and foreign exchange risk;',
                'Regulatory, legal and compliance risks arising from changes in laws, regulations, taxation and government policies applicable to the agri-business, and from non-compliance therewith;',
                'Information technology, data protection and cyber-security risks;',
                'Human resources risks, including the ability to attract and retain skilled personnel; and',
                'Reputational, environmental, health, safety and sustainability risks.',
            ],
        },
        { type: 'heading', text: '4. Risk Management Framework and Process' },
        {
            type: 'para',
            text: 'The Company follows a structured and continuous risk management process comprising the following stages:',
        },
        {
            type: 'list',
            ordered: true,
            items: [
                'Risk identification — identifying the risks, whether internal or external, that could affect the achievement of the Company’s objectives, across functions and business processes;',
                'Risk assessment — assessing each identified risk in terms of the likelihood of its occurrence and the magnitude of its potential impact, and prioritising the risks accordingly;',
                'Risk mitigation and response — formulating and implementing appropriate mitigation plans, controls and responses for the significant risks, and assigning ownership for each such risk to a designated risk owner;',
                'Monitoring and review — monitoring the status of the identified risks and the effectiveness of the mitigation measures on an ongoing basis; and',
                'Reporting — reporting on the key risks and the mitigation actions to the management, the relevant Committee and the Board at appropriate intervals.',
            ],
        },
        { type: 'heading', text: '5. Roles and Responsibilities' },
        {
            type: 'list',
            items: [
                'The Board of Directors has overall responsibility for the risk management framework of the Company, for reviewing the framework, and for satisfying itself that appropriate systems of risk management are in place.',
                'The Risk Management Committee (where constituted) and/or the Audit Committee assists the Board in monitoring and reviewing the risk management plan, the framework and its implementation, and the adequacy of the risk management systems.',
                'The management is responsible for implementing and maintaining the risk management framework, identifying and assessing risks within their respective functions, implementing mitigation measures, and reporting on key risks.',
                'Every employee of the Company is responsible for being aware of, and for managing, the risks arising in the course of their duties, in accordance with this Policy.',
            ],
        },
        { type: 'heading', text: '6. Review and Amendment' },
        {
            type: 'para',
            text: 'This Policy and the risk management framework shall be reviewed periodically by the relevant Committee and the Board, and shall be updated to reflect changes in the internal and external environment, the business of the Company and the regulatory framework. The Board is authorised to amend this Policy from time to time. In the event of any conflict between this Policy and applicable law, the provisions of applicable law shall prevail.',
        },
    ],
};

const insiderTrading: Policy = {
    slug: 'insider-trading-code',
    title: 'Code of Conduct for Prevention of Insider Trading & Code of Fair Disclosure of UPSI',
    reference: 'SEBI (Prohibition of Insider Trading) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Preamble' },
        {
            type: 'para',
            text: 'The Securities and Exchange Board of India (Prohibition of Insider Trading) Regulations, 2015 (the “PIT Regulations”) prohibit insider trading and require every listed company to formulate (a) a code of practices and procedures for fair disclosure of unpublished price sensitive information under Regulation 8, and (b) a code of conduct to regulate, monitor and report trading by its designated persons and their immediate relatives under Regulation 9.',
        },
        {
            type: 'para',
            text: 'Accordingly, the Board of Directors (the “Board”) of MRC Agrotech Limited (the “Company”) has adopted this Code of Conduct for Prevention of Insider Trading and Code of Practices and Procedures for Fair Disclosure of Unpublished Price Sensitive Information (this “Code”). This Code is intended to preserve the confidentiality of unpublished price sensitive information, to prevent misuse thereof, and to ensure compliance by the Company and its designated persons with the PIT Regulations.',
        },
        { type: 'heading', text: '2. Definitions' },
        {
            type: 'para',
            text: 'In this Code, unless the context otherwise requires, the following terms shall have the meanings assigned to them below. Words and expressions used but not defined herein shall have the meanings respectively assigned to them under the PIT Regulations, the Companies Act, 2013, the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015, the Securities Contracts (Regulation) Act, 1956 and the Depositories Act, 1996.',
        },
        {
            type: 'defs',
            items: [
                {
                    term: 'Connected Person',
                    text: 'shall have the meaning assigned to it under Regulation 2(1)(d) of the PIT Regulations, and includes any person who is or has, during the six months prior to the concerned act, been associated with the Company in any capacity that allows access, directly or indirectly, to unpublished price sensitive information.',
                },
                {
                    term: 'Insider',
                    text: 'means any person who is (i) a connected person; or (ii) in possession of or having access to unpublished price sensitive information.',
                },
                {
                    term: 'Trading',
                    text: 'means and includes subscribing, buying, selling, dealing, or agreeing to subscribe, buy, sell or deal in any securities of the Company, and “trade” shall be construed accordingly.',
                },
                {
                    term: 'Unpublished Price Sensitive Information (UPSI)',
                    text: 'means any information, relating to the Company or its securities, directly or indirectly, that is not generally available which upon becoming generally available is likely to materially affect the price of the securities, and shall ordinarily include information relating to financial results; dividends; change in capital structure; mergers, de-mergers, acquisitions, delistings, disposals and expansion of business and such other transactions; and changes in key managerial personnel.',
                },
                {
                    term: 'Designated Person',
                    text: 'means the persons designated as such by the Board in consultation with the Compliance Officer, including directors, promoters, key managerial personnel, and such employees, connected persons and intermediaries as are identified on the basis of their role and function and their access to UPSI.',
                },
                {
                    term: 'Compliance Officer',
                    text: 'means the Company Secretary or such other senior officer designated by the Board, who is responsible for administration of this Code, monitoring of compliance and maintenance of records.',
                },
            ],
        },
        { type: 'heading', text: '3. Code of Practices and Procedures for Fair Disclosure of UPSI' },
        {
            type: 'para',
            text: 'The Company shall adhere to the following principles in respect of the fair disclosure of UPSI:',
        },
        {
            type: 'list',
            ordered: true,
            items: [
                'prompt public disclosure of UPSI that would impact price discovery, no sooner than credible and concrete information comes into being, in order to make such information generally available;',
                'uniform and universal dissemination of UPSI to avoid selective disclosure;',
                'designation of a senior officer as the Chief Investor Relations Officer to deal with the dissemination of information and disclosure of UPSI;',
                'prompt dissemination of UPSI that gets disclosed selectively, inadvertently or otherwise, so as to make such information generally available;',
                'appropriate and fair response to queries on news reports and requests for verification of market rumours by regulatory authorities;',
                'ensuring that information shared with analysts and research personnel is not UPSI;',
                'developing best practices to make transcripts or records of proceedings of meetings with analysts and other investor relations conferences on the official website to ensure official confirmation and documentation of any disclosures made; and',
                'handling of all UPSI on a need-to-know basis, and maintenance of a structured digital database containing the names and other particulars of persons with whom UPSI is shared, along with time-stamping and audit trails.',
            ],
        },
        { type: 'heading', text: '4. Code of Conduct for Prevention of Insider Trading' },
        {
            type: 'para',
            text: 'The following restrictions shall apply to Designated Persons and their immediate relatives in relation to trading in the securities of the Company:',
        },
        {
            type: 'list',
            ordered: true,
            items: [
                'no Insider shall trade in the securities of the Company when in possession of UPSI;',
                'no Insider shall communicate, provide or allow access to any UPSI relating to the Company or its securities to any person except where such communication is in furtherance of legitimate purposes, performance of duties or discharge of legal obligations;',
                'the trading window shall be closed when the Compliance Officer determines that a Designated Person or class of Designated Persons can reasonably be expected to have possession of UPSI, and no Designated Person shall trade in the securities of the Company during the period the trading window is closed;',
                'the trading window shall, in any event, remain closed from the end of every quarter till forty-eight hours after the declaration of the financial results;',
                'when the trading window is open, Designated Persons and their immediate relatives shall obtain pre-clearance of trades from the Compliance Officer in respect of trades exceeding the threshold quantity or value prescribed by the Compliance Officer, and shall execute the pre-cleared trade within the validity period prescribed;',
                'Designated Persons who are permitted to trade shall not execute a contra-trade during the next six months following the prior transaction, and any profits from such contra-trade, in contravention of this restriction, shall be liable to be disgorged; and',
                'Designated Persons, promoters, members of the promoter group and other persons shall make the initial and continual disclosures of their holdings and trades to the Company and, where applicable, to the stock exchange(s), within the timelines and in the manner prescribed under Chapter III of the PIT Regulations.',
            ],
        },
        { type: 'heading', text: '5. Institutional Mechanism and Structured Digital Database' },
        {
            type: 'para',
            text: 'The Company shall put in place adequate and effective systems of internal controls to ensure compliance with this Code and the PIT Regulations, and shall maintain a structured digital database containing the nature of the UPSI and the names and other particulars (including the Permanent Account Number or other identifier) of the persons with whom such UPSI is shared. The database shall be maintained internally with adequate security, time-stamping and audit trails, and shall not be outsourced.',
        },
        { type: 'heading', text: '6. Compliance Officer' },
        {
            type: 'para',
            text: 'The Company Secretary & Compliance Officer is responsible for administering this Code, for the maintenance of records, for monitoring compliance, for granting or refusing pre-clearance of trades, for closing and opening the trading window, and for reporting to the Board and the Audit Committee. The Compliance Officer shall have due regard to the requirements of the PIT Regulations in the discharge of these functions.',
        },
        { type: 'heading', text: '7. Consequences of Violation' },
        {
            type: 'para',
            text: 'Any Designated Person or other person who trades in securities or communicates any information in contravention of this Code or the PIT Regulations shall be liable for disciplinary action by the Company, which may include wage freeze, suspension, recovery, claw-back and cessation of services, in addition to being liable to action under the PIT Regulations and other applicable laws. Such action by the Company shall be in addition to, and without prejudice to, any action that the Securities and Exchange Board of India may take under the PIT Regulations. Any violation of this Code, and the action taken in respect thereof, shall be reported to the Securities and Exchange Board of India and to the stock exchange(s) to the extent required under the PIT Regulations.',
        },
        { type: 'heading', text: '8. Review and Amendment' },
        {
            type: 'para',
            text: 'This Code shall be reviewed by the Board as and when required. Any subsequent amendment or modification in the PIT Regulations or other applicable law shall automatically apply to this Code and shall be deemed to be incorporated herein to the extent of any inconsistency. In the event of any conflict between this Code and the PIT Regulations, the provisions of the PIT Regulations shall prevail.',
        },
    ],
};

const whistleBlower: Policy = {
    slug: 'whistle-blower',
    title: 'Vigil Mechanism / Whistle Blower Policy',
    reference: 'Section 177(9) of the Companies Act, 2013 & Regulation 22 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Preamble and Objective' },
        {
            type: 'para',
            text: 'MRC Agrotech Limited (the “Company”) is committed to conducting its affairs in a fair and transparent manner, and to adhering to the highest standards of professionalism, honesty, integrity and ethical behaviour in all its dealings. The Company encourages an open culture in which its Directors and employees can, in good faith, raise genuine concerns about actual or suspected wrongdoing without fear of reprisal.',
        },
        {
            type: 'para',
            text: 'This Vigil Mechanism / Whistle Blower Policy (this “Policy”) has been framed and adopted by the Board of Directors (the “Board”) of the Company pursuant to Section 177(9) and (10) of the Companies Act, 2013 (the “Act”) read with Rule 7 of the Companies (Meetings of Board and its Powers) Rules, 2014, and Regulation 22 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (the “Listing Regulations”), which require the Company to establish a vigil mechanism for Directors and employees to report genuine concerns.',
        },
        { type: 'heading', text: '2. Definitions' },
        {
            type: 'defs',
            items: [
                {
                    term: 'Whistle Blower',
                    text: 'means a Director or employee of the Company who makes a Protected Disclosure under this Policy.',
                },
                {
                    term: 'Protected Disclosure',
                    text: 'means a concern raised in good faith by a Whistle Blower, through a written communication, disclosing information which the Whistle Blower reasonably believes evidences unethical or improper activity, actual or suspected fraud, or violation of law or of the Company’s Code of Conduct.',
                },
                {
                    term: 'Audit Committee',
                    text: 'means the Audit Committee constituted by the Board under Section 177 of the Act and Regulation 18 of the Listing Regulations.',
                },
            ],
        },
        { type: 'heading', text: '3. Scope and Coverage' },
        {
            type: 'para',
            text: 'This Policy covers all Directors and employees of the Company. A Whistle Blower may make a Protected Disclosure in respect of concerns relating to, among other things:',
        },
        {
            type: 'list',
            items: [
                'financial irregularities, including fraud or suspected fraud, or deliberate error in the preparation and maintenance of financial statements or records;',
                'misappropriation, misuse or waste of the funds or assets of the Company;',
                'violation of any law, rule or regulation applicable to the Company;',
                'manipulation of Company data or records, and any unlawful or unethical conduct;',
                'abuse of authority, or any conduct that results or is likely to result in a conflict of interest; and',
                'any breach of the Company’s Code of Conduct, Code of Conduct for Prevention of Insider Trading, or ethics policies, or any act that endangers the health and safety of employees or the public, or damages the environment.',
            ],
        },
        {
            type: 'para',
            text: 'This Policy is not a substitute for, and does not replace, the normal reporting channels of the Company, nor is it intended to be used for raising personal grievances relating to service matters, which are dealt with under the applicable human-resource policies.',
        },
        { type: 'heading', text: '4. Reporting Mechanism' },
        {
            type: 'para',
            text: 'A Whistle Blower may make a Protected Disclosure in writing, addressed to the Company Secretary & Compliance Officer, or, in appropriate cases (including cases involving members of senior management), directly to the Chairperson of the Audit Committee, at the addresses notified by the Company. A Protected Disclosure should be factual, contain as much specific and verifiable information as possible (including the nature of the concern, the persons involved and supporting particulars), and be submitted as soon as possible after the Whistle Blower becomes aware of the matter.',
        },
        { type: 'heading', text: '5. Investigation' },
        {
            type: 'para',
            text: 'All Protected Disclosures shall be investigated in a fair, objective and time-bound manner, by or under the supervision of the Audit Committee. The decision to conduct an investigation is by itself not an accusation and is treated as a neutral fact-finding process. The Whistle Blower and any person assisting in the investigation shall extend their fullest co-operation, and the person against whom the disclosure is made shall be given an opportunity to be heard, consistent with the requirements of a fair investigation. On conclusion, the Audit Committee shall recommend appropriate action.',
        },
        { type: 'heading', text: '6. Protection to the Whistle Blower and Direct Access' },
        {
            type: 'para',
            text: 'The Company shall provide adequate safeguards against the victimisation of any Whistle Blower who avails of the vigil mechanism, and shall ensure that no unfair treatment is meted out to a Whistle Blower by reason of their having made a Protected Disclosure. The Company shall take steps to minimise any difficulties that the Whistle Blower may experience as a result of making the disclosure. This Policy provides for direct access to the Chairperson of the Audit Committee in appropriate or exceptional cases. The identity of the Whistle Blower shall be kept confidential to the extent possible under law.',
        },
        { type: 'heading', text: '7. Misuse of the Mechanism' },
        {
            type: 'para',
            text: 'While this Policy protects genuine Whistle Blowers, any person who makes a Protected Disclosure that is subsequently found to be malicious, frivolous, or made with a mala fide intention or in the knowledge that it is false, shall be subject to appropriate disciplinary action in accordance with the rules and policies of the Company.',
        },
        { type: 'heading', text: '8. Retention of Records, Disclosure and Amendment' },
        {
            type: 'para',
            text: 'The Company Secretary & Compliance Officer shall maintain records of all Protected Disclosures and the action taken thereon, in accordance with the Company’s Policy for Preservation of Documents. The existence of this vigil mechanism, and the manner in which Directors and employees may avail of it, shall be disclosed on the website of the Company and in the Board’s Report, as required under the Act and the Listing Regulations. This Policy shall be reviewed by the Board as and when required, and any subsequent amendment in the Act or the Listing Regulations shall automatically apply to this Policy to the extent of any inconsistency.',
        },
    ],
};

export const policies: Policy[] = [
    materialSubsidiaries,
    familiarisation,
    idTerms,
    groupCompany,
    ifc,
    archival,
    materialityEvents,
    preservation,
    riskManagement,
    insiderTrading,
    whistleBlower,
];
