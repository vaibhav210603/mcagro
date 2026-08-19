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

// Note: Regulation 30(8) material events and Regulation 32 deviation statements are filed on
// the BSE portal, and the Annual Return belongs with the Annual Reports — so those items link
// to their real sources on the Regulation 46 & 62 page rather than to a thin generated PDF.
export const disclosures: Policy[] = [
    nameChange,
    pressReleases,
    newspaperAds,
];

export { BSE_ANNOUNCEMENTS };
