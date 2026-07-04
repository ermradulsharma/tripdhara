export default function PageHero({ bgImage, subtitle, title }) {
    return (
        <section
            className="subpage-hero"
            style={{
                backgroundImage: `url("${bgImage}")`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="subpage-hero-content">
                <span className="subpage-hero-subtitle">{subtitle}</span>
                <h1 className="subpage-hero-title">{title}</h1>
            </div>
        </section>
    );
}
