import type { Policy } from './PolicyLayout';

// Website disclosures of MRC Agrotech Limited under Regulation 46 & 62 of SEBI (LODR)
// Regulations, 2015 that are presented as on-page statements (rather than a separate PDF/link).
// Each is drafted to be factually accurate and updated as and when required.

const BSE_ANNOUNCEMENTS =
    'https://www.bseindia.com/stock-share-price/mrc-agrotech-ltd/mrcagro/540809/corp-announcements/';

const nameChange: Policy = {
    slug: 'name-change',
    title: 'Change of Name of the Listed Entity',
    reference: 'Regulation 46(2)(s) of SEBI (LODR) Regulations, 2015',
    kind: 'disclosure',
    blocks: [
        { type: 'heading', text: 'Old Name and New Name of the Company' },
        {
            type: 'para',
            text: 'The Company was originally incorporated as “MRC Exim Limited”. Pursuant to a change of name approved in accordance with the provisions of the Companies Act, 2013, the name of the Company was changed to its present name, “MRC Agrotech Limited”, with effect from 30 September 2021, and a fresh Certificate of Incorporation consequent upon change of name was issued by the Registrar of Companies.',
        },
        {
            type: 'defs',
            items: [
                { term: 'Old Name', text: 'MRC Exim Limited' },
                { term: 'New Name', text: 'MRC Agrotech Limited' },
                { term: 'Effective Date of Change of Name', text: '30 September 2021' },
            ],
        },
        {
            type: 'para',
            text: 'The equity shares of the Company are listed on BSE Limited (Scrip Code: 540809). The change of name has been given effect to in the records of the Company, the depositories and the stock exchange.',
        },
    ],
};

const reg308: Policy = {
    slug: 'reg30-8-disclosures',
    title: 'Disclosures under Regulation 30(8)',
    reference: 'Regulation 30(8) of SEBI (LODR) Regulations, 2015',
    kind: 'disclosure',
    blocks: [
        { type: 'heading', text: 'Material Events and Information disclosed to the Stock Exchange' },
        {
            type: 'para',
            text: 'In accordance with Regulation 30(8) of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015, all events or information which have been disclosed by MRC Agrotech Limited to BSE Limited under Regulation 30 are hosted on the website of the Company and are retained for a minimum period of five years, and thereafter dealt with in accordance with the Company’s Archival Policy and Policy for Preservation of Documents.',
        },
        {
            type: 'para',
            text: 'The disclosures of material events and information made by the Company to the stock exchange are also available on the website of BSE Limited under the corporate announcements section for the Company (Scrip Code: 540809).',
        },
        {
            type: 'list',
            items: [
                'Determination of the materiality of an event or information is governed by the Company’s Policy for Determination of Materiality of Events or Information.',
                'The archival and preservation of such disclosures is governed by the Company’s Archival Policy and Policy for Preservation of Documents.',
                'The complete history of corporate announcements filed by the Company is available on the BSE website at the corporate announcements page for MRC Agrotech Limited (Scrip Code: 540809).',
            ],
        },
    ],
};

const reg32: Policy = {
    slug: 'reg32-deviation',
    title: 'Statement of Deviation(s) or Variation(s) under Regulation 32',
    reference: 'Regulation 32 of SEBI (LODR) Regulations, 2015',
    kind: 'disclosure',
    blocks: [
        { type: 'heading', text: 'Utilisation of Funds and Statement of Deviation / Variation' },
        {
            type: 'para',
            text: 'Pursuant to Regulation 32 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015, the Company is required, where applicable, to submit to the stock exchange, on a quarterly basis, a statement of deviation(s) or variation(s) in the use of proceeds of a public issue, rights issue, preferential issue or qualified institutions placement, as against the objects stated in the relevant offer document or explanatory statement, until such time as the said proceeds have been fully utilised.',
        },
        {
            type: 'para',
            text: 'Any such statement of deviation or variation is placed before and reviewed by the Audit Committee of the Company and thereafter submitted to BSE Limited. Where, during the relevant period, the Company has not raised any funds through the means referred to above requiring a statement under Regulation 32, no such statement is applicable for that period.',
        },
        {
            type: 'para',
            text: 'The applicable statements, as and when required, are disclosed to BSE Limited and are available under the corporate announcements section for the Company (Scrip Code: 540809).',
        },
    ],
};

const pressReleases: Policy = {
    slug: 'press-releases',
    title: 'Press Releases / Press Notes',
    reference: 'Regulation 46(2)(g) of SEBI (LODR) Regulations, 2015',
    kind: 'disclosure',
    blocks: [
        { type: 'heading', text: 'Official Media Communications of the Company' },
        {
            type: 'para',
            text: 'All official press releases and press notes issued by MRC Agrotech Limited are published on this page in accordance with Regulation 46 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015. Where such press releases relate to material events or information, they are simultaneously filed with BSE Limited under Regulation 30.',
        },
        {
            type: 'para',
            text: 'Investors are advised to rely only on official communications issued by the Company and disclosed to the stock exchange. Press releases and media communications filed with the stock exchange are available under the corporate announcements section for the Company (Scrip Code: 540809).',
        },
    ],
};

const annualReturn: Policy = {
    slug: 'annual-return',
    title: 'Annual Return',
    reference: 'Section 92(3) of the Companies Act, 2013 & Regulation 46 of SEBI (LODR) Regulations, 2015',
    kind: 'disclosure',
    blocks: [
        { type: 'heading', text: 'Annual Return under Section 92 of the Companies Act, 2013' },
        {
            type: 'para',
            text: 'In accordance with Section 92(3) of the Companies Act, 2013 read with the rules made thereunder, a copy of the Annual Return of MRC Agrotech Limited is placed on the website of the Company. The Annual Return is prepared in the prescribed form and contains, among other particulars, details of the registered office, principal business activities, holding and subsidiary companies, shares and other securities, shareholding pattern, indebtedness, and the members and debenture-holders of the Company.',
        },
        {
            type: 'para',
            text: 'The Annual Return for the relevant financial year is made available here and, together with the financial statements and Board’s Report, forms part of the Annual Report of the Company, which is also available in the Financial Reporting section of this website.',
        },
    ],
};

const newspaperAds: Policy = {
    slug: 'newspaper-advertisements',
    title: 'Newspaper Advertisements / Publications',
    reference: 'Regulation 47 & 46 of SEBI (LODR) Regulations, 2015',
    kind: 'disclosure',
    blocks: [
        { type: 'heading', text: 'Statutory Publications in Newspapers' },
        {
            type: 'para',
            text: 'Pursuant to Regulation 47 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015, MRC Agrotech Limited publishes prescribed information in the newspapers, including the quarterly, half-yearly and annual financial results, notices of Board meetings at which financial results are to be considered, and notices to shareholders such as notices convening general meetings and book-closure / record-date notices.',
        },
        {
            type: 'para',
            text: 'Copies of such newspaper advertisements and publications are hosted on this page as and when they are published, and the corresponding notices are also filed with BSE Limited under the corporate announcements section for the Company (Scrip Code: 540809).',
        },
    ],
};

export const disclosures: Policy[] = [
    nameChange,
    reg308,
    reg32,
    pressReleases,
    annualReturn,
    newspaperAds,
];

export { BSE_ANNOUNCEMENTS };
