import { Navigate, useParams } from 'react-router-dom';
import { PolicyLayout } from './PolicyLayout';
import { policyBySlug } from './policyContent';

export const PolicyPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const policy = slug ? policyBySlug[slug] : undefined;

    if (!policy) {
        return <Navigate to="/investors/corporate-announcement" replace />;
    }

    return <PolicyLayout policy={policy} />;
};
