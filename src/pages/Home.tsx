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
            <About />
            <Sustainability />
            <MrcMallPreview /> {/* New Promotional Section */}
            <Products />
            <Investors />
            <Contact />
        </>
    );
};
