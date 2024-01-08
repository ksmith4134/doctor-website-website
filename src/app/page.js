import About from "@/components/sections/About";
import CMS from "@/components/sections/CMS";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import MaxWidth from "@/components/utils/MaxWidth";
import { services } from "@/lib/cms";


export default function Home() {
    return (
        <main>
            <div id="hero">
                <Hero />
            </div>
            <MaxWidth>
                <div id="services" className="pt-60">
                    <Services services={services} />
                </div>
                <div id="work" className="pt-60">
                    <Portfolio />
                </div>
                <div id="innovation" className="pt-60">
                    <CMS />
                </div>
                <div id="about" className="pt-60">
                    <About />
                </div>
                <div id="contact" className="pt-60">
                    <Contact />
                </div>
            </MaxWidth>
        </main>
    );
}
