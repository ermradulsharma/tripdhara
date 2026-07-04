import whyUs from "@/data/whyUs.json";

export default function WhyUs() {
    return (
        <section id="why-us" className="why-us-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tagline">Why Tripdhara</span>
                    <h2 className="section-title">
                        Redefining Himalayan Travel
                    </h2>
                    <p className="section-desc">
                        We combine local expertise with modern standards to
                        create worry-free travel experiences.
                    </p>
                </div>

                <div className="why-us-grid">
                    {whyUs.map((item) => (
                        <div className="why-card animate-scroll" key={item.id}>
                            <div className="why-icon-box">
                                <svg viewBox="0 0 24 24" width="32" height="32">
                                    <path
                                        fill="currentColor"
                                        d={item.iconPath}
                                    />
                                </svg>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
