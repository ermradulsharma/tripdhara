export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="section-container">
                <div className="contact-grid">
                    <div className="contact-info-block animate-scroll">
                        <span className="section-tagline">Get In Touch</span>
                        <h2 className="section-title">
                            Ready to Plan Your Next Himalayan Escape?
                        </h2>
                        <p>
                            Have custom travel requirements or want to request
                            custom itineraries? Speak to our local mountain
                            travel experts directly. We are active 24/7 to help
                            you coordinate your bookings.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <div className="detail-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3>Call Helpline</h3>
                                    <a
                                        href="tel:+919536489063"
                                        className="contact-link"
                                    >
                                        +91 95364 89063
                                    </a>
                                </div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.47 16.86L2.05 22L7.3 20.68C8.75 21.47 10.37 21.89 12.04 21.89C17.5 21.89 21.95 17.44 21.95 11.97C21.95 9.32 20.92 6.83 19.05 4.95C17.18 3.07 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.64 20.28 9.7 20.28 11.9C20.28 16.44 16.6 20.13 12.05 20.13C10.6 20.13 9.19 19.75 7.97 19.03L7.68 18.86L4.54 19.66L5.38 16.63L5.18 16.32C4.4 15.09 3.97 13.67 3.97 11.9C3.97 7.36 7.64 3.67 12.05 3.67M8.3 8.08C8.1 8.08 7.77 8.16 7.5 8.45C7.23 8.74 6.47 9.46 6.47 10.92C6.47 12.38 7.53 13.8 7.68 14C7.83 14.2 9.77 17.18 12.75 18.47C13.46 18.77 14 18.96 14.43 19.1C15.15 19.33 15.8 19.3 16.32 19.22C16.9 19.13 18.12 18.47 18.37 17.77C18.62 17.07 18.62 16.47 18.54 16.35C18.47 16.23 18.27 16.15 17.97 16C17.68 15.86 16.25 15.15 16 15.05C15.73 14.95 15.53 14.9 15.33 15.2C15.13 15.5 14.56 16.18 14.38 16.38C14.2 16.58 14.03 16.6 13.73 16.45C13.43 16.3 12.48 15.99 11.36 14.99C10.49 14.21 9.9 13.25 9.73 12.95C9.56 12.65 9.71 12.49 9.86 12.34C10 12.2 10.18 11.97 10.33 11.8C10.48 11.63 10.53 11.5 10.63 11.3C10.73 11.1 10.68 10.93 10.6 10.78C10.53 10.63 9.87 9.02 9.59 8.35C9.32 7.7 9.04 7.78 8.83 7.77C8.63 7.76 8.4 7.76 8.3 8.08Z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3>WhatsApp Inquiry</h3>
                                    <a
                                        href="https://wa.me/919536489063"
                                        className="contact-link"
                                    >
                                        +91 95364 89063
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Visual Contact CTA Card  */}
                    <div className="contact-actions-box animate-scroll">
                        {/*  Live Weather Status Widget  */}
                        <div className="weather-widget">
                            <h4>Himalayan Live Weather</h4>
                            <div className="weather-grid">
                                <div
                                    className="weather-item"
                                    id="weather-rishikesh"
                                >
                                    <span className="loc-name">Rishikesh</span>
                                    <span className="temp-val">--°C</span>
                                    <span className="cond-text">
                                        Fetching...
                                    </span>
                                </div>
                                <div
                                    className="weather-item"
                                    id="weather-mukteshwar"
                                >
                                    <span className="loc-name">Mukteshwar</span>
                                    <span className="temp-val">--°C</span>
                                    <span className="cond-text">
                                        Fetching...
                                    </span>
                                </div>
                                <div
                                    className="weather-item"
                                    id="weather-manali"
                                >
                                    <span className="loc-name">Manali</span>
                                    <span className="temp-val">--°C</span>
                                    <span className="cond-text">
                                        Fetching...
                                    </span>
                                </div>
                                <div className="weather-item" id="weather-auli">
                                    <span className="loc-name">Auli</span>
                                    <span className="temp-val">--°C</span>
                                    <span className="cond-text">
                                        Fetching...
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="glass-cta-card"
                            style={{ marginTop: "24px" }}
                        >
                            <h3>Need Quick Assistance?</h3>
                            <p>
                                Click below to call us immediately or text us on
                                WhatsApp for instant replies from our mountain
                                itinerary planner.
                            </p>
                            <div className="cta-actions">
                                <a
                                    href="tel:+919536489063"
                                    className="btn btn-primary btn-cta-block"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                                        />
                                    </svg>
                                    Call Helpline
                                </a>
                                <a
                                    href="https://wa.me/919536489063"
                                    className="btn btn-whatsapp btn-cta-block"
                                    target="_blank"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.47 16.86L2.05 22L7.3 20.68C8.75 21.47 10.37 21.89 12.04 21.89C17.5 21.89 21.95 17.44 21.95 11.97C21.95 9.32 20.92 6.83 19.05 4.95C17.18 3.07 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.64 20.28 9.7 20.28 11.9C20.28 16.44 16.6 20.13 12.05 20.13C10.6 20.13 9.19 19.75 7.97 19.03L7.68 18.86L4.54 19.66L5.38 16.63L5.18 16.32C4.4 15.09 3.97 13.67 3.97 11.9C3.97 7.36 7.64 3.67 12.05 3.67M8.3 8.08C8.1 8.08 7.77 8.16 7.5 8.45C7.23 8.74 6.47 9.46 6.47 10.92C6.47 12.38 7.53 13.8 7.68 14C7.83 14.2 9.77 17.18 12.75 18.47C13.46 18.77 14 18.96 14.43 19.1C15.15 19.33 15.8 19.3 16.32 19.22C16.9 19.13 18.12 18.47 18.37 17.77C18.62 17.07 18.62 16.47 18.54 16.35C18.47 16.23 18.27 16.15 17.97 16C17.68 15.86 16.25 15.15 16 15.05C15.73 14.95 15.53 14.9 15.33 15.2C15.13 15.5 14.56 16.18 14.38 16.38C14.2 16.58 14.03 16.6 13.73 16.45C13.43 16.3 12.48 15.99 11.36 14.99C10.49 14.21 9.9 13.25 9.73 12.95C9.56 12.65 9.71 12.49 9.86 12.34C10 12.2 10.18 11.97 10.33 11.8C10.48 11.63 10.53 11.5 10.63 11.3C10.73 11.1 10.68 10.93 10.6 10.78C10.53 10.63 9.87 9.02 9.59 8.35C9.32 7.7 9.04 7.78 8.83 7.77C8.63 7.76 8.4 7.76 8.3 8.08Z"
                                        />
                                    </svg>
                                    WhatsApp Chat
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
