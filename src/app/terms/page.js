"use client";
import React, { useEffect, useState } from "react";

export default function TermsPage() {
    const [activeSection, setActiveSection] = useState("agreement");

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "agreement",
                "payments",
                "cancellations",
                "insurance",
                "itinerary",
                "liability",
                "conduct",
                "jurisdiction",
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
                    <h1 className="subpage-hero-title">Terms & Conditions</h1>
                </div>
            </section>

            <div className="legal-container">
                <aside className="legal-sidebar">
                    <h4>Contents</h4>
                    <ul>
                        <li>
                            <a
                                href="#agreement"
                                className={
                                    activeSection === "agreement"
                                        ? "active"
                                        : ""
                                }
                            >
                                1. Agreement to Terms
                            </a>
                        </li>
                        <li>
                            <a
                                href="#payments"
                                className={
                                    activeSection === "payments" ? "active" : ""
                                }
                            >
                                2. Booking & Payments
                            </a>
                        </li>
                        <li>
                            <a
                                href="#cancellations"
                                className={
                                    activeSection === "cancellations"
                                        ? "active"
                                        : ""
                                }
                            >
                                3. Cancellations & Refunds
                            </a>
                        </li>
                        <li>
                            <a
                                href="#insurance"
                                className={
                                    activeSection === "insurance"
                                        ? "active"
                                        : ""
                                }
                            >
                                4. Travel Insurance
                            </a>
                        </li>
                        <li>
                            <a
                                href="#itinerary"
                                className={
                                    activeSection === "itinerary"
                                        ? "active"
                                        : ""
                                }
                            >
                                5. Itinerary Modifications
                            </a>
                        </li>
                        <li>
                            <a
                                href="#liability"
                                className={
                                    activeSection === "liability"
                                        ? "active"
                                        : ""
                                }
                            >
                                6. Liability & Risks
                            </a>
                        </li>
                        <li>
                            <a
                                href="#conduct"
                                className={
                                    activeSection === "conduct" ? "active" : ""
                                }
                            >
                                7. Code of Conduct
                            </a>
                        </li>
                        <li>
                            <a
                                href="#jurisdiction"
                                className={
                                    activeSection === "jurisdiction"
                                        ? "active"
                                        : ""
                                }
                            >
                                8. Jurisdiction
                            </a>
                        </li>
                    </ul>
                </aside>

                <div className="legal-content">
                    <section id="agreement" style={{ padding: "0 !important" }}>
                        <h2>1. Agreement to Terms</h2>
                        <p>
                            By booking a tour, vehicle, or accommodation through{" "}
                            <strong>Tripdhara</strong>, you agree to the
                            following Terms & Conditions. These terms govern the
                            relationship between you (the client) and Tripdhara
                            (the service provider). Please read these carefully
                            before making any booking or payment.
                        </p>
                    </section>

                    <section id="payments" style={{ padding: "0 !important" }}>
                        <h2>2. Booking & Payments</h2>
                        <p>
                            To secure a booking for any tour, trek, or vehicle
                            rental, an initial advance deposit is mandatory. The
                            remaining balance must be paid before the
                            commencement of the trip.
                        </p>
                        <ul>
                            <li>
                                <strong>Advance Deposit:</strong> A minimum of
                                30% of the total tour cost is required to
                                confirm the booking.
                            </li>
                            <li>
                                <strong>Full Payment:</strong> The remaining 70%
                                must be paid at least 7 days before the travel
                                date, or at the time of arrival (if mutually
                                agreed upon).
                            </li>
                            <li>
                                <strong>Pricing:</strong> All quotes provided
                                are subject to change without prior notice due
                                to fluctuations in fuel prices, taxes, or hotel
                                tariffs until the advance deposit is paid.
                            </li>
                        </ul>
                    </section>

                    <section
                        id="cancellations"
                        style={{ padding: "0 !important" }}
                    >
                        <h2>3. Cancellations & Refunds</h2>
                        <p>
                            We understand that plans can change. If you must
                            cancel your booking, the following cancellation
                            policy will apply. All cancellations must be
                            communicated to us in writing via email.
                        </p>
                        <ul>
                            <li>
                                <strong>
                                    More than 30 days before departure:
                                </strong>{" "}
                                10% cancellation fee of the total tour cost.
                            </li>
                            <li>
                                <strong>15 to 30 days before departure:</strong>{" "}
                                25% cancellation fee of the total tour cost.
                            </li>
                            <li>
                                <strong>7 to 15 days before departure:</strong>{" "}
                                50% cancellation fee of the total tour cost.
                            </li>
                            <li>
                                <strong>Less than 7 days or No-show:</strong>{" "}
                                100% cancellation fee (No refund).
                            </li>
                        </ul>
                        <p>
                            Refunds (if applicable) will be processed within
                            7-10 business days to the original mode of payment.
                        </p>
                    </section>

                    <section id="insurance" style={{ padding: "0 !important" }}>
                        <h2>4. Travel Insurance & Health</h2>
                        <p>
                            <strong>
                                Tripdhara does not provide travel insurance.
                            </strong>{" "}
                            We strongly recommend that all clients purchase
                            comprehensive travel insurance covering trip
                            cancellation, medical emergencies, emergency
                            evacuation, and loss of baggage.
                        </p>
                        <p>
                            For high-altitude treks and adventure activities,
                            clients must declare any pre-existing medical
                            conditions (like asthma, heart conditions, etc.).
                            Tripdhara reserves the right to refuse participation
                            if a client is deemed medically unfit for rigorous
                            activities.
                        </p>
                    </section>

                    <section id="itinerary" style={{ padding: "0 !important" }}>
                        <h2>5. Itinerary Modifications</h2>
                        <p>
                            Mountain travel is highly unpredictable. We reserve
                            the right to alter, modify, or cancel itineraries
                            due to uncontrollable factors such as:
                        </p>
                        <ul>
                            <li>
                                Severe weather conditions, heavy snowfall, or
                                landslides.
                            </li>
                            <li>
                                Roadblocks or political unrest in the region.
                            </li>
                            <li>Health and safety concerns of the group.</li>
                        </ul>
                        <p>
                            In such events, we will attempt to provide
                            alternative arrangements of similar standard. Any
                            additional costs incurred due to these forced
                            changes must be borne by the client.
                        </p>
                    </section>

                    <section id="liability" style={{ padding: "0 !important" }}>
                        <h2>6. Liability & Assumption of Risk</h2>
                        <p>
                            Traveling in mountainous terrain and participating
                            in adventure sports (such as river rafting,
                            paragliding, trekking, and biking) carry inherent
                            risks of personal injury or property damage.
                        </p>
                        <p>
                            By booking with Tripdhara, you acknowledge these
                            risks and agree that Tripdhara, its employees, and
                            its third-party vendors shall not be held
                            responsible or liable for any injuries, accidents,
                            delays, or damages caused during the trip.
                        </p>
                    </section>

                    <section id="conduct" style={{ padding: "0 !important" }}>
                        <h2>7. Code of Conduct</h2>
                        <p>
                            We strive to maintain a respectful and eco-friendly
                            environment. Clients are expected to:
                        </p>
                        <ul>
                            <li>
                                Respect local cultures, traditions, and the
                                sentiments of the local communities.
                            </li>
                            <li>
                                Avoid littering and use designated disposal
                                bins. Plastic usage should be minimized.
                            </li>
                            <li>
                                Follow the instructions of the tour guides,
                                drivers, and trek leaders for your own safety.
                            </li>
                        </ul>
                        <p>
                            Tripdhara reserves the right to terminate a client&apos;s
                            trip without refund if their behavior is deemed
                            illegal, disruptive, or dangerous to themselves or
                            others.
                        </p>
                    </section>

                    <section
                        id="jurisdiction"
                        style={{ padding: "0 !important" }}
                    >
                        <h2>8. Jurisdiction</h2>
                        <p>
                            These terms shall be governed by and constructed in
                            accordance with the laws of India. Any disputes
                            arising in relation to these Terms & Conditions or
                            our services will be subject to the exclusive
                            jurisdiction of the courts located in Uttarakhand,
                            India.
                        </p>
                    </section>
                    <p className="legal-last-updated">
                        Last Updated: July 2026
                    </p>
                </div>
            </div>
        </main>
    );
}
