import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Products } from '../components/sections/Products';
import { Sustainability } from '../components/sections/Sustainability';
import { Contact } from '../components/sections/Contact';
import { Charity } from '../components/sections/Charity';
import { MrcMallPreview } from '../components/sections/MrcMallPreview';
import { Leadership } from '../components/sections/Leadership';
import { NewsHighlight } from '../components/sections/NewsHighlight';
import { NoticesSection } from '../components/sections/NoticesSection';
import { Associations } from '../components/sections/Associations';

export const Home = () => {
    return (
        <>
            <Hero />
            <MrcMallPreview />
            <About />
            <Leadership />
            <Charity />
            <Sustainability />
            <Products />
            <NewsHighlight />
            <NoticesSection />
            <Associations />
            <Contact />
        </>
    );
};
