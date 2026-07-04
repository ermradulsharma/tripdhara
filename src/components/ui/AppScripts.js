import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export default function AppScripts() {
    return (
        <>
            <Analytics />
            <GoogleTagManager gtmId="GTM-5JKHT2T3" />
            <GoogleAnalytics gaId="G-QPMEDXNFDK" />
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
        </>
    );
}
