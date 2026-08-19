import type { Policy } from './PolicyLayout';

// Full text of the statutory policies of MRC Agrotech Limited, drafted from the standard
// SEBI (LODR) Regulations, 2015 / Companies Act, 2013 / SEBI (PIT) Regulations, 2015 templates
// adopted by comparable listed agri companies. Reviewed and adopted by the Board.

const materialSubsidiaries: Policy = {
    slug: 'material-subsidiaries',
    title: 'Policy on Material Subsidiaries',
    reference: 'Regulation 16(1)(c) & 24 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: 'Preamble' },
        {
            type: 'para',
            text: 'The Board of Directors (the “Board”) of MRC Agrotech Limited (the “Company”), has adopted the following policy and procedures and disclosures with regard to determination of Material Subsidiaries. The Board may review and amend this policy from time to time.',
        },
        {
            type: 'para',
            text: 'The policy will be applicable to the Company. This policy is formulated to identify the material subsidiaries, disclosures pertaining to subsidiaries to the Board of Directors and Audit Committee as required under Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015 ("Listing Regulations").',
        },
        { type: 'heading', text: 'Purpose' },
        {
            type: 'para',
            text: 'This policy is framed as per Listing Obligations and Disclosure Requirements Regulations, 2015 of the Securities and Exchange Board of India is intended to determine the material subsidiaries, disclosure of significant transactions or arrangement of the material unlisted subsidiaries, policy towards disposal of shares held in the material subsidiary and review of financials, particularly the investments made by all the unlisted subsidiary companies.',
        },
        { type: 'heading', text: 'Definitions' },
        {
            type: 'defs',
            items: [
                { term: 'Audit Committee', text: 'means Committee of Board of Directors of the Company.' },
                { term: 'Board of Director or Board', text: 'means the Board of Directors of MRC Agrotech Limited, as constituted from time to time.' },
                { term: 'Policy', text: 'means Policy on Material Subsidiary.' },
                { term: 'Significant Transaction or Arrangement', text: 'shall mean any individual transaction or arrangement that exceeds or is likely to exceed 10% of the total revenues or total expenses or total assets or total liabilities, as the case may be of the unlisted subsidiary for the immediately preceding accounting year.' },
                { term: 'Subsidiary', text: 'means a subsidiary as defined in Section 2(87) of the Companies Act, 2013.' },
            ],
        },
        { type: 'heading', text: 'Appointment of Independent Directors on the Board of Subsidiary Company' },
        {
            type: 'para',
            text: 'The Company shall appoint atleast one Independent Director on its Board as a Director on the Board of Directors of an unlisted material Subsidiary, whether incorporated in India or not.',
        },
        {
            type: 'para',
            text: 'Explanation — For the purposes of this provision, notwithstanding anything to the contrary contained in regulation 16, the term "material subsidiary" shall mean a subsidiary, whose income or net worth exceeds twenty percent of the consolidated income or net worth respectively, of the listed entity and its subsidiaries in the immediately preceding accounting year.',
        },
        { type: 'heading', text: 'Review by Audit Committee' },
        {
            type: 'para',
            text: 'The Company shall place before the Audit Committee on a quarterly basis the summary of the financial statements of the Subsidiary Company. The detailed audited financial statements of the subsidiary shall be placed before the Audit Committee at the end of each financial year. The Audit Committee of the Company shall review all investments made by the unlisted subsidiary company on a quarterly basis. The Audit Committee shall recommend to the Board its concerns, if any about the investments made by the unlisted subsidiary companies.',
        },
        { type: 'heading', text: 'Review by the Board of Directors' },
        {
            type: 'para',
            text: 'The minutes of the Board Meetings of the unlisted subsidiary company shall be placed at the Board meeting of the Company on a quarterly basis.',
        },
        {
            type: 'para',
            text: 'The Management shall bring to the attention of the Board all significant transactions and arrangements entered into by the unlisted subsidiary company on a quarterly basis and the information shall be part of the agenda of every board meeting held for approving quarterly / annual financial results.',
        },
        { type: 'heading', text: 'Material Subsidiary' },
        {
            type: 'para',
            text: '"Material Subsidiary" shall mean a subsidiary, whose income or net worth exceeds 10% of the consolidated income or net worth respectively, of the listed company and its subsidiaries in the immediately preceding accounting year.',
        },
        { type: 'heading', text: 'Shareholders’ Approval' },
        {
            type: 'para',
            text: 'The Company shall take prior approval of the shareholders by way of special resolution:',
        },
        {
            type: 'list',
            items: [
                'if it wants to reduce its holding either on its own or with other subsidiaries to less than or equal to 50% or if it wants to cease the exercise of control over the material subsidiary;',
                'for sale, lease or disposal of assets of the material subsidiary amounting to more than 20% of the assets of the material subsidiary.',
            ],
        },
        {
            type: 'para',
            text: 'The above approvals from shareholders shall not be required if the divestment in the subsidiary or sale / lease or disposal of the assets of the material subsidiary is made under a scheme of arrangement duly approved by a Court / Tribunal or under a resolution plan duly approved under section 31 of the Insolvency Code and such an event is disclosed to the recognized stock exchanges within one day of the resolution plan being approved.',
        },
        { type: 'heading', text: 'Disclosures' },
        {
            type: 'para',
            text: 'The Company shall disclose the policy for determining Material Subsidiaries on the Company’s website and a web link thereto shall be provided in the Annual Report.',
        },
        { type: 'heading', text: 'Secretarial Audit' },
        {
            type: 'para',
            text: 'The Company and its material unlisted subsidiaries incorporated in India shall undertake secretarial audit and shall annex a secretarial audit report given by a company secretary in practice, in such form as may be specified with the annual report of the Company.',
        },
        { type: 'heading', text: 'Amendments' },
        {
            type: 'para',
            text: 'The Board of Directors will review the above Policy from time to time and make suitable modifications, as may be necessary.',
        },
        { type: 'heading', text: 'Conflict of Law Clause' },
        {
            type: 'para',
            text: 'Any provision in this policy, insofar as it is inconsistent or contradictory with the provisions of law and / or any statutory enactments shall, to the extent of such inconsistency, be void and the provisions of law / statutory enactment shall prevail.',
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
        {
            type: 'para',
            text: 'On behalf of the Company I write to confirm your appointment as an Independent Non-Executive Director of MRC Agrotech Limited ("the Company"), as per the provision of the Companies Act, 2013 and Regulation 16 of SEBI (LODR) Regulations, 2015. Set out below are the terms of your appointment.',
        },
        { type: 'heading', text: 'Appointment' },
        {
            type: 'para',
            text: 'Your appointment is subject to the provisions of the Companies Act, 2013 and Regulation 16 of SEBI (LODR) Regulations, 2015, for the term of five (5) consecutive years, unless terminated earlier or extended, as per the provisions of this letter or applicable laws (“Term”). As an Independent Director you will not be liable to retire by rotation as per the relevant provisions of the Companies Act and Listing Regulations.',
        },
        { type: 'heading', text: 'Commitments' },
        { type: 'subheading', text: 'Independent Director' },
        {
            type: 'para',
            text: 'You will be expected to devote such time as is necessary for the proper performance of your duties and as an Independent Director you will be involved in a number of Board and Committee Meetings, as the case may be, each year. You should strive to attend all the scheduled quarterly Board Meetings, General Meetings, Committee Meetings and other meetings.',
        },
        {
            type: 'para',
            text: 'As an Independent Director you should strive to hold and be present in at least one meeting in a year without the presence of non-independent directors and members of management, with the sole objective of:',
        },
        {
            type: 'list',
            items: [
                'review the performance of non-independent directors and the Board as a whole;',
                'review the performance of the Chairperson of the company, taking into account the views of executive directors and non-executive directors;',
                'assess the quality, quantity and timeliness of flow of information between the company management and the Board that is necessary for the Board to effectively and reasonably perform their duties.',
            ],
        },
        {
            type: 'para',
            text: 'By accepting this appointment, you have confirmed that you are able to allocate sufficient time to meet the expectations of your role.',
        },
        { type: 'subheading', text: 'The Company' },
        {
            type: 'list',
            items: [
                'The Company shall provide you with adequate notice of the dates of proposed Board Meeting, General Meeting and meetings of the Board Committees. As per the provision of the Companies Act, the company is expected to give you an advance notice of minimum 7 days of every board meeting. A meeting of the Board may be called at shorter notice to transact urgent business subject to the condition that at least one independent director shall be present at the meeting, and in case of absence of independent directors from such a meeting of the Board, decisions taken at such a meeting shall be circulated to all the directors and shall be final only on ratification thereof by at least one independent director. The notice of the Board / Committee meetings will be provided along with the agenda of the Board / Committee meetings.',
                'The company will train its Board members in the business model of the company as well as the risk profile of the business parameters of the company and their responsibilities as directors.',
                'The Company shall establish an effective whistle blower mechanism so that the directors can raise their concerns.',
                'It shall be the responsibility of the Company to provide the independent director with all the information and documents they validly require to fulfil their functions.',
            ],
        },
        { type: 'heading', text: 'Code of Conduct, Functions and Duties' },
        {
            type: 'para',
            text: 'You will be expected to perform your duties, whether statutory, fiduciary or common law, faithfully, efficiently and diligently to a standard commensurate with both the functions of your role and your knowledge, skills and experience. You will have all the usual duties of an independent director under the Companies Act and applicable listing regulations of the Stock Exchange, where shares of the Company are listed, together with such additional duties as may be agreed with the Board and which may relate to the business of the Company or any other member of the Group. You will be required to serve on such committees and / or sub-committee of Directors as the Board may request. In addition, you will be expected to devote appropriate preparation and travel time ahead of each meeting.',
        },
        {
            type: 'para',
            text: 'As a Director of the Company, you will have legal duties and obligations under the Companies Act. It is expected that you will familiarize yourself with the relevant Directors’ Duties, roles and responsibilities which is available on the Company’s website www.mrcagro.com.',
        },
        { type: 'heading', text: 'Liability' },
        {
            type: 'para',
            text: 'As an independent director you will be liable only in respect of such acts of omission or commission by a company which had occurred with your knowledge, attributable through Board processes, and with your consent or connivance or where you had not acted diligently.',
        },
        { type: 'heading', text: 'Technology' },
        {
            type: 'para',
            text: 'Being a Director, you may make use of video, telephone, electronic mail, any other technology which permits each Director to communicate with every other Director, or any combination of these technologies for the purpose of calling and holding Directors’ meetings. You may attend the board or committee meeting through video conferencing or other audio visual means subject to the applicable provisions of the Companies Act.',
        },
        { type: 'heading', text: 'Conflict of Interest' },
        {
            type: 'para',
            text: 'By accepting this appointment you will be deemed to have confirmed that any other position you hold including your directorships in other organizations, shall not give rise to any conflicts of interest in relation to your appointment as an Independent Director of the Company. Should you become aware of any conflict or potential conflict during your appointment, you are expected to notify the Company Secretary.',
        },
        { type: 'heading', text: 'Disclosures' },
        {
            type: 'para',
            text: 'You are required to disclose to the Company your interests and any matters (excluding those matters which may be subject to legal professional privilege) which affect your independence. During your tenure as an independent director you are required to give a declaration that you meet the criteria of independence every financial year as provided under Section 149 of the Companies Act and Regulation 16 of SEBI (LODR) Regulations, 2015.',
        },
        { type: 'heading', text: 'Directors’ Fees' },
        {
            type: 'para',
            text: 'You shall be paid a sitting fee as decided by the Board from time to time for attending each meeting of the Board, as per the provision of Section 197 of the Companies Act and the Articles of Association of the Company.',
        },
        {
            type: 'para',
            text: 'The Company shall reimburse you all traveling, hotel, and other incidental expenses properly and reasonably incurred by you in performance of duties as per provisions of the Companies Act in conjunction with the Company rules and policies. This could include reimbursement of expenditure incurred by you for attending Board / Committee meetings, Annual General Meetings, Extraordinary General Meetings, court convened meetings, meetings with shareholders / creditors / management, site visits, induction and training (organized by the Company for Directors) and in obtaining, subject to prior consultation with the Board, professional advice from independent advisors in the furtherance of your duties as an Independent Director.',
        },
        {
            type: 'para',
            text: 'As an independent director you shall not be entitled to any stock option and shall not be covered by any pension scheme.',
        },
        { type: 'heading', text: 'Performance Appraisal / Evaluation Process' },
        {
            type: 'para',
            text: 'As a member of the Board, your performance as well as the performance of the entire Board and its Committees shall be evaluated annually. Evaluation of each director shall be done by all the other directors. The criteria for evaluation shall be determined by the Nomination and Remuneration Committee and disclosed in the Company’s Annual Report. However, the actual evaluation process shall remain confidential and shall be a constructive mechanism to improve the effectiveness of the Board / Committee. An indicative list of factors that may be evaluated as part of this exercise is:',
        },
        {
            type: 'list',
            items: [
                'Participation and contribution by a director;',
                'Commitment (including guidance provided to senior management outside of Board / Committee meetings);',
                'Effective deployment of knowledge and expertise;',
                'Effective management of relationship with stakeholders;',
                'Integrity and maintenance of confidentiality;',
                'Independence of behaviour and judgment; and',
                'Impact and influence.',
            ],
        },
        {
            type: 'para',
            text: 'The performance of individual directors, the whole Board and its committees is evaluated annually. If, in the interim, there are any matters which cause you concern about your role, you should discuss them with the Chairperson or the senior independent director as soon as you can.',
        },
        { type: 'heading', text: 'Disclosures, Other Directorships and Business Interests' },
        {
            type: 'para',
            text: 'During the Term, you agree to promptly notify the Company of any change in your directorships, and provide such other disclosures and information as may be required under the applicable laws. You also agree that upon becoming aware of any potential conflict of interest with your position as Independent Director of the Company, you shall promptly disclose the same to the Chairperson and the Company Secretary. During your Term, you agree to promptly provide a declaration under Section 149(7) of the Companies Act, upon any change in circumstances which may affect your status as an Independent Director.',
        },
        { type: 'heading', text: 'Changes of Personal Details' },
        {
            type: 'para',
            text: 'During the Term, you shall promptly intimate the Company Secretary and the Registrar of Companies in the prescribed manner, of any change in address or other contact and personal details provided to the Company.',
        },
        { type: 'heading', text: 'Termination' },
        {
            type: 'para',
            text: 'Your directorship on the Board of the Company shall terminate or cease in accordance with law. Apart from the grounds of termination as specified in the Companies Act, your directorship may be terminated for violation of any provision of the Company’s Code of Conduct as applicable to Non-Executive Directors.',
        },
        {
            type: 'para',
            text: 'You may resign from the directorship of the Company by giving a notice in writing to the Company stating the reasons for resignation. The resignation shall take effect from the date on which the notice is received by the Company or the date, if any, specified by you in the notice, whichever is later. It is desirable that you give the Chairman reasonable forewarning of your intention to resign or to not seek re-appointment where that is possible so that the Company can plan for succession of skills and experience on the Board.',
        },
        {
            type: 'para',
            text: 'If at any stage during the Term, there is a change that may affect your status as an Independent Director as envisaged in Section 149(6) of the Companies Act or, if applicable, you fail to meet the criteria for “independence” under the provisions of SEBI (LODR) Regulations, 2015, you agree to promptly submit your resignation to the Company with effect from the date of such change.',
        },
        { type: 'heading', text: 'Code of Conduct for Directors and Code of Conduct for Prevention of Insider Trading' },
        {
            type: 'para',
            text: 'You are required to abide by the Code of Conduct for Directors and Code of Conduct for Prevention of Insider Trading for Employees, including Directors, as issued by the Company which is available on the Company’s website www.mrcagro.com.',
        },
        { type: 'heading', text: 'Induction & Training' },
        {
            type: 'para',
            text: 'Where possible, directors will be encouraged to attend special training courses by various professional bodies to ensure that the directors are refreshed and equipped to perform their role in the highest standards and performance possible. You should feel free to request any further information which you require, at any time.',
        },
        { type: 'heading', text: 'Indemnity and Insurance / Provision for Directors and Officers (D & O) Insurance' },
        {
            type: 'para',
            text: 'The Company has obtained the Directors’ & Officers’ liability Insurance Policy for you. Details of the policy will be circulated by the Company.',
        },
        { type: 'heading', text: 'Confidentiality and Access to Company Records' },
        {
            type: 'para',
            text: 'Under the Companies Act, Directors have a right of access to Company’s documents and records, including financial records. Any confidential information which may come to your knowledge in the performance of your duties as a director of the Company must not be divulged, except so far as:',
        },
        {
            type: 'list',
            items: [
                'may be necessary in connection with the proper performance of your duties to the Company;',
                'the Company may from time to time authorize you to disclose such information as may be required by you with the condition that you will take all reasonable precautions as may be necessary to maintain the secrecy and confidentiality of all confidential information of the Company; or',
                'you may be required by law to disclose.',
            ],
        },
        {
            type: 'para',
            text: 'Your obligation of confidentiality shall survive termination or cessation of your directorship with the Company. Additionally, you shall not participate in any business activity which might impede the application of your independent judgment in the best interest of the Company.',
        },
        { type: 'heading', text: 'Cooperation' },
        {
            type: 'para',
            text: 'In the event of any claim or litigation against the Company, based upon any alleged conduct, act or omission on your part during your Term, you agree to render all reasonable assistance and cooperation to the Company and provide such information and documents as are necessary and reasonably requested by the Company or its counsel.',
        },
        { type: 'heading', text: 'Miscellaneous' },
        {
            type: 'list',
            items: [
                'This letter represents the entire understanding, and constitutes the whole agreement, in relation to your appointment and supersedes any previous agreement between yourself and the Company with respect thereto and, without prejudice to the generality of the foregoing, excludes any warranty, condition or other undertaking implied at law or by custom.',
                'No waiver or modification of this letter shall be valid unless made in writing and signed by you and the Company.',
                'As per SEBI (LODR) Regulations, 2015, if applicable, this letter along with your detailed profile shall be disclosed on the website of the Company and the relevant stock exchange.',
            ],
        },
        { type: 'heading', text: 'Applicable Law' },
        {
            type: 'para',
            text: 'This letter of appointment shall be governed by the laws of India.',
        },
        { type: 'heading', text: 'Acceptance of Appointment' },
        {
            type: 'para',
            text: 'We are confident that the Board and the Company will benefit immensely from your rich experience and we are eager to have you as an integral part of the growth of our Company.',
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
    title: 'Policy for Preservation & Archival of Documents',
    reference: 'Regulation 9 & 30(8) of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: '1. Introduction' },
        {
            type: 'para',
            text: 'This policy is primarily framed based on Regulation 9 of the Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015 (hereinafter referred to as “Listing Regulations”) and Companies Act, 2013. Archival Policy as referred to in Regulation 30(8) of the Listing Regulations forms part of this Policy. This policy is intended to ensure compliance particularly with the Listing Regulations and the applicable provisions of Companies Act, 2013.',
        },
        { type: 'heading', text: '2. Purpose of the Policy' },
        {
            type: 'para',
            text: 'Regulation 9 of the Listing Regulations mandates that a listed entity shall have a policy for preservation of documents, approved by its board of directors, classifying them in at least two categories as follows:',
        },
        {
            type: 'list',
            items: [
                'Documents whose preservation shall be permanent in nature;',
                'Documents with a preservation period of not less than eight years after completion of the relevant transactions.',
            ],
        },
        {
            type: 'para',
            text: 'Provided that the Company may keep documents specified in clauses (a) and (b) in electronic mode. Further, Regulation 30(8) of the Listing Regulations also refers to an archival policy as per which all events or information which has been disclosed to stock exchange(s) under regulation 30 shall be hosted on the website of the Company for a minimum period of five years and thereafter as per the archival policy of the company, as disclosed on its website. Besides the above, as per applicable provisions of Companies Act, 2013 certain documents must be preserved permanently or up to a certain prescribed time. Accordingly this policy has been framed keeping in view particularly the requirements of Listing Regulations and the provisions of Companies Act, 2013.',
        },
        { type: 'heading', text: '3. Policy — Preservation of Documents' },
        { type: 'subheading', text: '3.1 Preservation with reference to the Companies Act, 2013 and the Listing Regulations' },
        {
            type: 'list',
            items: [
                'Documents whose preservation shall be permanent in nature: All those documents which are required to be preserved permanently in accordance with the provisions of applicable Act, Rules, Regulations, Guidelines, Circulars, Notifications etc. as may be applicable on the Company from time-to-time shall be preserved permanently. Details of such documents are listed in Annexure – A.',
                'Documents with preservation period of not less than eight years after completion of the relevant transactions: All those documents which are required to be preserved in accordance with the provisions of applicable Act, Rules, Regulations, Guidelines, Circulars and Notifications etc. for a period of not less than eight years after completion of the relevant transactions shall be preserved accordingly. Detail of such documents is listed in Annexure – B.',
                'Documents with preservation period other than those mentioned above: All those documents which are required to be preserved in accordance with the provisions of applicable Act, Rules, Regulations, Guidelines, Circulars, Notifications etc. for a preservation period other than those mentioned above shall be preserved accordingly.',
            ],
        },
        { type: 'subheading', text: '3.2 Documents to be made available on the website of the Company' },
        {
            type: 'para',
            text: 'The Company is to maintain a functional website containing the basic information about the Company; all information and/or documents as specified in the applicable provisions of Companies Act, 2013; all information and/or documents as specified in Regulation 46(2) of the Listing Regulations; all information and/or documents as mentioned in Regulation 30 of the Listing Regulations on Material Events; and all other information and/or documents as required under Listing Regulations.',
        },
        {
            type: 'list',
            items: [
                'The Company shall ensure that contents of the website are correct.',
                'The Company shall update any change in the content of its website within two working days from the date of such change in content.',
                'Information and/or documents that need to be made available under Regulation 30 of the Listing Regulations shall be made available on the website simultaneously with disclosure to Stock Exchanges.',
                'The information and/or documents uploaded on the website shall be available for the current financial year and for the preceding five financial years.',
                'Information and/or documents shall be arranged under proper heads and sub-heads in such a manner that they can easily be located / searched by the viewers — arranged financial year wise with further segregation into four quarters of the financial year, and with all policies or information / documents of a general nature clubbed together at one place.',
            ],
        },
        { type: 'heading', text: '4. Archival of Documents' },
        { type: 'subheading', text: '4.1 Documents maintained in physical form' },
        {
            type: 'list',
            items: [
                'All information and/or documents pertaining to current financial year and for one preceding financial year shall be kept handy and maintained in such a manner that their retrieval is easy and quick.',
                'All documents pertaining to the period prior to one preceding financial year shall be kept in good condition at least up to the minimum period specified for their maintenance / preservation in the Annexures attached hereto, and shall be maintained in such a manner that their retrieval is easy and quick.',
            ],
        },
        { type: 'subheading', text: '4.2 Documents maintained in electronic form' },
        {
            type: 'list',
            items: [
                'All documents pertaining to current financial year and for one preceding financial year shall be maintained on server and backup be maintained on scheduled time and day, in such a manner that their retrieval is easy and quick.',
                'Backup of all documents pertaining to the period prior to one preceding financial year shall also be maintained on server, in good condition at least up to the minimum period specified for their maintenance / preservation, and maintained in such a manner that their retrieval is easy and quick.',
            ],
        },
        { type: 'subheading', text: '4.3 Documents made available on the website of the Company' },
        {
            type: 'para',
            text: 'After the expiry of the time mentioned in this policy (i.e. five financial years preceding the current financial year), the information and/or document shall be removed from the main website. The backup of said information and/or document which is removed from the main website shall be maintained / preserved in the server for a minimum period of 3 years and after expiry of this period of 3 years the backup may be permanently removed from the server.',
        },
        { type: 'heading', text: '5. Destruction of Documents' },
        {
            type: 'para',
            text: 'Any of the documents mentioned in this policy, which are not required to be maintained and preserved permanently shall be destroyed. Documents / records should not be kept longer than is necessary and should be disposed of at the right time, as unnecessary retention of records consumes time, space and equipment use. The documents / records referred to in Annexure B shall be preserved for at least 8 years (or additional period decided by the Company) and may be disposed of after the expiry of the periods of their preservation, after the approval of the Chief Financial Officer and Company Secretary of the Company.',
        },
        {
            type: 'para',
            text: 'The Company shall maintain a register of disposal of records in the custody of the Compliance Officer of the Company, wherein the brief particulars of the records disposed of shall be entered. The register of disposal of records shall contain the following columns: Item Number; Brief Particulars of the records disposed of; Date of approval for disposal of records; Date of disposal; and Mode of destruction. This register shall be maintained permanently by the Company with the assistance of the Compliance Officer, either in physical or electronic form.',
        },
        { type: 'heading', text: '6. Amendments and Updates' },
        {
            type: 'para',
            text: 'The Board of Directors can amend this Policy, as and when deemed fit. Any or all provisions of this Policy would be subject to revision / amendment in accordance with the Rules, Regulations, Notifications etc. on the subject as may be issued by relevant statutory authorities, from time to time. In case of any amendment(s), clarification(s), circular(s) etc. issued by the relevant authorities are not consistent with the provisions laid down under this Policy, then such amendment(s), clarification(s), circular(s) etc. shall prevail upon the provisions hereunder and this Policy shall stand amended accordingly from the effective date as laid down under such amendment(s), clarification(s), circular(s) etc.',
        },
        { type: 'heading', text: 'Annexure A — Documents whose preservation shall be permanent in nature' },
        {
            type: 'list',
            items: [
                'Certificate of incorporation;',
                'Memorandum and Articles of Association;',
                'Agreements made by the Company with Stock Exchanges, Depositories, etc.;',
                'Minute Books of General Meetings, Board and Committee Meetings as per Companies Act, 2013;',
                'Register and Index of Members, debenture-holders (if any) or other security holders (if any);',
                'Register of Contracts as per Companies Act, 2013;',
                'Register of Charges as per Companies Act, 2013;',
                'Register of Investments as per Companies Act, 2013;',
                'Files relating to premises viz. Title Deeds / Lease Deeds of owned premises / land and building, etc. and related Ledger / Register;',
                'Authorization / licenses obtained from any statutory authority;',
                'Policies of the Company framed under various regulations;',
                'Register of disposal of records;',
                'Such other records as may be required under any law from time to time.',
            ],
        },
        { type: 'heading', text: 'Annexure B — Documents to be preserved for a period of eight years' },
        {
            type: 'list',
            items: [
                'Instrument creating charge or modification (from the date of satisfaction of charge) as per Companies Act, 2013;',
                'Annual Returns as per Companies Act, 2013;',
                'Register of Deposits as per Companies Act, 2013;',
                'Register of Allotment (from the date of each allotment) as per Companies Act, 2013;',
                'Annual financial statements including annual accounts, Directors’ report and Auditors’ report;',
                'Books of accounts including ledgers, vouchers / voucher register and other supporting documents as defined under the Companies Act, 2013;',
                'Income Tax Returns filed under Income Tax Act, 1961;',
                'All notices in Form MBP-1 received from Directors of MRC Agrotech Limited along with any amendment thereto;',
                'Return of declaration in respect of beneficial interest in any share as per Companies Act, 2013;',
                'Copy of newspaper advertisement or publications;',
                'Compliance Reports received from any statutory authority;',
                'The postal ballot and all other papers or registers relating to postal ballot including voting by electronic means;',
                'Disclosure / Return filed under SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.',
            ],
        },
    ],
};

const riskManagement: Policy = {
    slug: 'risk-management',
    title: 'Risk Management Policy',
    reference: 'Regulation 21 of SEBI (LODR) Regulations, 2015 & Section 134(3)(n), Companies Act, 2013',
    blocks: [
        { type: 'heading', text: 'Applicability' },
        {
            type: 'para',
            text: 'Enterprise risk management was not mandatory according to the Companies Act 2013. However, as per the new law, there are specific requirements that a company needs to comply with. This document lays down the framework of Risk Management at MRC Agrotech Limited. This document shall be under the authority of the Board of Directors of the Company. It seeks to identify risks inherent in any business operations of the Company and provides guidelines to define, measure, report, control and mitigate the identified risks.',
        },
        { type: 'heading', text: 'Scope' },
        {
            type: 'para',
            text: 'The Policy shall apply to all operations, divisions and geographic locations of the Company. The Policy applies to MRC Agrotech Limited, its Directors, and all its Employees and contractors.',
        },
        { type: 'heading', text: 'Objective' },
        {
            type: 'para',
            text: 'The objective of Risk Management at MRC Agrotech Limited is to create and protect shareholder value by minimizing threats or losses, and identifying and maximizing opportunities. An enterprise-wide risk management framework is applied so that effective management of risks is an integral part of every employee’s job.',
        },
        { type: 'heading', text: 'Key Compliance Requirements' },
        {
            type: 'para',
            text: 'Section 134: The Board of Directors report must include a statement indicating development and implementation of a risk management policy for the company including identification of elements of risk, if any, which in the opinion of the board may threaten the existence of the company.',
        },
        {
            type: 'para',
            text: 'Section 177(4): Every Audit Committee shall act in accordance with the terms of reference specified in writing by the Board which shall, inter alia, include — (vii) evaluation of internal financial controls and risk management systems.',
        },
        { type: 'heading', text: 'Roles and Responsibilities' },
        { type: 'subheading', text: 'Board' },
        {
            type: 'para',
            text: 'The Company’s risk management architecture is overseen by the Board of Directors (BOD) and policies to manage risks are approved by the Board.',
        },
        {
            type: 'list',
            items: [
                'The Company shall lay down procedures to inform Board members about the risk assessment and minimization procedures.',
                'The Board shall be responsible for framing, implementing and monitoring the risk management plan for the company.',
                'The Company shall also constitute a Risk Management Committee. The Board shall define the roles and responsibilities of the Risk Management Committee and may delegate monitoring and reviewing of the risk management plan to the committee and such other functions as it may deem fit.',
                'Ensure that the organization has proper risk management framework.',
                'Define the risk strategy and risk appetite for the company.',
                'Approve various risk management policies including the code of conduct and ethics.',
                'Ensure that senior management takes necessary steps to identify, measure, monitor and control these risks.',
            ],
        },
        { type: 'subheading', text: 'Audit Committee' },
        {
            type: 'para',
            text: 'The Audit Committee assists the Board in carrying out its oversight responsibilities relating to the Company’s (a) financial reporting process and disclosure of financial information in financial statements and other reporting practices, (b) internal control, (c) compliance with laws, regulations, and ethics, and (d) financial and risk management policies.',
        },
        {
            type: 'list',
            items: [
                'Setting policies on internal control based on the organisation’s risk profile, its ability to manage the risks identified and the cost / benefit of related controls;',
                'Seeking regular assurance that the system of internal control is effective in managing risks in accordance with the Board’s policies;',
                'Ensure that senior management monitors the effectiveness of internal control system;',
                'Help in identifying risk, assessing the risk, policies / guidance notes to respond to its risks and thereafter frame policies for control and monitoring.',
            ],
        },
        { type: 'subheading', text: 'Risk Management Function (RMF)' },
        {
            type: 'para',
            text: 'The Risk Management Division is the key division which would implement and coordinate the risk function as outlined in this policy on an on-going basis. It would act as the central resource division for administration of RMF.',
        },
        {
            type: 'list',
            items: [
                'Developing and communicating organizational policy and information about the risk management programme to all staff, and where appropriate to our associates of the company;',
                'Develop, enhance and implement appropriate risk management policies, procedures and systems;',
                'Work with risk owners to ensure that the risk management processes are implemented in accordance with agreed risk management policy and strategy;',
                'Review risks and risk ratings of each department.',
            ],
        },
        { type: 'heading', text: 'The specific objectives of this Policy are' },
        {
            type: 'list',
            items: [
                'To ensure that all the current and future material risk exposures of the Company are identified, assessed, quantified, appropriately mitigated, minimized and managed, i.e. to ensure adequate systems for risk management;',
                'To establish a framework for the company’s risk management process and to ensure its implementation;',
                'To enable compliance with appropriate regulations wherever applicable, through the adoption of best practices;',
                'To assure business growth with financial stability;',
                'Protecting and enhancing assets and company image;',
                'Reducing volatility in various areas of the business;',
                'Developing and supporting people and knowledge base of the organization;',
                'Optimizing operational efficiency.',
            ],
        },
        { type: 'heading', text: 'Broad Principles' },
        {
            type: 'para',
            text: 'The Board has to review the business plan at regular intervals and develop the Risk Management Strategy which shall encompass laying down guiding principles on proactive planning for identifying, analyzing and mitigating all the material risks, both external and internal viz. Environmental, Business, Operational, Financial and others. Communication of Risk Management Strategy to various levels of management for effective implementation is essential.',
        },
        {
            type: 'para',
            text: 'Risk Identification is obligatory on all vertical and functional heads who, with the inputs from their team members, are required to report the material risks to the Board of Director(s) along with their considered views and recommendations for risk mitigation. Analysis of all the risks thus identified shall be carried out through participation of the vertical / functional heads and a preliminary report thus finalized shall be placed before the Audit Committee.',
        },
        { type: 'heading', text: 'Risk Appetite' },
        {
            type: 'list',
            items: [
                'The Board shall approve the risk profile or appetite of the Company in material risk areas. The objective of risk appetite statements is to restrict the overall risk levels of the Company based on pre-defined strategies.',
                'Risk appetite is communicated through the Company’s strategic plans. The Board and management monitor the risk appetite of the Company relative to the Company’s actual results to ensure an appropriate level of risk tolerance throughout the Company.',
                'Risk Manager shall develop the Risk Appetite statements and submit to the Board for review and approval.',
                'Risk Appetite statements shall be reviewed annually for necessary changes. Any breach of the appetite statements shall be reported to the Board at the next meeting.',
            ],
        },
        { type: 'heading', text: 'Risk Identification' },
        {
            type: 'list',
            items: [
                'Risk identification forms the core of the Risk Management system. Multiple approaches for risk identification are applied to ensure a comprehensive Risk Identification process.',
                'The company shall identify sources of risk, areas of impacts, events and their causes with potential consequences. Comprehensive identification is critical, because a risk that is not identified here will be missed from further analysis.',
            ],
        },
        { type: 'heading', text: 'Risk Assessment and Risk Rating' },
        {
            type: 'list',
            items: [
                'For all key risks identified during the Risk Identification process, a qualitative and quantitative assessment is carried out. Risk assessment involves different means by which to grade risks in order to assess the possibility of their occurrence and extent of damage their occurrence might cause.',
                'Likelihood rating and impact rating is as per the rating parameters defined by the Company.',
            ],
        },
        { type: 'heading', text: 'Risk Prioritization' },
        {
            type: 'list',
            items: [
                'After the risk assessment is complete, it is the responsibility of the Risk Management Function to prioritize the key risks to determine which risks are considered key and need to be addressed on a priority basis.',
                'Prioritization of risks involves using final ratings. The risks are plotted on a matrix, to identify which risks are material from a corporate perspective.',
                'For this purpose, the materiality scales are used to identify the severity and likelihood of these risks.',
                'All risks that fall in the red zone are considered high risk and require immediate attention in terms of risk management.',
                'The findings of risk prioritization are presented to Senior Management and Business Units.',
            ],
        },
        { type: 'heading', text: 'Risk Mitigation Process' },
        {
            type: 'list',
            items: [
                'Once the top or critical risks are prioritized, appropriate risk mitigation and management efforts to effectively manage these risks are identified.',
                'Risk mitigation strategy usually involves identifying a range of options for treating risk, assessing those options, preparing and implementing risk treatment plans. The risk mitigation strategies may include managing the risk through implementation of new internal controls, accepting certain risks, taking insurance, and finally avoiding certain activities that result in unacceptable risks.',
                'Proposed actions to eliminate, reduce or manage each material risk will be considered and agreed as part of the Risk Assessment Workshops or as part of Management / Risk Management Committee.',
            ],
        },
        { type: 'heading', text: 'Risk Reporting and Monitoring' },
        {
            type: 'list',
            items: [
                'An enterprise-wide integrated Risk Management Information System (MIS) needs to be implemented by the company.',
                'Such information is needed at all levels of the organization to identify, assess and respond to future occurrences of risk events. Pertinent information from both internal and external sources must be captured and shared in a form and time frame that equips personnel to react quickly and efficiently.',
            ],
        },
        { type: 'heading', text: 'Internal Controls and Risk Management' },
        {
            type: 'para',
            text: 'Individual heads, Employees and Directors are responsible, along with support from Risk Management and other support functions, for establishing effective internal controls within various business processes. Effective design and implementation of the internal control framework is validated by regular internal audits and test of controls for these units.',
        },
        { type: 'heading', text: 'Risk Management Processes' },
        { type: 'subheading', text: 'Risk Identification Process' },
        {
            type: 'list',
            items: [
                'The risk identification process should capture all significant risks and identify potential threats facing the organisation.',
                'Risk Identification is performed at strategic functions at the entity level as well as at the process level for each function and process.',
            ],
        },
        { type: 'subheading', text: 'Risk Register' },
        {
            type: 'list',
            items: [
                'For the purpose of consolidation of material risks, all the outputs of the various risk identification and assessment processes are reviewed by the Risk Manager in collaboration with Business Heads. These are aggregated in a Risk Register capturing the key risk, mitigating controls and other details about the particular risk.',
                'Risk Register is to be maintained by the company in the prescribed format which contains a listing of all the risks identified by the company.',
                'Business Heads are the owner of the risk register and shall update risks in the risk register for the department and forward to the Risk Manager. These are updated by the Risk Manager into the consolidated Master Risk Register on a continuous basis.',
            ],
        },
        { type: 'subheading', text: 'Periodic Risk Assessment Workshop and Incident Reporting' },
        {
            type: 'list',
            items: [
                'A formal risk identification process, in the form of a workshop or similar methodology, is performed half-yearly to review and revise the Risk Register, engaging Senior Management and Departmental Heads in an active dialogue.',
                'Incident / Loss reporting occurs as part of day-to-day business that requires escalation of major events having financial or reputation impact. Incident Reporting shall be done via email to the Risk Management Function explaining the event in detail along with event date, likely financial loss, mitigation actions taken and other necessary details.',
                'Risk Management Function shall maintain a log of major incidents reported and also present a summary of major incidents to the Audit Committee / Board on a regular basis.',
            ],
        },
        { type: 'heading', text: 'Risk Monitoring and Risk Reporting' },
        { type: 'subheading', text: 'Risk Monitoring' },
        {
            type: 'list',
            items: [
                'The risks are to be monitored and treated by the Risk team under the guidance of the Risk owner on a frequent basis. The risk owner reviews all the risks identified and profiled on a quarterly basis with reference to the risk mitigation plan.',
                'A risk mitigation action plan is outlined for all priority risks in the high and medium categories. Senior Management and Business Heads design an action plan to mitigate and monitor each of these key risks.',
                'An action plan and status reporting is implemented to log actions proposed to mitigate risks and track status; the action plan and status reporting is circulated quarterly to stakeholders to update on the status of mitigation efforts.',
                'The Company shall also introduce some high-level Key Risk Indicators that will provide leading and lagging indicators on some key risks.',
            ],
        },
        { type: 'subheading', text: 'Risk Reporting' },
        {
            type: 'list',
            items: [
                'The Company’s MIS provides the Board and senior management in a clear and concise manner timely and relevant information concerning the risk profile. The MIS is capable of capturing major policy breaches and effective in promptly reporting such breaches to senior management.',
                'Formal risk reporting has been introduced to highlight risk profiles, trends, key issues and effectiveness of Risk Management Systems.',
                'In order to manage risks, key risk dashboards are implemented to review risk levels at a Company level as well as at business function levels, and the Risk Matrix is updated on a regular basis.',
            ],
        },
        { type: 'heading', text: 'Integration of Audit and Risk Management' },
        {
            type: 'para',
            text: 'Internal control is broadly defined as a process, implemented by the Board of Directors, management and other personnel, designed to provide reasonable assurance regarding the achievement of objectives in the following categories: effectiveness and efficiency of operations; reliability of financial reporting; and compliance with applicable laws and regulations. The system of internal control incorporates risk management and encompasses a number of elements that together facilitate an effective and efficient operation, enabling the Company to respond to a variety of operational, financial, and commercial risks. These elements include:',
        },
        {
            type: 'list',
            items: [
                'Policies and procedures — the foundation for an effective internal control framework that then supports a strong risk management framework, with written procedures supporting the policies where appropriate;',
                'Business planning and budgeting — used to set objectives, agree action plans, and allocate resources, with progress towards meeting business plan objectives monitored regularly;',
                'Independent Internal Audit function — a risk-based internal audit approach adopted by the company to ensure adequacy and effectiveness of internal control and policy framework;',
                'Audit Committee — required to report to the Board on internal controls, and to alert it of any emerging issues.',
            ],
        },
        { type: 'heading', text: 'Risk Management Culture, Training and Awareness' },
        {
            type: 'list',
            items: [
                'To realise return on risk, senior management needs to ensure risk awareness is embedded into the organisation culture, including its consideration in key decisions and preparedness among staff to take ownership of risk within their operations.',
                'All employees should have a clear understanding of their risk management responsibilities and be held accountable for their performance in that respect.',
                'Periodic risk management training is imparted to company employees and senior management to inculcate a uniform risk management culture. Targeted trainings on specific topics are undertaken by select employees based on their role in the Risk Management Framework.',
            ],
        },
        { type: 'heading', text: 'Adequacy of Insurance' },
        {
            type: 'list',
            items: [
                'On an annual basis, along with key Business Heads, the Company performs an annual review of Insurance Policies to evaluate the existing insurance policies for adequacy of coverage, identification of key risks covered by these policies, and compliance of policies.',
                'Insurance cover adequacy is reviewed taking into consideration historical events and proposed business growth. Any significant gaps in terms of shortfall of insurance will be reviewed with Senior Management and additional coverage proposed.',
                'On completion of the insurance review, key findings are summarized and reported to Senior Management, and action points / issues arising, if any, are noted and followed up.',
            ],
        },
        { type: 'heading', text: 'Review of Risk Management System and Policy' },
        {
            type: 'para',
            text: 'Progress on implementation of the Risk Management system is reviewed by the Audit Committee and submitted to the Board, and the Policy should be reviewed, if required, by a change in circumstances. Changes to the Policy require Board / Committee approval. This Policy applies to all areas of the Company’s operations.',
        },
    ],
};

const insiderTrading: Policy = {
    slug: 'insider-trading-code',
    title: 'Code of Conduct for Prevention of Insider Trading & Code of Fair Disclosure of UPSI',
    reference: 'SEBI (Prohibition of Insider Trading) Regulations, 2015',
    blocks: [
        { type: 'heading', text: 'Preamble' },
        {
            type: 'para',
            text: 'This Code of Practices and Procedures for Fair Disclosure of Unpublished Price Sensitive Information ("Code") is adopted by MRC Agrotech Limited (the "Company"). This Code is in compliance of Regulation 8(1) of the Securities and Exchange Board of India (Prohibition of Insider Trading) Regulations, 2015 ("Regulations") read with Schedule A of the Regulations, as amended from time to time. The Code also includes the Policy for determination of "legitimate purpose" in compliance with Regulation 3(2A) of the Regulations.',
        },
        { type: 'heading', text: 'Definitions' },
        {
            type: 'defs',
            items: [
                { term: 'Act', text: 'shall mean the Companies Act, 2013 and rules made thereunder, as amended.' },
                { term: 'Board', text: 'shall mean the board of directors of the Company.' },
                { term: 'Code', text: 'means this code of practices and procedures for fair disclosure of Unpublished Price Sensitive Information.' },
                { term: 'Chief Investors Relations Officer', text: 'means a senior officer as may be designated from time to time.' },
                { term: 'Company', text: 'shall mean MRC Agrotech Limited.' },
                { term: 'Compliance Officer', text: 'means any senior officer, designated so and reporting to the Board and who shall be responsible for compliance of policies, procedures, maintenance of records, monitoring adherence to the rules of preservation of Unpublished Price Sensitive Information, monitoring of trades and the implementation of the codes specified under the Insider Trading Regulations under the overall supervision of the Board.' },
                { term: 'Insider Trading Regulations', text: 'means Securities and Exchange Board of India (Prohibition of Insider Trading) Regulations, 2015, as amended.' },
                { term: 'Stock Exchange', text: 'shall mean a recognised stock exchange on which the securities of the Company are listed.' },
            ],
        },
        {
            type: 'para',
            text: '“Designated Persons” means (i) Directors; and (ii) such Employees and Connected Persons (including representatives of the auditors, accountancy firms, law firms, analysts, consultants, etc.) as identified by the Compliance Officer in consultation with the Board in line with the objectives of the Code.',
        },
        {
            type: 'para',
            text: '“Unpublished Price Sensitive Information” shall mean any information, relating to the Company or its securities, directly or indirectly, that is not generally available which upon becoming generally available is likely to materially affect the price of the securities and shall ordinarily, including but not restricted to, information relating to: financial results; dividends; change in capital structure; mergers, de-mergers, acquisitions, delistings, disposal and expansion of business and such other transactions; and changes in key managerial personnel.',
        },
        {
            type: 'para',
            text: 'All terms used but not defined herein shall have the meaning ascribed to such term under the Insider Trading Regulations. In case of any discrepancy between the Insider Trading Regulations and the terms defined herein, the meaning as prescribed under the Insider Trading Regulations shall prevail.',
        },
        { type: 'heading', text: 'Code of Practices & Procedures' },
        { type: 'subheading', text: 'Person responsible to deal with dissemination and disclosure of UPSI' },
        {
            type: 'list',
            items: [
                'The Company has designated the Company Secretary as Chief Investor Relations Officer (CIRO) to deal with dissemination of information and disclosure of Unpublished Price Sensitive Information (UPSI) to Stock Exchanges.',
                'The CIRO shall be responsible for ensuring that the Company complies with disclosure requirements (as provided in the Code for Prevention of Insider Trading), overseeing and coordinating disclosure of UPSI to stock exchanges, analysts, investors, select shareholders, etc., and educating staff on disclosure policies and procedures.',
            ],
        },
        { type: 'subheading', text: 'Prompt public disclosure of UPSI' },
        {
            type: 'list',
            items: [
                'UPSI that would impact price discovery shall be promptly given to stock exchanges and disseminated no sooner than credible and concrete information comes into being in order to make such information generally available.',
                'All the information released to Stock Exchanges shall also be disseminated simultaneously on the website of the Company, www.mrcagro.com.',
            ],
        },
        { type: 'subheading', text: 'Uniform and universal dissemination of UPSI' },
        {
            type: 'para',
            text: 'Chief Investor Relations Officer shall ensure that:',
        },
        {
            type: 'list',
            items: [
                'Disclosure / dissemination of information are done through various media so as to achieve maximum reach and quick dissemination.',
                'Disclosure / dissemination of information made to various media is uniform and no selective disclosure is made.',
                'Disclosure is made to stock exchanges prior to the said information being disclosed to the media.',
                'Disclosure is made simultaneously through the website www.mrcagro.com.',
                'The information filed by the Company with Stock Exchanges under disclosure requirement is made available on the Company website.',
            ],
        },
        { type: 'subheading', text: 'Prompt disclosure of UPSI that gets disclosed selectively, inadvertently or otherwise' },
        {
            type: 'list',
            items: [
                'Information / disclosure to be disseminated by anyone on behalf of the Company shall be got approved in advance from the Chief Investor Relations Officer.',
                'If any information / disclosure is accidentally / inadvertently or otherwise disclosed by anyone without prior approval from the Chief Investor Relations Officer, the person responsible shall immediately inform the Chief Investor Relations Officer, even if the information is not price sensitive.',
                'The UPSI that gets disclosed selectively, inadvertently or otherwise must promptly be attended to, and the UPSI along with necessary clarification shall be promptly disseminated and made generally available to all concerned by sending a copy to the Stock Exchange and uploading the same on the Company’s website.',
            ],
        },
        { type: 'subheading', text: 'Responding to queries on news reports and market rumours' },
        {
            type: 'para',
            text: 'Any queries on news reports or requests for verification of market rumours by stock exchanges / regulatory authorities shall be immediately forwarded by the recipient to the Chief Investor Relations Officer. The Chief Investor Relations Officer, in consultation with the Director and in his absence in consultation with the Managing Director, shall decide whether a public announcement is necessary for verifying or denying rumours and then make the disclosure.',
        },
        { type: 'subheading', text: 'Disclosure with special reference to Analysts and Institutional Investors' },
        {
            type: 'para',
            text: 'The Whole-time Director dealing with analysts and institutional investors, select shareholders, research personnel and media (hereinafter referred to as Analysts) shall follow the guidelines given hereunder. No UPSI shall be disclosed / disseminated to Analysts. Only public information should be provided to the Analysts. Alternatively, the information given to the Analyst should be simultaneously made public by informing the Stock Exchanges (through CIRO) simultaneously with providing of such information. For this purpose the information must be sent to CIRO before sharing with Analysts and the information also put on the Company’s website.',
        },
        { type: 'subheading', text: 'Transcripts and recording of proceedings' },
        {
            type: 'list',
            items: [
                'In order to avoid misquoting or misrepresentation, the company’s representative shall be present at meetings with Analysts and discussion should be recorded in writing and countersigned by CIRO on transcripts to be made.',
                'The transcripts / records of proceedings shall be displayed on the website of the company to ensure official confirmation and documentation of disclosures made.',
                'Handling of unanticipated questions: unanticipated questions should be taken on notice and a considered response given later in consultation with the Managing Director. If the answer includes UPSI, a public announcement should be made before responding, and informed to the Stock Exchanges either simultaneously or before public announcement.',
                'Simultaneous release of information: whenever a meeting with Analysts is organized, it shall be ensured that the company makes an announcement and information on its website simultaneously with every such meet.',
            ],
        },
        { type: 'subheading', text: 'Handling of UPSI on a “need to know” basis' },
        {
            type: 'para',
            text: 'UPSI is to be handled on a "need to know" basis, i.e. UPSI should be disclosed only to those within the Company who need the information to discharge their duty and whose possession of such information will not give rise to a conflict of interest or appearance of misuse of the information. No UPSI shall be communicated to any person except in furtherance of legitimate purposes, performance of duties or discharge of legal obligations. All UPSI directly received by an employee should immediately be reported to the CIRO, who in consultation with the Director or in his absence the MD shall decide whether a disclosure is necessary to Stock Exchanges and on the Company’s website.',
        },
        { type: 'heading', text: 'Policy for Determination of “Legitimate Purposes”' },
        {
            type: 'para',
            text: 'The term "legitimate purpose" shall generally include the sharing of UPSI in the ordinary course of business by an insider: within the Company and/or its subsidiaries; and with outsiders such as collaborators, lenders, customers, suppliers, merchant bankers, legal advisors, auditors, insolvency professionals or other advisors or consultants, rating agencies, investment bankers and due diligence service providers — for the purposes of carrying out an assignment for or on behalf of and/or for the benefit of the Company, provided that such sharing has not been carried out to evade or circumvent the prohibitions of the Regulations.',
        },
        {
            type: 'para',
            text: 'With respect to sharing of UPSI by Employees within the Company and/or its subsidiaries, "legitimate purpose" shall generally include sharing required for the performance of duties based on the role and function of the person, and pursuant to such other function as may be assigned from time to time, which shall be properly documented. Illustrative purposes include: preparing monthly / quarterly / annual financial results; preparing presentations at leadership meetings; preparing Board and Committee meeting agenda; and preparing communications to Stock Exchanges. Sharing of UPSI for discharging any legal and regulatory compliance / obligation shall be properly documented with necessary approvals from any one Key Managerial Personnel (KMP).',
        },
        {
            type: 'para',
            text: 'With respect to sharing of UPSI by Employees with Outsiders (like Auditors, Bankers, Consultants, etc.), "legitimate purpose" shall generally include, illustratively: sharing of quarterly / annual financial results (including of a material subsidiary) with Statutory Auditors for audit or limited review; sharing with legal advisors or auditors for expert opinion / advice; sharing of business plans with a Consultancy Firm for long-term vision / annual budget; sharing with Internal Auditors for internal audit; sharing of financials / estimated profit with the income tax department for advance tax estimations; access of files containing UPSI and accounting software to IT consultants; sharing with consultants for due diligence for acquisition / merger proposals or capital restructuring; and sharing with JV partners / merchant bankers / NBFCs for JV transactions / investment / divestment — provided that such sharing has not been carried out to evade or bypass the prohibitions of the Regulations.',
        },
        { type: 'subheading', text: 'Any recipient of UPSI shall be considered “Insider”' },
        {
            type: 'para',
            text: 'Any person in receipt of UPSI pursuant to a "legitimate purpose" shall be considered an "insider" for purposes of these regulations and due notice shall be given to such persons to maintain confidentiality of such UPSI in compliance with these regulations.',
        },
        { type: 'subheading', text: 'Communication and procurement of UPSI for legitimate purposes' },
        {
            type: 'para',
            text: 'No insider shall communicate, provide, or allow access to any UPSI relating to the company or its material subsidiaries, or its securities listed or proposed to be listed, to any person including other insiders except where such communication is in furtherance of legitimate purposes, performance of duties or discharge of legal obligations. The Insider sharing the UPSI shall ensure that the recipient has been given due notice to maintain confidentiality or has executed a confidentiality agreement, and shall record the sharing of UPSI (including person with whom shared, type of UPSI shared, when and how shared) for the purpose of maintaining an audit trail. Likewise, no person shall procure from or cause the communication by any insider of UPSI except in furtherance of legitimate purposes, performance of duties or discharge of legal obligations.',
        },
        {
            type: 'para',
            text: 'In case of any violation of the Policy or SEBI Regulations, the Company shall take appropriate action. In case the violation relates to leak or suspected leak of UPSI, the Company shall take appropriate action as per the Company’s Policy and Procedure for Enquiry in case of Leakage of UPSI, and the same shall be updated to SEBI along with the enquiry conducted and result thereof. Action will also be taken against the Insider found to be guilty as per the directions of SEBI.',
        },
        { type: 'heading', text: 'Structured Digital Database' },
        {
            type: 'para',
            text: 'A Structured Digital Database shall be maintained containing the names of such persons or entities, as the case may be, with whom information is shared for legitimate purposes along with the Permanent Account Number or any other identifier authorised by law where Permanent Account Number is not available. Adequate and effective systems of internal controls will also be laid out to ensure the compliance of maintenance of a digital database for sharing the information for said legitimate purpose.',
        },
        { type: 'heading', text: 'Amendments to the Policy' },
        {
            type: 'para',
            text: 'The Board of Directors can amend this Policy, as and when deemed fit. Any or all provisions of this Policy would be subject to revision / amendment in accordance with the Rules, Regulations, Notifications etc. on the subject as may be issued by relevant statutory authorities, from time to time. In case where any amendment(s), clarification(s), circular(s) etc. issued by the relevant authorities are not consistent with / are in addition to / are in derogation of the provisions laid down under this Policy, then such amendment(s), clarification(s), circular(s) etc. shall prevail upon the provisions of this Policy and this Policy shall stand amended accordingly from the effective date as laid down under such amendment(s), clarification(s), circular(s) etc.',
        },
    ],
};

const whistleBlower: Policy = {
    slug: 'whistle-blower',
    title: 'Vigil Mechanism / Whistle Blower Policy',
    reference: 'Section 177(9) of the Companies Act, 2013 & Regulation 22 of SEBI (LODR) Regulations, 2015',
    blocks: [
        { type: 'heading', text: 'Purpose' },
        {
            type: 'para',
            text: 'The Company believes in conducting its affairs in a fair and transparent manner by adopting the highest standards of professionalism, honesty, integrity and ethical behaviour accordingly, the Company has proposed to formulate this Whistle Blower Policy. Section 177(9) of the Companies Act, 2013 mandates the following classes of companies to constitute a vigil mechanism:',
        },
        {
            type: 'list',
            items: [
                'Every listed company;',
                'Every other company which accepts deposits from the public;',
                'Every company which has borrowed money from banks and public financial institutions in excess of Rs. 50 crores.',
            ],
        },
        {
            type: 'para',
            text: 'Further, Regulation 22 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 provides for all listed entities to formulate a vigil mechanism for directors and employees to report genuine concerns. The vigil mechanism should provide for adequate safeguards against victimization of director(s) or employee(s) or any other person who avail the mechanism and also provide for direct access to the chairperson of the audit committee in appropriate or exceptional cases.',
        },
        {
            type: 'para',
            text: 'Accordingly, this Whistle Blower Policy ("the Policy") has been formulated with a view to provide a mechanism for directors and employees of the Company to approach the Chairperson of the Audit Committee of the Company.',
        },
        { type: 'heading', text: 'Definitions' },
        {
            type: 'defs',
            items: [
                { term: 'Audit Committee', text: 'means the Audit Committee constituted by the Board of Directors of the Company in accordance with Section 177 of the Companies Act, 2013 and read with Regulation 18 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.' },
                { term: 'Director', text: 'means a director appointed to the Board of MRC Agrotech Limited.' },
                { term: 'Disclosure', text: 'means any information provided by an employee / director under this policy upon observance of unethical behavior, actual or suspected fraud or violation of the “Code of Business Conduct and Ethics” of the Company or violation of any other law.' },
                { term: 'Employee', text: 'means every employee of the Company wherever located whether permanent or on probation.' },
                { term: 'Unpublished Price Sensitive Information', text: 'is as defined under Regulation 2(1)(n) of Securities and Exchange Board of India (Prohibition of Insider Trading) Regulations, 2015 and the MRC Agrotech Limited Code of Conduct for Prevention of Insider Trading.' },
                { term: 'Whistle Blower (Complainant)', text: 'means an employee or director who makes a disclosure of any unethical behavior, actual or suspected fraud or violation of the “Code of Business Conduct and Ethics” of the Company or violation of any other law.' },
            ],
        },
        { type: 'heading', text: 'Applicability' },
        {
            type: 'para',
            text: 'This policy shall be applicable to all employees and directors of the Company.',
        },
        { type: 'heading', text: 'Main Features of Whistle Blowing' },
        {
            type: 'list',
            items: [
                'To be used for: Reporting any serious actual or suspected frauds, concerns relating to financial matters / reporting, including instances of leak or suspected leak of unpublished price sensitive information (as defined under the MRC Agrotech Limited Code of Conduct for Prevention of Insider Trading), unethical or illegal conduct or actual or possible violation of Code of Conduct; actions which are not in line with the applicable company policies, actions which would affect the company’s image or reputation, actions which are in the nature of harassment or actions that would amount to serious improper conduct or any other genuine concern.',
                'Whistle Blowers: A Director / Employee making disclosure under this policy is referred to as "Whistle Blower" or "Complainant". The Whistle Blower has to demonstrate or provide sufficient grounds for his / her concern but should not make any malicious allegations which would result in disciplinary action.',
                'Whom to Report: The complaining employees should submit the report raising the concern either to (a) The Head – Personnel or (b) The Company Secretary, or can send an email to info@mrcagro.com with a copy to any of the above two Officers (called Access Persons). If the complaint is either against any one of the Access Persons, then it can be made to the Managing Director of the Company. If the complaint is against the Managing Director, it can be made to the Chairman of the Audit Committee of the Company. Directors, when they blow the whistle, should send the complaining report to the Chairman of the Audit Committee.',
                'When to Report: The Complainant shall raise the issue immediately / promptly but within a reasonable period of the event / action / finding but not later than two months.',
                'How to Report: The report should include as much information about the suspected violation. Where possible, it should describe the nature of the suspected violation; the identities of persons involved in the suspected violation; a description of documents that relate to the suspected violation; and the time frame during which the suspected violation occurred. The complainant may be required to give further information.',
            ],
        },
        { type: 'heading', text: 'Investigation' },
        {
            type: 'para',
            text: 'All reports under this Policy will be investigated promptly either by the Access Persons or any Committee formed in this regard by the Access Persons. Immediately on receipt of the Complaint, an acknowledgement will be given to the complainant. Based on a thorough examination of the findings, the Access Persons or the Committee formed in this regard shall submit the Report to the Managing Director / Audit Committee.',
        },
        {
            type: 'para',
            text: 'If, at the conclusion of its investigation, the Company determines that a violation has occurred, the Company will take effective remedial action commensurate with the nature of the offense. Reasonable and necessary steps will also be taken to prevent any further violations.',
        },
        { type: 'heading', text: 'Safeguards Against Victimization' },
        {
            type: 'list',
            items: [
                'No adverse action shall be taken or recommended against a Complainant in retaliation to his blowing the whistle. Harassment / victimisation of the Complainant will constitute sufficient ground for dismissal of the concerned employee.',
                'Source of information to the complainant shall be disclosed to facilitate investigation.',
                'Every effort will be made to protect the complainant’s identity subject to any legal constraints that may arise from time to time.',
            ],
        },
        { type: 'heading', text: 'Changes of Policy' },
        {
            type: 'para',
            text: 'This policy can be changed, modified, rescinded or abrogated at any time by the Company.',
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
