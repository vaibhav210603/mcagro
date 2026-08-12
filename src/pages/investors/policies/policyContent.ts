import type { Policy } from './PolicyLayout';

// Full text of the statutory policies of MRC Agrotech Limited, drafted from the standard
// SEBI (LODR) Regulations, 2015 / Companies Act, 2013 / SEBI (PIT) Regulations, 2015 templates
// adopted by comparable listed agri companies. Reviewed and adopted by the Board.

const materialSubsidiaries: Policy = {
    slug: 'material-subsidiaries',
    title: 'Policy for Determining Material Subsidiaries',
    reference: 'Regulation 16(1)(c) & 24 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Purpose and Scope' },
        {
            type: 'para',
            text: 'This Policy is framed by MRC Agrotech Limited (the “Company”) pursuant to Regulation 16(1)(c) of the Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015 (the “Listing Regulations”). Its purpose is to lay down the criteria for identifying subsidiaries of the Company which are “material” and to govern the dealings and disclosures relating to such subsidiaries so as to ensure adequate oversight of their business and affairs.',
        },
        { type: 'heading', text: '2. Definitions' },
        {
            type: 'defs',
            items: [
                {
                    term: 'Subsidiary',
                    text: 'shall have the meaning assigned to it under Section 2(87) of the Companies Act, 2013 and the rules made thereunder.',
                },
                {
                    term: 'Material Subsidiary',
                    text: 'means a subsidiary whose income or net worth (i.e. paid-up capital and free reserves) exceeds ten per cent of the consolidated income or net worth respectively of the Company and its subsidiaries in the immediately preceding accounting year.',
                },
                {
                    term: 'Material Subsidiary for the purpose of Board oversight',
                    text: 'means a subsidiary whose income or net worth exceeds twenty per cent of the consolidated income or net worth respectively of the Company and its subsidiaries in the immediately preceding accounting year.',
                },
            ],
        },
        { type: 'heading', text: '3. Governance of Material Subsidiaries' },
        {
            type: 'list',
            ordered: true,
            items: [
                'At least one Independent Director of the Company shall be a director on the board of directors of an unlisted material subsidiary, whether incorporated in India or not, in accordance with Regulation 24(1) of the Listing Regulations.',
                'The Audit Committee of the Company shall review the financial statements, in particular the investments made by the unlisted subsidiary.',
                'The minutes of the meetings of the board of directors of the unlisted subsidiary shall be placed at the meeting of the Board of Directors of the Company.',
                'The management shall periodically bring to the attention of the Board of Directors of the Company a statement of all significant transactions and arrangements entered into by the unlisted subsidiary.',
            ],
        },
        { type: 'heading', text: '4. Disposal / Reduction of Shareholding' },
        {
            type: 'para',
            text: 'The Company shall not dispose of shares in its material subsidiary resulting in reduction of its shareholding (either on its own or together with other subsidiaries) to less than or equal to fifty per cent, or cease the exercise of control over the subsidiary, without passing a special resolution in its General Meeting, except in cases where such divestment is made under a scheme of arrangement duly approved by a Court / Tribunal, or under a resolution plan duly approved under the Insolvency and Bankruptcy Code, 2016 and disclosed to the stock exchanges.',
        },
        {
            type: 'para',
            text: 'Selling, disposing of or leasing of assets amounting to more than twenty per cent of the assets of the material subsidiary on an aggregate basis during a financial year shall require prior approval of shareholders by way of a special resolution, unless the sale/disposal/lease is made under a scheme of arrangement duly approved by a Court/Tribunal or the National Company Law Tribunal.',
        },
        { type: 'heading', text: '5. Review and Amendment' },
        {
            type: 'para',
            text: 'The Board of Directors is authorised to review and amend this Policy from time to time. Any subsequent amendment or modification in the Listing Regulations or other applicable laws shall automatically apply to this Policy and shall be deemed to be incorporated herein.',
        },
    ],
};

