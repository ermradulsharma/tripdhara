import routes from "@/data/routes.json";

export default function Routes() {
    return (
        <section id="trending-routes" className="routes-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tagline">Popular Paths</span>
                    <h2 className="section-title">
                        Trending Himalayan Journeys
                    </h2>
                    <p className="section-desc">
                        Click any trending route to configure your booking
                        inquiry form below instantly.
                    </p>
                </div>
                <div className="routes-grid">
                    {routes.map((route) => (
                        <div
                            className="route-card"
                            data-service={route.service}
                            data-target={route.target}
                            key={route.id}
                        >
                            <div className="route-badge">{route.badge}</div>
                            <h3>{route.title}</h3>
                            <p>{route.description}</p>
                            <div className="route-action">
                                Quick Book &rarr;
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
