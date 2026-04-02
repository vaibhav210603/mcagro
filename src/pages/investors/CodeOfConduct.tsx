import { InvestorPageWrapper, DocumentList } from './InvestorComponents';

const policies = [
    { title: "Code of Conduct Policy", url: "/Code of Conduct Policy.pdf" },
    { title: "Dividend Distribution Policy", url: "/Dividend Distribution Policy.pdf" },
    { title: "Nomination and Remuneration Policy", url: "/Nomination and Remuneration Policy.pdf" },
    { title: "Policy on Related Party Transactions - MRC", url: "/Policy on Related Party Transactions - MRC.pdf" },
];

export const CodeOfConduct = () => (
    <InvestorPageWrapper title="Code Of Conduct & Policy">
        <DocumentList documents={policies} />
    </InvestorPageWrapper>
);
