import Hero from "@/components/sections/Hero";

export default function Home() {
    return (
        <main>
            {/* HERO */}
            <div id="hero">
                <Hero />
            </div>
            <div id="services">
                <p className="pt-36 text-white">Services</p>
            </div>
            <div id="work">
                <p className="pt-36 text-white">Our Work</p>
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
