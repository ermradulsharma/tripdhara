export const metadata = {
    title: "Mountain Accommodations - Tripdhara",
    description:
        "Book verified local homestays, hotels, and riverside camping in Uttarakhand and Himachal Pradesh with Tripdhara.",
};

export default function AccommodationPage() {
    return (
        <main>
            <section
                className="subpage-hero"
                style={{
                    backgroundImage: 'url("/assets/images/hero_acc.png")',
                }}
            >
                <div className="hero-overlay"></div>
                <div className="subpage-hero-content">
                    <span className="subpage-hero-subtitle">
                        Comfort & Safety
                    </span>
                    <h1 className="subpage-hero-title">
                        Mountain Accommodations
                    </h1>
                </div>
            </section>

            {/*  Details Section  */}
            <section className="details-section">
                <div className="section-container">
                    <div className="details-grid">
                        {/*  1. Homestay  */}
                        <div className="detail-block" id="homestay">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    1.1. Authentic Stays
                                </span>
                                <h3>Traditional Himalayan Homestays</h3>
                                <p>
                                    A homestay is more than just a place to
                                    sleep—it’s an invitation into the local
                                    Himalayan way of life. Located in quiet
                                    mountain villages, these are real family-run
                                    homes where you can experience genuine
                                    Kumaoni and Garhwali hospitality.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Benefits of Staying in a Homestay:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>
                                                Authentic Local Meals:
                                            </strong>
                                            Taste fresh, organic meals cooked on
                                            wood-fired stoves using local grains
                                            like madua and fresh mountain herbs.
                                        </li>
                                        <li>
                                            <strong>
                                                Real Local Guidance:
                                            </strong>
                                            Your hosts know the quiet forest
                                            walks, the best spots to catch the
                                            sunrise, and the local legends that
                                            aren&apos;t in any travel guide.
                                        </li>
                                        <li>
                                            <strong>Economic Impact:</strong>{" "}
                                            The money you spend goes directly to
                                            the family hosting you, helping
                                            sustain remote mountain communities.
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    <strong>Who It Is Best For:</strong> Perfect
                                    for travelers seeking peace over luxury,
                                    couples looking for a quiet retreat, and
                                    families who want their children to
                                    experience traditional village life.
                                </p>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book a Homestay Experience
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/tripdhara_homestay.png"
                                    alt="Traditional Homestay"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  2. Hotel  */}
                        <div className="detail-block" id="hotel">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    1.2. Modern Comforts
                                </span>
                                <h3>Independent Valley-View Hotels</h3>
                                <p>
                                    For travelers who prefer consistency, room
                                    service, and modern comforts after a long
                                    day of exploring, we partner with
                                    independent boutique hotels across
                                    Uttarakhand.
                                </p>
                                <p>
                                    We inspect each property to guarantee hot
                                    water running 24/7, clean linen, in-house
                                    kitchens serving fresh food, Wi-Fi
                                    connectivity, and secure parking.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Types of Hotels Available:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>
                                                Heritage Boutique Properties:
                                            </strong>
                                            Restored estates with colonial
                                            character and valley views.
                                        </li>
                                        <li>
                                            <strong>
                                                Premium Valley-View Hotels:
                                            </strong>
                                            Modern structures located near major
                                            hubs like Mussoorie, Nainital, and
                                            Rishikesh.
                                        </li>
                                        <li>
                                            <strong>
                                                Pilgrimage-Friendly Transit
                                                Hotels:
                                            </strong>
                                            Clean, basic properties near transit
                                            stops along the Yatra routes.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book a Hotel Stay
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/tripdhara_hotel.png"
                                    alt="Boutique Hotel"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  3. Camping  */}
                        <div className="detail-block" id="camping">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    1.3. Wilderness Camps
                                </span>
                                <h3>Riverside & Alpine Camping</h3>
                                <p>
                                    Sleep under a blanket of stars with the
                                    sound of the Ganga or the wind through the
                                    pines. We organize verified camping
                                    experiences in designated eco-zones in
                                    Rishikesh, Chopta, and alpine meadows.
                                </p>
                                <p>
                                    Wake up to views of snow-capped peaks, enjoy
                                    evening campfires, and spend your days
                                    trekking or river rafting. We use
                                    high-quality, double-layered waterproof
                                    tents that shield you from mountain winds
                                    and cold nights.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Safety & Facilities:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>
                                                Hygienic Sanitation:
                                            </strong>
                                            Permanent, clean running-water
                                            toilets at all camp sites.
                                        </li>
                                        <li>
                                            <strong>Raised Beddings:</strong>{" "}
                                            Raised platforms inside tents to
                                            keep you dry and off the cold
                                            ground.
                                        </li>
                                        <li>
                                            <strong>Local Guides:</strong> Camps
                                            managed 24/7 by experienced outdoor
                                            guides with power backups and
                                            first-aid kits.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Plan a Camping Trip
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/tripdhara_camping.png"
                                    alt="Riverside Camping"
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