const familiarisation: Policy = {
    slug: 'familiarisation',
    title: 'Familiarisation Programme for Independent Directors',
    reference: 'Regulation 25(7) of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Objective' },
        {
            type: 'para',
            text: 'This Programme is adopted by MRC Agrotech Limited (the “Company”) in compliance with Regulation 25(7) of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015. The objective is to familiarise the Independent Directors of the Company with the Company, their roles, rights and responsibilities, the nature of the industry in which the Company operates, and the business model of the Company, so that they can effectively contribute as Directors of the Company.',
        },
        { type: 'heading', text: '2. Familiarisation Process' },
        {
            type: 'para',
            text: 'On appointment, each Independent Director is issued a formal letter of appointment setting out in detail the terms of appointment, duties, responsibilities and expected time commitments. The Company Secretary conducts an induction and briefs the Director on the Company, its group structure, subsidiaries, constitution, Board procedures and matters reserved for the Board.',
        },
        {
            type: 'para',
            text: 'The Independent Directors are, on an ongoing basis, familiarised with the following through presentations and interactions with the management:',
        },
        {
            type: 'list',
            items: [
                'The nature of the agri-business, cultivation, processing and trading operations of the Company and the geographies and markets it serves;',
                'The Company’s business model, product portfolio, supply chain and go-to-market strategy;',
                'The applicable regulatory framework, including the Companies Act, 2013, the Listing Regulations and other laws relevant to the Company’s operations;',
                'The Company’s strategic and financial plans, performance, budgets and internal control systems;',
                'Significant developments in the Company’s business and changes in the operating environment, economy and regulatory landscape; and',
                'The roles, rights, responsibilities and liabilities of Independent Directors under applicable law and the Company’s Code of Conduct.',
            ],
        },
        { type: 'heading', text: '3. Review and Disclosure' },
        {
            type: 'para',
            text: 'The Familiarisation Programme, including the details of the programmes attended and the number of hours spent by each Independent Director, shall be disclosed on the website of the Company and in the Corporate Governance Report forming part of the Annual Report, as required under the Listing Regulations. The Nomination and Remuneration Committee shall review this Programme periodically and recommend amendments to the Board.',
        },
    ],
};

const idTerms: Policy = {
    slug: 'independent-directors-terms',
    title: 'Terms and Conditions for Appointment of Independent Directors',
    reference: 'Schedule IV, Companies Act, 2013 & Regulation 46 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Appointment' },
        {
            type: 'para',
            text: 'Independent Directors of MRC Agrotech Limited (the “Company”) are appointed by the shareholders on the recommendation of the Board of Directors and the Nomination and Remuneration Committee, in accordance with the provisions of the Companies Act, 2013 and the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015. The appointment is for a term as approved by the shareholders and is subject to the Director continuing to meet the criteria of independence prescribed under Section 149(6) of the Companies Act, 2013 and Regulation 16(1)(b) of the Listing Regulations.',
        },
        { type: 'heading', text: '2. Role, Duties and Responsibilities' },
        {
            type: 'para',
            text: 'An Independent Director shall abide by the duties of directors provided under the Companies Act, 2013 and the “Code for Independent Directors” set out in Schedule IV thereto, and by the Code of Conduct of the Company. In particular, an Independent Director shall:',
        },
        {
            type: 'list',
            items: [
                'Uphold ethical standards of integrity and probity and act objectively and constructively in the best interests of the Company and its stakeholders;',
                'Exercise their responsibilities in a bona fide manner and devote sufficient time and attention to their professional obligations for informed and balanced decision making;',
                'Bring an independent judgment to bear on the deliberations of the Board, particularly on issues of strategy, performance, risk management, resources, key appointments and standards of conduct;',
                'Scrutinise and monitor the performance of management in meeting agreed goals and objectives, and satisfy themselves on the integrity of financial information and that financial controls and systems of risk management are robust and defensible; and',
                'Not disclose confidential information of the Company unless expressly approved by the Board or required by law.',
            ],
        },
        { type: 'heading', text: '3. Remuneration' },
        {
            type: 'para',
            text: 'An Independent Director shall be entitled to sitting fees for attending meetings of the Board and Committees, reimbursement of expenses for participation in such meetings, and profit-related commission (if any) as may be approved by the shareholders, within the limits prescribed under the Companies Act, 2013. Independent Directors shall not be entitled to any stock options.',
        },
        { type: 'heading', text: '4. Time Commitment, Evaluation and Exit' },
        {
            type: 'para',
            text: 'An Independent Director is expected to devote sufficient time to the affairs of the Company. The performance of each Independent Director is evaluated annually. An Independent Director may resign or be removed in accordance with the provisions of the Companies Act, 2013 and the Listing Regulations. On appointment, the terms and conditions of appointment are disclosed on the website of the Company.',
        },
    ],
};

