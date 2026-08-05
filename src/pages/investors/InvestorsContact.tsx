import { InvestorPageWrapper } from './InvestorComponents';
import { Building2, Mail, MapPin } from 'lucide-react';

export const InvestorsContact = () => (
    <InvestorPageWrapper title="Investors Contact">
        <div className="space-y-6 mt-4">
            <p className="text-gray-600 leading-relaxed text-base italic">
                All stakeholders are important to us. We ensure transparency in financial reporting system.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
                {/* RTA Card */}
                <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-brand-100 rounded-lg">
                            <Building2 size={20} className="text-brand-700" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">RTA</h4>
                            <p className="text-sm text-brand-700 font-semibold">PURVA SHAREGISTRY (INDIA) PRIVATE LIMITED</p>
                        </div>
                    </div>
                    <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                            <MapPin size={16} className="text-gray-400 mt-0.5 shrink-0" />
                            <span>Unit no 9, Shiv Shakti Industrial Estate, J.R. Boricha Marg, Lower Parel (E), Mumbai 400 011.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-gray-400 shrink-0" />
                            <a href="mailto:support@purvashare.com" className="text-brand-600 hover:text-brand-800 transition-colors font-medium">
                                support@purvashare.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Company Secretary Card */}
                <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-emerald-100 rounded-lg">
                            <Building2 size={20} className="text-emerald-700" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Company Secretary & Compliance Officer</h4>
                            <p className="text-sm text-emerald-700 font-semibold">Mr. Rahul Mathur</p>
                        </div>
                    </div>
                    <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                            <MapPin size={16} className="text-gray-400 mt-0.5 shrink-0" />
                            <span>Office no 1028, The Summit Business Bay by Omkar, WEH, Andheri (E), Mumbai 400 093.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-gray-400 shrink-0" />
                            <a href="mailto:info@mrcagro.com" className="text-emerald-600 hover:text-emerald-800 transition-colors font-medium">
                                info@mrcagro.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </InvestorPageWrapper>
);
