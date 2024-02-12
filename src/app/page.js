import Hero from "@/components/sections/Hero";
import InfiniteScrollBanner from "@/components/widgets/InfiniteScrollBanner";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import MaxWidth from "@/components/utils/MaxWidth";

export default function Home() {
    return (
        <main className="slide-enter-content">
            <div id='hero' className='pt-24 md:pt-36 lg:pt-48 pb-16'>
                <MaxWidth>
                    <Hero />
                </MaxWidth>
            </div>
            <div id='horizontal-infinite-scroll' className='lg:mb-4'>
                <InfiniteScrollBanner />
            </div>
            <div id='services'>
                <MaxWidth>
                    <Services />
                </MaxWidth>
            </div>
            <div id='work' className='py-24'>
                <MaxWidth>
                    <Portfolio />
                </MaxWidth>
            </div>
            <div id='about' className='py-24'>
                <MaxWidth>
                    <About />
                </MaxWidth>
            </div>
            <div id='contact' className='py-24'>
                <MaxWidth>
                    <Contact />
                </MaxWidth>
            </div>
        </main>
    );
}
