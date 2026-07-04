export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title animate-up">
                    Winding roads, cold mountain air, and a journey you
                    don&apos;t have to stress about.
                </h1>
                <p className="hero-subtitle animate-up delay-1">
                    Explore the Himalayas on a rugged adventure bike, relax in a
                    luxury SUV with a veteran local driver, or settle into a
                    handpicked homestay. We handle the logistics so you can
                    focus on the mountains.
                </p>
                <div className="hero-actions animate-up delay-2">
                    <a href="#booking" className="btn btn-primary">
                        Plan Your Trip
                    </a>
                    <a href="#services" className="btn btn-secondary">
                        See What We Do
                    </a>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll to Explore</span>
            </div>
        </section>
    );
}
