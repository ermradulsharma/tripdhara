import destinations from "./database/destinations.json";

export default function Destinations() {
    return (
        <section id="destinations" className="gallery-section">
            <div className="section-container">
                <div className="section-header animate-scroll">
                    <span className="section-tagline">Himalayan Gems</span>
                    <h2 className="section-title">
                        Explore Top Stays &<span className="typer">Routes</span>
                    </h2>
                    <p className="section-desc">
                        Handpicked visual glimpses of mountain terrains and
                        luxury resorts waiting for your arrival.
                    </p>
                </div>
                <div className="gallery-grid">
                    {destinations.map((dest) => (
                        <div
                            className="gallery-card animate-scroll"
                            key={dest.id}
                        >
                            <img
                                src={dest.image}
                                alt={dest.alt}
                                className="gallery-img"
                                loading="lazy"
                                decoding="async"
                                width="400"
                                height="280"
                            />
                            <div className="gallery-overlay">
                                <h3>{dest.title}</h3>
                                <span>{dest.subtitle}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
