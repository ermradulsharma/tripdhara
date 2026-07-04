"use client";
import React, { useEffect, useState } from "react";

export default function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState("intro");

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "intro",
                "collection",
                "usage",
                "sharing",
                "cookies",
                "security",
                "contact",
            ];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (
                    element &&
                    element.offsetTop <= scrollPosition &&
                    element.offsetTop + element.offsetHeight > scrollPosition
                ) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="legal-page-wrapper">
            <section
                className="subpage-hero"
                style={{
                    backgroundImage:
                        'url("/assets/images/hero_background.png")',
                }}
            >
                <div className="hero-overlay"></div>
                <div className="subpage-hero-content">
                    <span className="subpage-hero-subtitle">
                        Tripdhara Policies
                    </span>
                    <h1 className="subpage-hero-title">Privacy Policy</h1>
                </div>
            </section>

            <div className="legal-container">
                <aside className="legal-sidebar">
                    <h4>Contents</h4>
                    <ul>
                        <li>
                            <a
                                href="#intro"
                                className={
                                    activeSection === "intro" ? "active" : ""
                                }
                            >
                                1. Introduction
                            </a>
                        </li>
                        <li>
                            <a
                                href="#collection"
                                className={
                                    activeSection === "collection"
                                        ? "active"
                                        : ""
                                }
                            >
                                2. Information Collection
                            </a>
                        </li>
                        <li>
                            <a
                                href="#usage"
                                className={
                                    activeSection === "usage" ? "active" : ""
                                }
                            >
                                3. How We Use Information
                            </a>
                        </li>
                        <li>
                            <a
                                href="#sharing"
                                className={
                                    activeSection === "sharing" ? "active" : ""
                                }
                            >
                                4. Data Sharing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#cookies"
                                className={
                                    activeSection === "cookies" ? "active" : ""
                                }
                            >
                                5. Cookies & Tracking
                            </a>
                        </li>
                        <li>
                            <a
                                href="#security"
                                className={
                                    activeSection === "security" ? "active" : ""
                                }
                            >
                                6. Data Security & Rights
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={
                                    activeSection === "contact" ? "active" : ""
                                }
                            >
                                7. Contact Us
                            </a>
                        </li>
                    </ul>
                </aside>

                <div className="legal-content">
                    <section id="intro" style={{ padding: "0 !important" }}>
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to <strong>Tripdhara</strong>. We value the
                            trust you place in us when booking your Himalayan
                            adventures, vehicle rentals, and homestay
                            accommodations. This Privacy Policy explains how we
                            collect, use, disclose, and safeguard your
                            information when you visit our website or use our
                            services.
                        </p>
                        <p>
                            By accessing or using our website and services, you
                            signify that you have read, understood, and agree to
                            our collection, storage, use, and disclosure of your
                            personal information as described in this Privacy
                            Policy.
                        </p>
                    </section>

                    <section
                        id="collection"
                        style={{ padding: "0 !important" }}
                    >
                        <h2>2. Information Collection</h2>
                        <p>
                            We collect personal information that you voluntarily
                            provide to us when registering on the website,
                            expressing an interest in obtaining information
                            about our travel packages, or otherwise contacting
                            us. The personal information that we collect depends
                            on the context of your interactions with us and may
                            include:
                        </p>
                        <ul>
                            <li>
                                <strong>Personal Identity Data:</strong> Full
                                name, date of birth, gender, and
                                government-issued ID (Aadhar Card, Passport)
                                required for hotel check-ins and permit
                                generations.
                            </li>
                            <li>
                                <strong>Contact Information:</strong> Phone
                                numbers, email addresses, and postal addresses.
                            </li>
                            <li>
                                <strong>Payment Data:</strong> Billing address,
                                transaction details, and payment method
                                information (processed securely through
                                encrypted third-party payment gateways; we do
                                not store full credit card details).
                            </li>
                            <li>
                                <strong>Travel Preferences:</strong> Dietary
                                requirements, medical conditions relevant to
                                adventure activities, and specific accommodation
                                preferences.
                            </li>
                        </ul>
                    </section>

                    <section id="usage" style={{ padding: "0 !important" }}>
                        <h2>3. How We Use Information</h2>
                        <p>
                            Having accurate information about you permits us to
                            provide you with a smooth, efficient, and customized
                            travel experience. Specifically, we may use
                            information collected about you to:
                        </p>
                        <ul>
                            <li>
                                Process your bookings for tours, vehicle
                                rentals, and hotel accommodations.
                            </li>
                            <li>
                                Generate necessary travel permits (e.g., Char
                                Dham Yatra passes or Inner Line Permits).
                            </li>
                            <li>
                                Send you confirmations, invoices, and
                                travel-related updates via email or WhatsApp.
                            </li>
                            <li>
                                Respond to customer service requests and provide
                                emergency support during your trip.
                            </li>
                            <li>
                                Improve our website performance, marketing
                                efforts, and overall customer experience.
                            </li>
                        </ul>
                    </section>

                    <section id="sharing" style={{ padding: "0 !important" }}>
                        <h2>4. Data Sharing & Disclosure</h2>
                        <p>
                            We do not sell, trade, or rent your personal
                            identification information to others. We may share
                            generic aggregated demographic information not
                            linked to any personal identification information
                            with our business partners. However, we do share
                            specific data with third parties only in the
                            following necessary circumstances:
                        </p>
                        <ul>
                            <li>
                                <strong>Service Providers:</strong> We share
                                booking details with our verified network of
                                homestays, hotels, transport vendors, and
                                adventure guides to fulfill your requested
                                services.
                            </li>
                            <li>
                                <strong>Legal & Regulatory Authorities:</strong>{" "}
                                We may disclose your information to government
                                agencies when legally required for travel
                                permits or in response to lawful requests by
                                public authorities.
                            </li>
                        </ul>
                    </section>

                    <section id="cookies" style={{ padding: "0 !important" }}>
                        <h2>5. Cookies & Tracking</h2>
                        <p>
                            We may use cookies, web beacons, tracking pixels,
                            and other tracking technologies on our website to
                            help customize the site and improve your experience.
                            When you access our website, your personal
                            information is not collected through the use of
                            tracking technology. Most browsers are set to accept
                            cookies by default. You can remove or reject
                            cookies, but be aware that such action could affect
                            the availability and functionality of the website.
                        </p>
                    </section>

                    <section id="security" style={{ padding: "0 !important" }}>
                        <h2>6. Data Security & Your Rights</h2>
                        <p>
                            We use administrative, technical, and physical
                            security measures to help protect your personal
                            information. While we have taken reasonable steps to
                            secure the personal information you provide to us,
                            please be aware that despite our efforts, no
                            security measures are perfect or impenetrable, and
                            no method of data transmission can be guaranteed
                            against any interception or other type of misuse.
                        </p>
                        <p>
                            You have the right to request access to the personal
                            data we hold about you, request corrections to any
                            inaccurate data, or request the deletion of your
                            data (subject to legal obligations requiring us to
                            retain certain transaction records).
                        </p>
                    </section>

                    <section id="contact" style={{ padding: "0 !important" }}>
                        <h2>7. Contact Us</h2>
                        <p>
                            If you have questions or comments about this Privacy
                            Policy, please contact us at:
                        </p>
                        <ul>
                            <li>
                                <strong>Email:</strong> contact@tripdhara.com
                            </li>
                            <li>
                                <strong>Phone:</strong> +91 95364 89063
                            </li>
                            <li>
                                <strong>Address:</strong> Uttarakhand, India
                            </li>
                        </ul>
                    </section>
                    <p className="legal-last-updated">
                        Last Updated: July 2026
                    </p>
                </div>
            </div>
        </main>
    );
}
