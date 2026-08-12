import { Navigate, useParams } from 'react-router-dom';
import { PolicyLayout, type Policy } from './PolicyLayout';
import { policies } from './policyContent';
import { disclosures } from './disclosureContent';

// Policy pages and Regulation 46/62 disclosure pages share the same letterhead layout and route.
const docBySlug: Record<string, Policy> = Object.fromEntries(
    [...policies, ...disclosures].map((p) => [p.slug, p]),
);

export const PolicyPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const doc = slug ? docBySlug[slug] : undefined;

    if (!doc) {
        return <Navigate to="/investors/corporate-announcement" replace />;
    }

    return <PolicyLayout policy={doc} />;
};
