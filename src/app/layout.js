import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WhatsApp from "@/components/ui/WhatsApp";
import Setup from "@/components/ui/Setup";
import AppScripts from "@/components/ui/AppScripts";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export { metadata, viewport } from "@/config/metadata";

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            data-scroll-behavior="smooth"
            className={`${inter.variable} ${outfit.variable} h-full antialiased`}
        >
            <head>
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
            </head>
            <body className="min-h-full flex flex-col font-inter bg-dark text-white">
                <Setup />
                <Header />
                {children}
                <Footer />
                <WhatsApp />
                <AppScripts />
            </body>
        </html>
    );
}
