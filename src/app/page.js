import About from "@/components/sections/About";
import CMS from "@/components/sections/CMS";
import Contact from "@/components/sections/Contact";
import Hero2 from "@/components/sections/Hero2";
import Portfolio2 from "@/components/sections/Portfolio2";
import Services from "@/components/sections/Services";
import MaxWidth from "@/components/utils/MaxWidth";


export default function Home() {
    return (
        <main>
            <div id="hero">
                <Hero2 />
            </div>
            <MaxWidth>
                <div id="services" className="pt-60">
                    <Services />
                </div>
                <div id="work" className="pt-60">
                    <Portfolio2 />
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
