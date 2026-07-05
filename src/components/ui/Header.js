"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Scroll Spy Logic
            const sections = [
                "services",
                "why-us",
                "about",
                "booking",
                "testimonials",
                "contact",
            ];
            let current = "";
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 250) {
                    current = section;
                }
            }
            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <nav
                className={`navbar ${mobileMenuOpen ? "active" : ""}`}
                id="navbar"
            >
                <div className="logo">
                    <Link href="/" className="logo-link">
                        <span className="logo-accent">TRIP</span>धारा
                    </Link>
                </div>
                <ul className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
                    <li>
                        <Link
                            href="/#services"
                            className={`nav-link ${activeSection === "services" ? "active" : ""}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#why-us"
                            className={`nav-link ${activeSection === "why-us" ? "active" : ""}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Why Choose Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#about"
                            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#booking"
                            className={`nav-link ${activeSection === "booking" ? "active" : ""}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Book Now
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#testimonials"
                            className={`nav-link ${activeSection === "testimonials" ? "active" : ""}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#contact"
                            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="nav-cta">
                    <a href="tel:+919536489063" className="cta-btn-nav">
                        <svg
                            className="phone-icon"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                        >
                            <path
                                fill="currentColor"
                                d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                            />
                        </svg>
                        <span className="cta-text-nav">+91 95364 89063</span>
                    </a>
                    <button
                        className={`mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
                        id="mobile-toggle"
                        aria-label="Toggle Menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}
