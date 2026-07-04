export const metadata = {
    title: "Travel & Transport Services - Tripdhara",
    description:
        "Rent self-drive cars, adventure bikes, or book premium SUVs with veteran mountain chauffeurs in Uttarakhand and Rishikesh.",
};

export default function TravelPage() {
    return (
        <main>
            <section
                className="subpage-hero"
                style={{
                    backgroundImage: 'url("/assets/images/hero_trv.png")',
                }}
            >
                <div className="hero-overlay"></div>
                <div className="subpage-hero-content">
                    <span className="subpage-hero-subtitle">
                        Himalayan Transit
                    </span>
                    <h1 className="subpage-hero-title">
                        Travel & Transport Services
                    </h1>
                </div>
            </section>

            {/*  Details Section  */}
            <section className="details-section">
                <div className="section-container">
                    <div className="details-grid">
                        {/*  1. Car Rental  */}
                        <div className="detail-block" id="car-rental">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    3.1. Self-Drive Cars
                                </span>
                                <h3>Self-Drive Car Rentals</h3>
                                <p>
                                    Travel at your own pace with our reliable
                                    self-drive car rentals. Perfect for families
                                    or groups who want privacy and the freedom
                                    to stop whenever they see a scenic
                                    viewpoint.
                                </p>
                                <p>
                                    All vehicles undergo strict servicing, deep
                                    cleaning, and tire/brake safety checks
                                    before handover. Enjoy transparent pricing
                                    with zero hidden surcharges.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Vehicle Options & Benefits:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>
                                                SUVs (Thar, Scorpio, Brezza):
                                            </strong>
                                            High ground clearance and rugged
                                            suspension built for mountain
                                            gravel.
                                        </li>
                                        <li>
                                            <strong>
                                                Unlimited Kilometers:
                                            </strong>
                                            Drive without limitations or
                                            worrying about per-kilometer costs.
                                        </li>
                                        <li>
                                            <strong>Simple Booking:</strong>{" "}
                                            Present a valid LMV driving license
                                            and Government ID at pick-up.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Rent a Self-Drive Car
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/tripdhara_car.png"
                                    alt="Self-Drive Car"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  2. Bike Rental  */}
                        <div className="detail-block" id="bike-rental">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    3.2. Two-Wheeler Rentals
                                </span>
                                <h3>Adventure Motorcycles</h3>
                                <p>
                                    For the solo rider and adventure seeker,
                                    renting a motorcycle is the ultimate way to
                                    explore the winding turns of the Himalayas.
                                </p>
                                <p>
                                    Pick up your bike along with a sanitized
                                    helmet from our hub in Rishikesh. Every bike
                                    undergoes a 12-point pre-rental safety
                                    inspection.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Available Fleet:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>
                                                Royal Enfield Himalayan 450:
                                            </strong>
                                            Built for gravel, rock crawls, and
                                            altitude.
                                        </li>
                                        <li>
                                            <strong>
                                                Royal Enfield Classic 350:
                                            </strong>
                                            The classic choice for comfortable
                                            mountain cruising.
                                        </li>
                                        <li>
                                            <strong>Hero XPulse 200:</strong>
                                            Lightweight, extremely agile on
                                            steep dirt curves.
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    <strong>Safety Guidelines:</strong> Always
                                    wear a helmet, Keep left on blind mountain
                                    curves, avoid riding after sunset, and check
                                    engine oil levels daily.
                                </p>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Rent an Adventure Bike
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/tripdhara_bike.png"
                                    alt="Adventure Bike Rental"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  3. Chauffeur Driven Car  */}
                        <div className="detail-block" id="chauffeur">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    3.3. Mountain Chauffeurs
                                </span>
                                <h3>Premium Chauffeur-Driven Cars</h3>
                                <p>
                                    Mountain driving is highly demanding. Rest
                                    your hands and enjoy the valley views by
                                    booking a premium SUV driven by a
                                    professional local chauffeur who knows the
                                    terrain.
                                </p>
                                <p>
                                    Our drivers are local residents who have
                                    spent years navigating Uttarakhand. They
                                    understand engine braking on downhills, slow
                                    curve navigation, and local weather signals.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Why Book Chauffeur Cars:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>
                                                Stress-Free Transit:
                                            </strong>
                                            Avoid steep climb navigation or
                                            single-lane parking hassles.
                                        </li>
                                        <li>
                                            <strong>Local Chauffeurs:</strong>{" "}
                                            Our drivers double as guides,
                                            pointing out safe eating halts and
                                            scenic spots.
                                        </li>
                                        <li>
                                            <strong>Ideal Use Cases:</strong>{" "}
                                            Family pilgrimages, group tours, or
                                            winter routes.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book Chauffeur-Driven SUV
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/tripdhara_chauffer_car.png"
                                    alt="Chauffeur Driven SUV"
                                    className="detail-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Footer  */}
        </main>
    );
}
