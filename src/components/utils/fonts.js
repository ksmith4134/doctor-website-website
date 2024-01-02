import { Inter, Hind_Siliguri } from "next/font/google";

export const inter = Inter({ 
    subsets: ["latin"],
    variable: '--font-inter',
    display: 'swap',
});

export const hind_siliguri = Hind_Siliguri({ 
    subsets: ["latin"], 
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-hind',
    display: 'swap',
});