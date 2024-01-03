import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import { services } from "@/lib/cms";


export default function Home() {
    return (
        <main>
            <div id="hero">
                <Hero />
            </div>
            <div id="services" className="pt-60">
                <Services services={services} />
            </div>
            <div id="work" className="pt-60">
                <Portfolio />
            </div>
            <div id="innovation">
                <p className="pt-36 text-white">Innovation</p>
            </div>
            <div id="about">
                <p className="pt-36 text-white">About Us</p>
            </div>
            <div id="contact">
                <p className="pt-36 text-white">Contact</p>
            </div>
        </main>
    );
}