const groupCompany: Policy = {
    slug: 'group-company-material-litigation',
    title: 'Policy on Determination of Group Companies, Material Creditors & Material Litigation',
    reference: 'SEBI (LODR) Regulations, 2015 & applicable disclosure requirements',
    blocks: [
        { type: 'heading', text: '1. Purpose' },
        {
            type: 'para',
            text: 'This Policy of MRC Agrotech Limited (the “Company”) lays down the criteria for determination of Group Companies, Material Creditors and Material Litigation for the purpose of disclosures and compliance under applicable laws, including the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 and, where relevant, the SEBI (Issue of Capital and Disclosure Requirements) Regulations, 2018.',
        },
        { type: 'heading', text: '2. Group Companies' },
        {
            type: 'para',
            text: 'A company shall be considered a “Group Company” of the Company if it is a member of the promoter/promoter group of the Company, or if it is a company with which the Company has entered into related party transactions that are material as per the Company’s Policy on Related Party Transactions, or which is otherwise covered under the applicable accounting standards for consolidation. The Board may, on a case-to-case basis, and on the recommendation of the management, consider whether any additional company should be regarded as a Group Company.',
        },
        { type: 'heading', text: '3. Material Creditors' },
        {
            type: 'para',
            text: 'A creditor of the Company shall be considered “material” if the amounts due to such creditor exceed five per cent of the total trade payables of the Company as per the latest audited standalone financial statements of the Company. Dues to Material Creditors shall be monitored and disclosed where required under applicable law.',
        },
        { type: 'heading', text: '4. Material Litigation' },
        {
            type: 'para',
            text: 'Litigation, legal proceedings, disputes or regulatory actions involving the Company, its directors, promoters or subsidiaries shall be considered “material” if the monetary amount involved exceeds the threshold determined by the Board from time to time (being the lower of an amount equal to two per cent of the turnover, or two per cent of the net worth, or five per cent of the average absolute value of profit or loss after tax, of the Company as per the last audited consolidated financial statements), or where the outcome, though not quantifiable in monetary terms, is likely to have a material bearing on the business, operations, performance, prospects or reputation of the Company.',
        },
        { type: 'heading', text: '5. Review' },
        {
            type: 'para',
            text: 'This Policy shall be reviewed by the Board as and when required to align with amendments in applicable laws. The Board is authorised to determine, in cases of ambiguity, whether a particular entity, creditor or proceeding is material for the purposes of this Policy.',
        },
    ],
};

