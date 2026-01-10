import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Products } from '../components/sections/Products';
import { Sustainability } from '../components/sections/Sustainability';
import { Investors } from '../components/sections/Investors';
import { Contact } from '../components/sections/Contact';
import { MrcMallPreview } from '../components/sections/MrcMallPreview';

export const Home = () => {
    return (
        <>
            <Hero />
            <MrcMallPreview /> {/* New Promotional Section */}
            <About />
            <Sustainability />
            <Products />
            <Investors />
            <Contact />
        </>
    );
};
