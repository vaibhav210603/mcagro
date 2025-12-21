import { type ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
    return (
        <section id={id} className={cn('py-16 md:py-32 overflow-hidden', className)}>
            <div className="max-w-7xl mx-auto px-6">
                {children}
            </div>
        </section>
    );
};