const ifc: Policy = {
    slug: 'internal-financial-control',
    title: 'Internal Financial Control Policy',
    reference: 'Section 134(5)(e) & 143(3)(i), Companies Act, 2013',
    blocks: [
        { type: 'heading', text: '1. Objective' },
        {
            type: 'para',
            text: 'This Policy is adopted by MRC Agrotech Limited (the “Company”) to establish and maintain adequate internal financial controls commensurate with the size, scale and complexity of its operations, as contemplated under the Companies Act, 2013. “Internal Financial Controls” means the policies and procedures adopted by the Company for ensuring the orderly and efficient conduct of its business, including adherence to the Company’s policies, the safeguarding of its assets, the prevention and detection of frauds and errors, the accuracy and completeness of the accounting records, and the timely preparation of reliable financial information.',
        },
        { type: 'heading', text: '2. Control Framework' },
        {
            type: 'para',
            text: 'The internal financial control framework of the Company is designed around the following components:',
        },
        {
            type: 'list',
            items: [
                'Control Environment — a defined organisational structure with clear delegation of authority, segregation of duties and a documented framework of policies and standard operating procedures;',
                'Risk Assessment — identification and assessment of risks relevant to the preparation of financial statements and the safeguarding of assets;',
                'Control Activities — authorisation and approval matrices, reconciliations, physical verification of assets and inventory, and controls embedded in the accounting and IT systems of the Company;',
                'Information and Communication — reliable financial and operational reporting systems that ensure information flows to the appropriate levels of management; and',
                'Monitoring — periodic review by management, testing by internal audit, and oversight by the Audit Committee.',
            ],
        },
        { type: 'heading', text: '3. Roles and Responsibilities' },
        {
            type: 'para',
            text: 'The management of the Company is responsible for establishing, maintaining and operating internal financial controls and for their effectiveness. The Internal Auditor evaluates the adequacy and operating effectiveness of these controls and reports observations to the Audit Committee. The Audit Committee reviews the adequacy of the internal financial control systems and the internal audit function, and the statutory auditors report on the adequacy and operating effectiveness of internal financial controls with reference to the financial statements.',
        },
        { type: 'heading', text: '4. Review' },
        {
            type: 'para',
            text: 'This Policy and the underlying control framework shall be reviewed periodically by the management and the Audit Committee, and updated to reflect changes in the business, processes, systems or the regulatory environment.',
        },
    ],
};

const archival: Policy = {
    slug: 'archival',
    title: 'Archival Policy',
    reference: 'Regulation 30(8) & 46 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Purpose' },
        {
            type: 'para',
            text: 'This Archival Policy is framed by MRC Agrotech Limited (the “Company”) pursuant to Regulation 30(8) read with Regulation 46 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015. It governs the period for which disclosures made by the Company to the stock exchange(s) and hosted on the Company’s website shall be retained and thereafter archived.',
        },
        { type: 'heading', text: '2. Archival of Disclosures' },
        {
            type: 'list',
            ordered: true,
            items: [
                'All events or information disclosed by the Company under Regulation 30 of the Listing Regulations shall be hosted on the website of the Company for a minimum period of five years, and thereafter as per this Archival Policy.',
                'On expiry of the said period of five years, such disclosures shall be archived and moved to an archive section or repository maintained by the Company, and shall be retained thereafter for such period as may be required under the Company’s Policy for Preservation of Documents and applicable law.',
                'Other information required to be disclosed on the website under Regulation 46 shall be retained on the website in accordance with the requirements of that Regulation and updated as and when there is any change.',
            ],
        },
        { type: 'heading', text: '3. Custodian and Review' },
        {
            type: 'para',
            text: 'The Company Secretary & Compliance Officer shall be the custodian responsible for implementing this Policy and for archiving and, where applicable, disposing of the records in accordance herewith. The Board may amend this Policy from time to time to align with amendments to the Listing Regulations.',
        },
    ],
};

