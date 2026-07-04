export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tagline">About Us</span>
                    <h2 className="section-title">The Tripdhara Story</h2>
                    <p className="section-desc">
                        How a group of local Himalayan guides, veteran drivers,
                        and property verifiers came together to build a
                        transparent travel network.
                    </p>
                </div>

                <div className="about-grid animate-scroll">
                    <div className="about-story-block">
                        <h3>From Local Guides to Tripdhara</h3>
                        <p>
                            {" "}
                            Tripdhara wasn’t born in a corporate office. It
                            started in a small roadside tea stall near
                            Rishikesh. For years, we worked as individual
                            guides, drivers, and trek coordinators. We saw
                            travelers arriving with booking confirmations from
                            major websites only to find that the hotel was
                            overbooked, or the rental car they received had bald
                            tires that couldn&apos;t handle the climb to Chopta.
                        </p>
                        <p style={{ marginTop: "15px" }}>
                            We realized that the travel industry was trying to
                            manage mountain trips using algorithms and call
                            centers located a thousand miles away. But the
                            mountains don&apos;t work on algorithms. They
                            require local eyes, ears, and hands.
                        </p>
                        <p style={{ marginTop: "15px" }}>
                            Drivers who owned their vehicles, guides who knew
                            the hidden trails, and locals who knew which
                            homestay owners treated guests like family joined
                            together. We named ourselves
                            <strong>Tripdhara</strong>—representing the flow of
                            journeys through the hills. Today, we remain small
                            on purpose, ensuring that every traveler who
                            bookings with us gets our personal attention.
                        </p>
                    </div>

                    <div className="about-values-block">
                        <h3>Our Core Values</h3>
                        <ul className="about-values-list">
                            <li>
                                <strong>Safety Over Schedules:</strong> The
                                mountains can be unpredictable. If weather
                                conditions or road blocks make a route unsafe,
                                we tell you honestly and help you pivot. We will
                                never prioritize keeping an itinerary over your
                                safety.
                            </li>
                            <li>
                                <strong>Supporting Local Economies:</strong>
                                We partner directly with family-run homestays,
                                local guides, and independent drivers. This
                                ensures that the money you spend on your
                                vacation goes directly into the hands of the
                                families who call these mountains home.
                            </li>
                            <li>
                                <strong>No Hidden Fees:</strong> We don&apos;t
                                believe in surprise service taxes or hidden
                                vehicle maintenance fees. The price we quote on
                                WhatsApp is the final price you pay.
                            </li>
                        </ul>
                    </div>
                </div>

                {/*  Team Sub-section  */}
                <div className="about-team-wrapper animate-scroll">
                    <h3 className="team-section-title">Our Mountain Crew</h3>
                    <div className="team-grid">
                        <div className="team-member-card">
                            <h4>Devendra</h4>
                            <span>Lead Route Coordinator</span>
                            <p>
                                Devendra maps out the itineraries. He spends his
                                weeks talking to local checkpoints, checking
                                weather updates, and ensuring that our routes
                                are open and safe.
                            </p>
                        </div>
                        <div className="team-member-card">
                            <h4>Rajesh</h4>
                            <span>Lead Mountain Chauffeur</span>
                            <p>
                                With over 15 years of driving experience across
                                the high passes of Uttarakhand, Rajesh leads our
                                driving team and ensures our fleet is maintained
                                to mountain safety standards.
                            </p>
                        </div>
                        <div className="team-member-card">
                            <h4>Meera</h4>
                            <span>Homestay & Hospitality Lead</span>
                            <p>
                                Meera travels from village to village,
                                personally inspecting homestays. She checks
                                everything from toilet cleanliness to kitchen
                                hygiene before a property is added.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
