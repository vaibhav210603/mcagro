

export const Footer = () => {
    return (
        <footer className="bg-white py-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-brand-900 font-bold text-xl">MRC Agro</div>

                <div className="flex gap-8 text-sm text-gray-500">
                    <a href="#" className="hover:text-brand-900 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-900 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-brand-900 transition-colors">Sitemap</a>
                </div>

                <div className="text-sm text-gray-400">
                    © 2023 MRC Agrotech Ltd. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
