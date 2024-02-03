import "./globals.css";
import { inter, hind_siliguri } from "@/components/utils/fonts";
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";


export const metadata = {
    title: "Revered",
    description: "Homepage for a web development agency specializing in websites for healthcare.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className="scroll-smooth">
            <body className={`bg-gray-950 ${inter.className} ${hind_siliguri.variable}`}>
                <Header />
                    {children}
                <Footer />
            </body>
        </html>
    );
}
