import About from "@/components/sections/About";
import CMS from "@/components/sections/CMS";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import MaxWidth from "@/components/utils/MaxWidth";


export default function Home() {
    return (
        <main>
            <div id="hero" className="pb-24">
                <MaxWidth>
                    <Hero />
                </MaxWidth>
            </div>
            <div id="services" className="py-24">
                <MaxWidth>
                    <Services />
                </MaxWidth>
            </div>
            <div id="work" className="py-24">
                <MaxWidth>
                    <Portfolio />
                </MaxWidth>
            </div>
            <div id="innovation" className="py-24">
                <MaxWidth>
                    <CMS />
                </MaxWidth>
            </div>
            <div id="about" className="py-24">
                <MaxWidth>
                    <About />
                </MaxWidth>
            </div>
            <div id="contact2" className="py-24">
                <MaxWidth>
                    <Contact />
                </MaxWidth>
            </div>
        </main>
    );
}
