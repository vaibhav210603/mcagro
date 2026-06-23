import { InvestorPageWrapper, DocumentList } from './InvestorComponents';

const shareholding = [
    { title: "Shareholding Pattern (BSE India)", url: "https://www.bseindia.com/stock-share-price/mrc-agrotech-ltd/mrcagro/540809/qtrid/129.01/shareholding-pattern/mar-2026" }
];

export const ShareholdersInfo = () => (
    <InvestorPageWrapper title="Shareholders Information">
        <DocumentList documents={shareholding} />
    </InvestorPageWrapper>
);
