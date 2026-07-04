export default function Intro() {
    return (
        <section className="intro-section" style={{ padding: "80px 0 20px 0" }}>
            <div className="section-container">
                <div
                    className="section-header"
                    style={{
                        maxWidth: "800px",
                        margin: "0 auto",
                        textAlign: "center",
                    }}
                >
                    <span className="section-tagline">
                        The Mountain Reality
                    </span>
                    <h2
                        className="section-title"
                        style={{ marginBottom: "20px" }}
                    >
                        Built by Locals, Not Algorithms
                    </h2>
                    <p
                        className="section-desc"
                        style={{
                            fontSize: "1.1rem",
                            lineHeight: "1.8",
                            color: "var(--text-secondary)",
                        }}
                    >
                        Most travel websites show you glossy pictures and
                        promise &quot;seamless experiences.&quot; But if
                        you&apos;ve traveled in the Himalayas, you know the
                        reality: a landslide can change your route in ten
                        minutes, a vehicle needs more than just a standard
                        driver to handle steep hairpin bends, and a &quot;luxury
                        resort&quot; online can turn out to be a drafty room
                        with cold water.
                    </p>
                    <p
                        className="section-desc"
                        style={{
                            fontSize: "1.1rem",
                            lineHeight: "1.8",
                            color: "var(--text-secondary)",
                            marginTop: "20px",
                        }}
                    >
                        We started <strong>Tripdhara</strong> because we live
                        here. We know these roads, we know the weather patterns,
                        and we know which local hosts actually keep their rooms
                        warm and clean. We don&apos;t run a massive, automated
                        booking engine. Instead, we are a small team of local
                        travel coordinators, veteran drivers, and property
                        verifiers who make sure what you book is exactly what
                        you get when you arrive.
                    </p>
                </div>
            </div>
        </section>
    );
}
