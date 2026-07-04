import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ClientSetup from "@/components/ClientSetup";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata = {
    title: "Tripdhara - Premium Himalayan Travel & Stay Bookings",
    description:
        "Premium travel booking services for Himalayan road trips and resort stays. Find professional chauffeur-driven cars, rental adventure bikes, luxury resorts, and custom packages across Uttarakhand & Himachal. Call +91 95364 89063 today.",
    keywords:
        "Himalayan road trips, Uttarakhand luxury resorts, Himachal bike rentals, premium travel booking, chauffeur-driven cars, Tripdhara",
    authors: [{ name: "Tripdhara" }],
    robots: "index, follow, max-image-preview:large",
    alternates: {
        canonical: "https://www.tripdhara.com/",
    },
    openGraph: {
        type: "website",
        url: "https://www.tripdhara.com/",
        title: "Tripdhara - Premium Himalayan Travel & Stay Bookings",
        description:
            "Premium travel booking services for Himalayan road trips and resort stays. Find professional cars, rental bikes, and luxury resorts across Uttarakhand & Himachal.",
        siteName: "Tripdhara",
        images: [
            {
                url: "https://www.tripdhara.com/assets/images/og-banner.png",
            },
        ],
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tripdhara - Premium Himalayan Travel & Stay Bookings",
        description:
            "Premium travel booking services for Himalayan road trips and resort stays across Uttarakhand & Himachal.",
        images: ["https://www.tripdhara.com/assets/images/og-banner.png"],
    },
    manifest: "/assets/favicon/site.webmanifest?v=20260617",
    icons: {
        icon: [
            {
                url: "/assets/favicon/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
            {
                url: "/assets/favicon/favicon.svg?v=20260617",
                type: "image/svg+xml",
            },
        ],
        shortcut: "/assets/favicon/favicon.ico?v=20260617",
        apple: "/assets/favicon/apple-touch-icon.png?v=20260617",
    },
    other: {
        "mobile-web-app-capable": "yes",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
        "apple-mobile-web-app-title": "Tripdhara",
        "format-detection": "telephone=no",
        "geo.region": "IN-UT",
        "geo.placename": "Uttarakhand",
    },
};

export const viewport = {
    themeColor: "#050d0a",
    width: "device-width",
    initialScale: 1,
};

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
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-5JKHT2T3"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>

                <ClientSetup />
                <Header />
                {children}
                <Footer />
                <WhatsAppWidget />

                <Script id="gtm" strategy="afterInteractive">
                    {`
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    "gtm.start": new Date().getTime(),
                    event: "gtm.js",
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-5JKHT2T3");
          `}
                </Script>

                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-QPMEDXNFDK"
                    strategy="afterInteractive"
                />
                <Script id="gtag" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-QPMEDXNFDK");
          `}
                </Script>
                <Script
                    id="schema-org"
                    type="application/ld+json"
                    strategy="beforeInteractive"
                >
                    {`
            {
                "@context": "https://schema.org",
                "@type": "TravelAgency",
                "name": "Tripdhara",
                "image": "https://www.tripdhara.com/assets/images/og-banner.png",
                "@id": "https://www.tripdhara.com/#agency",
                "url": "https://www.tripdhara.com/",
                "telephone": "+919536489063",
                "priceRange": "$$",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Uttarakhand",
                    "addressLocality": "Dehradun",
                    "addressRegion": "Uttarakhand",
                    "postalCode": "248001",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 30.3165,
                    "longitude": 78.0322
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                },
                "sameAs": ["https://wa.me/919536489063"],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "258"
                }
            }
          `}
                </Script>
            </body>
        </html>
    );
}
