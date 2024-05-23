import { Inter, Poppins, Satisfy } from "next/font/google";

export const inter = Inter({ 
    subsets: ["latin"],
    display: 'swap', 
});

export const poppins = Poppins({ 
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: 'swap',
});

export const satisfy = Satisfy({ 
    weight: ["400"],
    subsets: ["latin"], 
    display: 'swap',
});