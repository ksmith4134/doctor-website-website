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
            <div id="hero" className="">
                <MaxWidth>
                    <Hero />
                </MaxWidth>
            </div>
            <div id="services" className="pt-40">
                <MaxWidth>
                    <Services />
                </MaxWidth>
            </div>
            <div id="work" className="pt-48">
                <MaxWidth>
                    <Portfolio />
                </MaxWidth>
            </div>
            <div id="innovation" className="pt-48">
                <MaxWidth>
                    <CMS />
                </MaxWidth>
            </div>
            <div id="about" className="pt-48">
                <MaxWidth>
                    <About />
                </MaxWidth>
            </div>
            <div id="contact" className="pt-48">
                <MaxWidth>
                    <Contact />
                </MaxWidth>
            </div>
        </main>
    );
}
