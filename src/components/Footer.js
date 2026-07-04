import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <Link href="/" className="footer-logo"><span className="logo-accent">Trip</span>dhara</Link>
                    <p className="footer-about">Experience the raw beauty of the Himalayas with our curated adventures, comfortable stays, and trusted transport services.</p>
                    <div className="footer-socials">
                        <a href="#" className="footer-social-link" aria-label="Facebook" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.53-4H14V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                        <a href="#" className="footer-social-link" aria-label="Instagram" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#" className="footer-social-link" aria-label="Twitter" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                        </a>
                        <a href="#" className="footer-social-link" aria-label="YouTube" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.01 29.01 0 0 0 1 11.75a29.01 29.01 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29.01 29.01 0 0 0 .46-5.33 29.01 29.01 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <h5>Explore</h5>
                    <ul className="footer-links">
                        <li><Link href="services/accommodation/">Accommodation</Link></li>
                        <li><Link href="services/activities/">Activities</Link></li>
                        <li><Link href="services/travel/">Travel Services</Link></li>
                        <li><Link href="services/packages/">Packages</Link></li>
                    </ul>
                </div>

                <div className="footer-links-group">
                    <h5>Contact</h5>
                    <ul className="footer-links">
                        <li><span className="footer-icon">Phone: </span>+91 95364 89063</li>
                        <li><span className="footer-icon">Location: </span>Uttarakhand, India</li>
                        <li><span className="footer-icon">E-Mail: </span>contact@tripdhara.com</li>
                    </ul>
                </div>

                <div className="footer-links-group">
                    <h5>Legal</h5>
                    <ul className="footer-links">
                        <li><Link href="privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="terms">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-divider"></div>
                <div className="footer-bottom-flex">
                    <p className="footer-copyright">&copy; 2026 Tripdhara. All rights reserved.</p>
                    <p className="footer-branding">Made with ♥ in Uttarakhand</p>
                </div>
            </div>
        </footer>
    );
}
