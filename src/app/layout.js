import "./globals.css";
import { inter, hind_siliguri } from "@/components/utils/fonts";
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";
import MaxWidth from "@/components/utils/MaxWidth";


export const metadata = {
    title: "Doctors office web development agency",
    description: "Homepage for a web development agency specializing in websites for doctors.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`bg-gray-950 ${inter.className} ${hind_siliguri.variable}`}>
                <Header />
                <MaxWidth>
                    {children}
                </MaxWidth>
                <Footer />
            </body>
        </html>
    );
}