const materialityEvents: Policy = {
    slug: 'determination-materiality-events',
    title: 'Policy for Determination of Materiality of Events or Information',
    reference: 'Regulation 30 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Purpose' },
        {
            type: 'para',
            text: 'This Policy is framed by MRC Agrotech Limited (the “Company”) pursuant to Regulation 30(4) of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015, to ensure timely and adequate disclosure of events and information to the stock exchange(s) and to determine the materiality of such events or information.',
        },
        { type: 'heading', text: '2. Events Deemed Material' },
        {
            type: 'para',
            text: 'The events specified in Para A of Part A of Schedule III to the Listing Regulations shall be disclosed by the Company without applying any test of materiality. The events specified in Para B of Part A of Schedule III shall be disclosed on application of the guidelines for materiality set out below.',
        },
        { type: 'heading', text: '3. Criteria for Determination of Materiality' },
        {
            type: 'para',
            text: 'An event or information shall be considered material if, in the opinion of the Board / the Authorised Officers (as defined below), it satisfies any of the following:',
        },
        {
            type: 'list',
            items: [
                'The omission of the event or information is likely to result in discontinuity or alteration of an event or information already available publicly;',
                'The omission of the event or information is likely to result in significant market reaction if such omission came to light at a later date;',
                'The event or information is such that it is likely to have a material impact on the business, operations, performance, prospects or reputation of the Company; or',
                'In the opinion of the Board of Directors, the event or information is otherwise considered material, or where a quantitative threshold specified under the Listing Regulations is exceeded.',
            ],
        },
        { type: 'heading', text: '4. Authority for Determination and Disclosure' },
        {
            type: 'para',
            text: 'The Board of Directors has authorised the Key Managerial Personnel of the Company, including the Managing Director / Whole-time Director, the Chief Financial Officer and the Company Secretary & Compliance Officer, severally, as the “Authorised Officers” for the purpose of determining the materiality of an event or information and for making disclosures to the stock exchange(s). The contact details of the Authorised Officers shall be disclosed to the stock exchange(s) and hosted on the Company’s website.',
        },
        { type: 'heading', text: '5. Timing of Disclosure' },
        {
            type: 'para',
            text: 'The Company shall first disclose to the stock exchange(s) all events or information which are material, as soon as reasonably possible and within the timelines prescribed under the Listing Regulations from the occurrence of the event or the Company becoming aware of the information. Where disclosure is made after the prescribed time, the Company shall provide an explanation for the delay.',
        },
    ],
};

const preservation: Policy = {
    slug: 'preservation-documents',
    title: 'Policy for Preservation of Documents',
    reference: 'Regulation 9 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Purpose' },
        {
            type: 'para',
            text: 'This Policy is framed by MRC Agrotech Limited (the “Company”) pursuant to Regulation 9 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015, read with the applicable provisions of the Companies Act, 2013, to classify documents and records of the Company and prescribe the manner and period of their preservation.',
        },
        { type: 'heading', text: '2. Classification of Documents' },
        {
            type: 'para',
            text: 'For the purpose of this Policy, the documents and records of the Company are classified into two categories:',
        },
        {
            type: 'list',
            items: [
                'Documents to be preserved permanently — documents whose preservation is required permanently under any applicable law, and such other documents as the Board or any authorised person may consider necessary to be preserved permanently. These include, among others, the Memorandum and Articles of Association, statutory registers required to be maintained permanently, minutes of general meetings and Board / Committee meetings, and share transfer and allotment records.',
                'Documents to be preserved for not less than eight years — documents whose preservation is required for a specified period (not less than eight years after completion of the relevant transactions) under applicable law, after which they may be destroyed with the approval of the authorised person.',
            ],
        },
        { type: 'heading', text: '3. Mode of Preservation and Destruction' },
        {
            type: 'para',
            text: 'Documents may be preserved either in physical or electronic form as permitted under applicable law. On expiry of the applicable retention period, documents (other than those to be preserved permanently) may be destroyed in a manner authorised by the Company Secretary & Compliance Officer, subject to any pending litigation, investigation or regulatory requirement that may require their continued preservation.',
        },
        { type: 'heading', text: '4. Custodian and Review' },
        {
            type: 'para',
            text: 'The Company Secretary & Compliance Officer shall be the custodian responsible for administering this Policy. The Board may amend this Policy from time to time to give effect to any change in applicable law.',
        },
    ],
};

