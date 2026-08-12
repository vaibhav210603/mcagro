import { motion } from 'framer-motion';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

// A single block within a policy. Renders as a heading, paragraphs, a list, or a definition.
export type PolicyBlock =
    | { type: 'heading'; text: string }
    | { type: 'para'; text: string }
    | { type: 'list'; items: string[]; ordered?: boolean }
    | { type: 'defs'; items: { term: string; text: string }[] };

export type Policy = {
    slug: string;
    title: string;
    /** Statutory reference shown under the title, e.g. "Regulation 16 of SEBI (LODR) Regulations, 2015". */
    reference?: string;
    blocks: PolicyBlock[];
};

// Company constants used across every policy letterhead.
export const COMPANY = {
    name: 'MRC Agrotech Limited',
    scrip: 'BSE Scrip Code: 540809',
    office:
        'Office No. 1028, The Summit Business Bay by Omkar, Western Express Highway, Andheri (East), Mumbai – 400 093',
    email: 'info@mrcagro.com',
    complianceOfficer: 'Mr. Rahul Mathur, Company Secretary & Compliance Officer',
};

const Block = ({ block }: { block: PolicyBlock }) => {
    switch (block.type) {
        case 'heading':
            return (
                <h2 className="text-lg md:text-xl font-bold text-dark mt-8 mb-3 scroll-mt-24">
                    {block.text}
                </h2>
            );
        case 'para':
            return <p className="text-gray-700 leading-relaxed mb-4 text-justify">{block.text}</p>;
        case 'list':
            return block.ordered ? (
                <ol className="list-decimal pl-6 space-y-2 mb-4 text-gray-700 marker:text-brand-500 marker:font-semibold">
                    {block.items.map((it, i) => (
                        <li key={i} className="leading-relaxed pl-1 text-justify">
                            {it}
                        </li>
                    ))}
                </ol>
            ) : (
                <ul className="space-y-2 mb-4">
                    {block.items.map((it, i) => (
                        <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                            <span className="text-justify">{it}</span>
                        </li>
                    ))}
                </ul>
            );
        case 'defs':
            return (
                <dl className="space-y-3 mb-4">
                    {block.items.map((d, i) => (
                        <div key={i} className="text-gray-700 leading-relaxed">
                            <dt className="inline font-semibold text-dark">“{d.term}”</dt>{' '}
                            <dd className="inline">{d.text}</dd>
                        </div>
                    ))}
                </dl>
            );
    }
};

export const PolicyLayout = ({ policy }: { policy: Policy }) => (
    <div className="pt-20 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 print:py-0 print:px-0">
            <div className="flex items-center justify-between mb-6 print:hidden">
                <Link
                    to="/investors/corporate-announcement"
                    className="inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-800 transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Policies
                </Link>
                <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-700 transition-colors"
                >
                    <Printer size={16} /> Print / Save as PDF
                </button>
            </div>

            <motion.article
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden print:shadow-none print:border-0 print:rounded-none"
            >
                {/* Letterhead */}
                <header className="border-b-2 border-brand-600 px-8 md:px-12 pt-10 pb-6 text-center">
                    <img
                        src="/MRC LOGO.png"
                        alt="MRC Agrotech Limited"
                        className="h-20 md:h-24 w-auto mx-auto object-contain"
                    />
                    <h1 className="mt-5 text-xl md:text-2xl font-bold text-dark tracking-tight">
                        {COMPANY.name}
                    </h1>
                    <p className="text-xs text-gray-500 mt-1">
                        {COMPANY.scrip} &nbsp;·&nbsp; {COMPANY.office}
                    </p>
                </header>

                {/* Title */}
                <div className="px-8 md:px-12 pt-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-800 leading-tight">
                        {policy.title}
                    </h2>
                    {policy.reference && (
                        <p className="mt-2 text-sm text-gray-500 italic">{policy.reference}</p>
                    )}
                    <div className="mx-auto mt-5 h-px w-24 bg-brand-200" />
                </div>

                {/* Body */}
                <div className="px-8 md:px-12 py-8 text-[15px]">
                    {policy.blocks.map((block, i) => (
                        <Block key={i} block={block} />
                    ))}
                </div>

                {/* Approval footer */}
                <footer className="px-8 md:px-12 py-6 border-t border-gray-100 bg-gray-50/60 print:bg-white">
                    <p className="text-xs text-gray-500 leading-relaxed">
                        This Policy has been approved and adopted by the Board of Directors of {COMPANY.name}.
                        It shall be reviewed periodically and is subject to amendment by the Board to give effect
                        to any change in law or regulation. In the event of any conflict between this Policy and
                        the applicable statute, rules or regulations, the provisions of such statute, rules or
                        regulations shall prevail. For clarifications, contact {COMPANY.complianceOfficer}
                        {' '}({COMPANY.email}).
                    </p>
                </footer>
            </motion.article>
        </div>
    </div>
);