const riskManagement: Policy = {
    slug: 'risk-management',
    title: 'Risk Management Policy',
    reference: 'Regulation 21 of SEBI (LODR) Regulations, 2015 & Section 134(3)(n), Companies Act, 2013',
    blocks: [
        { type: 'heading', text: '1. Objective' },
        {
            type: 'para',
            text: 'MRC Agrotech Limited (the “Company”) operates in the agriculture and agri-processing sector and is exposed to a variety of risks in the ordinary course of its business. This Policy establishes a framework for the identification, assessment, monitoring, mitigation and reporting of risks that may affect the achievement of the Company’s objectives, in compliance with the Companies Act, 2013 and the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.',
        },
        { type: 'heading', text: '2. Categories of Risk' },
        {
            type: 'para',
            text: 'The principal categories of risk to which the Company is exposed include, but are not limited to:',
        },
        {
            type: 'list',
            items: [
                'Business and operational risks, including risks arising from crop cycles, weather and climatic conditions, availability and quality of raw material, and disruption in the supply chain;',
                'Market and commodity price risks, including volatility in the prices of agricultural produce and inputs;',
                'Financial risks, including liquidity, credit, interest rate and foreign exchange risks;',
                'Regulatory and compliance risks arising from changes in laws, regulations and policies applicable to the agri-business;',
                'Information technology and cyber-security risks; and',
                'Reputational, environmental, health and safety risks.',
            ],
        },
        { type: 'heading', text: '3. Risk Management Framework' },
        {
            type: 'para',
            text: 'The Company follows a structured process of risk identification, assessment of likelihood and impact, formulation of mitigation plans, assignment of ownership, and periodic monitoring and review. Risks are prioritised on the basis of their potential impact on the business and the likelihood of occurrence, and appropriate mitigation and controls are put in place for the significant risks so identified.',
        },
        { type: 'heading', text: '4. Roles and Responsibilities' },
        {
            type: 'para',
            text: 'The Board of Directors has overall responsibility for the risk management framework of the Company. The Risk Management Committee (where constituted) / Audit Committee assists the Board in monitoring and reviewing the risk management plan and its implementation. The management is responsible for implementing the framework, identifying and assessing risks within their respective functions, and implementing mitigation measures, and reports on key risks to the Committee and the Board.',
        },
        { type: 'heading', text: '5. Review' },
        {
            type: 'para',
            text: 'This Policy and the risk management framework shall be reviewed periodically by the Committee and the Board and updated to reflect changes in the internal and external environment.',
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
            text: 'This Code is adopted by MRC Agrotech Limited (the “Company”) pursuant to Regulations 8 and 9 of the SEBI (Prohibition of Insider Trading) Regulations, 2015 (the “PIT Regulations”). It comprises (a) a Code of Practices and Procedures for Fair Disclosure of Unpublished Price Sensitive Information (“UPSI”), and (b) a Code of Conduct to regulate, monitor and report trading by Designated Persons and their immediate relatives.',
        },
        { type: 'heading', text: '2. Definitions' },
        {
            type: 'defs',
            items: [
                {
                    term: 'Insider',
                    text: 'means any person who is a connected person or who is in possession of or having access to unpublished price sensitive information.',
                },
                {
                    term: 'Unpublished Price Sensitive Information (UPSI)',
                    text: 'means any information relating to the Company or its securities, directly or indirectly, that is not generally available which upon becoming generally available is likely to materially affect the price of the securities, including information relating to financial results, dividends, change in capital structure, mergers, acquisitions, and changes in key managerial personnel.',
                },
                {
                    term: 'Designated Person',
                    text: 'means the persons designated as such by the Board in consultation with the Compliance Officer, including directors, key managerial personnel, and employees and connected persons having access to UPSI.',
                },
            ],
        },
        { type: 'heading', text: '3. Code of Fair Disclosure of UPSI' },
        {
            type: 'list',
            items: [
                'Prompt public disclosure of UPSI that would impact price discovery, no sooner than credible and concrete information comes into being, in order to make such information generally available;',
                'Uniform and universal dissemination of UPSI to avoid selective disclosure;',
                'Designation of a senior officer as the Chief Investor Relations Officer to deal with dissemination of information and disclosure of UPSI;',
                'Prompt dissemination of UPSI that gets disclosed selectively, inadvertently or otherwise, to make such information generally available; and',
                'Handling of all UPSI on a need-to-know basis and maintenance of a structured digital database of persons with whom UPSI is shared.',
            ],
        },
        { type: 'heading', text: '4. Code of Conduct for Trading' },
        {
            type: 'list',
            items: [
                'No Insider shall trade in the securities of the Company when in possession of UPSI;',
                'The trading window shall be closed when the Compliance Officer determines that a Designated Person or class of Designated Persons can reasonably be expected to have possession of UPSI, and no trading shall be undertaken during such closure;',
                'Designated Persons and their immediate relatives shall obtain pre-clearance of trades above the threshold prescribed by the Compliance Officer when the trading window is open;',
                'Designated Persons shall not execute contra-trades within six months of an earlier transaction; and',
                'Disclosures of holdings and trades shall be made to the Company and, where applicable, to the stock exchange(s) within the timelines prescribed under the PIT Regulations.',
            ],
        },
        { type: 'heading', text: '5. Compliance Officer and Consequences of Violation' },
        {
            type: 'para',
            text: 'The Company Secretary & Compliance Officer is responsible for administering this Code, maintaining records, monitoring compliance and reporting to the Board and the Audit Committee. Any Designated Person who trades in securities or communicates any information in contravention of this Code shall be liable for disciplinary action by the Company and to action under the PIT Regulations and other applicable laws, which is in addition to any action that SEBI may take.',
        },
    ],
};

const whistleBlower: Policy = {
    slug: 'whistle-blower',
    title: 'Vigil Mechanism / Whistle Blower Policy',
    reference: 'Section 177(9) of the Companies Act, 2013 & Regulation 22 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Objective' },
        {
            type: 'para',
            text: 'MRC Agrotech Limited (the “Company”) is committed to conducting its affairs in a fair and transparent manner and adhering to the highest standards of professionalism, honesty, integrity and ethical behaviour. This Policy establishes a vigil mechanism for Directors and employees to report genuine concerns about unethical behaviour, actual or suspected fraud, or violation of the Company’s Code of Conduct or ethics policy, in compliance with Section 177(9) of the Companies Act, 2013 and Regulation 22 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.',
        },
        { type: 'heading', text: '2. Scope' },
        {
            type: 'para',
            text: 'This Policy covers all Directors and employees of the Company. A Whistle Blower may report concerns relating to, among other things, financial irregularities including fraud or suspected fraud, violation of law, mismanagement, misappropriation of funds or assets, abuse of authority, and any conduct that amounts to a breach of the Company’s Code of Conduct. This Policy is not a substitute for, and does not replace, the normal reporting channels of the Company.',
        },
        { type: 'heading', text: '3. Reporting Mechanism' },
        {
            type: 'para',
            text: 'A Whistle Blower may report a concern in writing to the Company Secretary & Compliance Officer, or, in appropriate cases, directly to the Chairperson of the Audit Committee. Protected disclosures should be factual, contain as much specific information as possible, and be submitted as soon as possible after the Whistle Blower becomes aware of the matter.',
        },
        { type: 'heading', text: '4. Investigation and Direct Access' },
        {
            type: 'para',
            text: 'All protected disclosures shall be investigated in a fair and time-bound manner by, or under the supervision of, the Audit Committee. The Company shall provide adequate safeguards against victimisation of persons who use the vigil mechanism, and shall provide direct access to the Chairperson of the Audit Committee in appropriate or exceptional cases. The identity of the Whistle Blower shall be kept confidential to the extent possible under law.',
        },
        { type: 'heading', text: '5. Protection to Whistle Blower' },
        {
            type: 'para',
            text: 'No unfair treatment shall be meted out to a Whistle Blower by virtue of their having reported a protected disclosure under this Policy. The Company shall take steps to minimise difficulties that the Whistle Blower may experience as a result of making the disclosure. Any person who abuses this mechanism by making a malicious or knowingly false disclosure shall, however, be subject to appropriate disciplinary action.',
        },
        { type: 'heading', text: '6. Disclosure' },
        {
            type: 'para',
            text: 'The existence of this vigil mechanism and the manner in which Directors and employees may avail of it shall be disclosed on the website of the Company and in the Board’s Report, as required under applicable law.',
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

export const policyBySlug: Record<string, Policy> = Object.fromEntries(
    policies.map((p) => [p.slug, p]),
);
