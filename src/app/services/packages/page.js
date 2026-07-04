export const metadata = {
    title: "Himalayan Packages & Yatras - Tripdhara",
    description:
        "Book organized Char Dham Yatras, Kedarnath, Badrinath, Gangotri, Yamunotri tours, and guided treks to Vasuki Tal and Triyuginarayan with Tripdhara.",
};

export default function PackagesPage() {
    return (
        <main>
            <section
                className="subpage-hero"
                style={{
                    backgroundImage: 'url("/assets/images/hero_pkg.png")',
                }}
            >
                <div className="hero-overlay"></div>
                <div className="subpage-hero-content">
                    <span className="subpage-hero-subtitle">
                        Sacred & Scenic
                    </span>
                    <h1 className="subpage-hero-title">
                        Tour Packages & Yatras
                    </h1>
                </div>
            </section>

            {/*  Details Section  */}
            <section className="details-section">
                <div className="section-container">
                    <div className="details-grid">
                        {/*  4.1. Char Dham Yatra  */}
                        <div className="detail-block" id="chardham">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    4.1. Complete Pilgrimage
                                </span>
                                <h3>Sacred Char Dham Yatra</h3>
                                <p>
                                    The Char Dham Yatra is one of the most
                                    sacred Hindu pilgrimages, taking you to the
                                    four holy Himalayan shrines: Yamunotri,
                                    Gangotri, Kedarnath, and Badrinath.
                                </p>
                                <p>
                                    Completing this Yatra is believed to wash
                                    away sins and help achieve Moksha. Each
                                    temple represents a unique spiritual
                                    energy—from Shiva&apos;s raw power at
                                    Kedarnath to Vishnu&apos;s peaceful
                                    benevolence at Badrinath.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Package Highlights & Itinerary:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>
                                                10 Days / 9 Nights Route:
                                            </strong>
                                            Includes Haridwar/Rishikesh, Barkot,
                                            Uttarkashi, Sonprayag, Badrinath,
                                            and back.
                                        </li>
                                        <li>
                                            <strong>
                                                Full Logistics Support:
                                            </strong>
                                            Pre-booked clean hotel stays, VIP
                                            temple line passes, and emergency
                                            guides.
                                        </li>
                                        <li>
                                            <strong>Best Time:</strong> May to
                                            June, and September to October.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book Char Dham Yatra
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/chaardhama_yatra.png"
                                    alt="Char Dham Yatra"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  4.2. Kedarnath Yatra  */}
                        <div className="detail-block" id="kedarnath-yatra">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    4.2. Shiva&apos;s Abode
                                </span>
                                <h3>Kedarnath Yatra</h3>
                                <p>
                                    Journey to the seat of Lord Shiva. Located
                                    at an altitude of 3,584 meters near the
                                    Mandakini River, Kedarnath is the most
                                    famous of the Panch Kedar shrines.
                                </p>
                                <p>
                                    The ancient stone temple is an architectural
                                    marvel that stood resilient against the 2013
                                    floods, protected by a massive boulder
                                    (Bheem Shila) that rolled behind it.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Travel Information:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>Trek Details:</strong> The
                                            temple is accessible via a 16km trek
                                            from Sonprayag/Gaurikund.
                                        </li>
                                        <li>
                                            <strong>
                                                Alternative Transport:
                                            </strong>
                                            Helicopter bookings, horse rentals,
                                            and palanquins are available.
                                        </li>
                                        <li>
                                            <strong>Stays:</strong>{" "}
                                            Accommodation provided at base camp
                                            or Sonprayag.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book Kedarnath Yatra
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/kedarnath_yatra.png"
                                    alt="Kedarnath Temple"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  4.3. Badrinath Yatra  */}
                        <div className="detail-block" id="badrinath-yatra">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    4.3. Vishnu&apos;s Sanctuary
                                </span>
                                <h3>Badrinath Yatra</h3>
                                <p>
                                    Visit the holy abode of Lord Vishnu.
                                    Situated along the banks of the Alaknanda
                                    River at an altitude of 3,133 meters,
                                    Badrinath is easily accessible by road,
                                    making it highly comfortable for family
                                    pilgrimages.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Journey Highlights:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>Tapt Kund:</strong> Take a
                                            holy dip in natural thermal springs
                                            beside the temple.
                                        </li>
                                        <li>
                                            <strong>Mana Village:</strong>
                                            Excursions to the last Indian
                                            village before the Indo-China
                                            border, just 3km from Badrinath.
                                        </li>
                                        <li>
                                            <strong>Saraswati Origin:</strong>
                                            Witness the mighty Saraswati river
                                            emerge from the rocks.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book Badrinath Yatra
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/badrinath_yatra.png"
                                    alt="Badrinath Temple"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  4.4. Gangotri Yatra  */}
                        <div className="detail-block" id="gangotri-yatra">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    4.4. Source of Ganga
                                </span>
                                <h3>Gangotri Yatra</h3>
                                <p>
                                    Journey to the source of the holy river
                                    Ganga. Located at 3,100 meters, the white
                                    granite temple stands amidst cedar forests
                                    and snow-capped peaks in the Bhagirathi
                                    valley.
                                </p>
                                <p>
                                    The temple is dedicated to Goddess Ganga,
                                    marking the spot where the river descended
                                    to earth from Lord Shiva&apos;s locks to
                                    wash away the sins of King Bhagirath&apos;s
                                    ancestors.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Route Information:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>Harsil Valley:</strong>{" "}
                                            Drive through the scenic Harsil
                                            valley, famous for apple orchards.
                                        </li>
                                        <li>
                                            <strong>Road Access:</strong> The
                                            route is well-tarred and highly
                                            comfortable for all age groups.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book Gangotri Yatra
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/gangotri_yatra.png"
                                    alt="Gangotri Temple"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  4.5. Yamunotri Yatra  */}
                        <div className="detail-block" id="yamunotri-yatra">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    4.5. The Sun&apos;s Daughter
                                </span>
                                <h3>Yamunotri Yatra</h3>
                                <p>
                                    The first stop of the Chardham pilgrimage.
                                    Tucked away in a narrow gorge of the
                                    Bandarpoonch peaks, Yamunotri is the
                                    birthplace of the Yamuna River.
                                </p>
                                <p>
                                    Dedicated to Goddess Yamuna, daughter of the
                                    Sun God. A holy dip in the Yamuna is
                                    believed to protect pilgrims from untimely
                                    death.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Travel Experience:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>The Trek:</strong> A 6km
                                            walk along a steep, paved path from
                                            Janki Chatti.
                                        </li>
                                        <li>
                                            <strong>Surya Kund:</strong> Cook
                                            rice or potatoes as prasad in
                                            natural hot boiling springs.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book Yamunotri Yatra
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/yamunotri_yatra.png"
                                    alt="Yamunotri Route"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  4.6. Kedarnath Trek  */}
                        <div className="detail-block" id="kedarnath-trek">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    4.6. Pilgrim Trail
                                </span>
                                <h3>Kedarnath Trek Package</h3>
                                <p>
                                    A challenging yet spiritually rewarding
                                    walk. The 16km trail from Gaurikund to
                                    Kedarnath takes you through cascading
                                    waterfalls, mountain streams, and steep
                                    winding stone paths.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Preparation & Details:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>Difficulty Level:</strong>
                                            Moderate to Difficult. The altitude
                                            crosses 3,000 meters.
                                        </li>
                                        <li>
                                            <strong>Trek Preparation:</strong>
                                            Cardiorespiratory exercises are
                                            recommended weeks before.
                                        </li>
                                        <li>
                                            <strong>Halts:</strong> Stays in
                                            Lincholi or Bheembali rest stops.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book Kedarnath Trek
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/kedarnath_trek_package.png"
                                    alt="Kedarnath Trek"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  4.7. Vasuki Tal Trek  */}
                        <div className="detail-block" id="vasukital">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    4.7. Glacial Lakes
                                </span>
                                <h3>Vasuki Tal Trek</h3>
                                <p>
                                    For seasoned adventurers, this trek extends
                                    beyond the Kedarnath temple to a
                                    high-altitude glacial lake at 4,135 meters.
                                </p>
                                <p>
                                    Walk through gravel moraines, Chaturangi
                                    glacier fields, and witness the towering
                                    Chaukhamba peaks reflection in the clear
                                    blue waters where the sacred Brahma Kamal
                                    flower blooms.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Trek Specifications:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>Difficulty:</strong>{" "}
                                            Difficult. A local certified
                                            mountaineering guide is mandatory.
                                        </li>
                                        <li>
                                            <strong>Best Time:</strong>{" "}
                                            September to October for clear skies
                                            and stable glacier trails.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book Vasuki Tal Trek
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/vasuki_tal_trek.png"
                                    alt="Vasuki Tal Lake"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  4.8. Triyuginarayan Trek  */}
                        <div className="detail-block" id="triyuginarayan">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    4.8. Mythological Paths
                                </span>
                                <h3>Triyuginarayan Trek</h3>
                                <p>
                                    Walk through quiet pine forests and Garhwali
                                    villages to the ancient temple where Lord
                                    Shiva and Goddess Parvati were married in
                                    the presence of Lord Brahma.
                                </p>
                                <p>
                                    The temple houses a perpetual fire flame
                                    (Akhand Dhuni) that has been burning since
                                    the marriage in Satya Yuga.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Trek Experience:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>Difficulty:</strong> Easy to
                                            Moderate. An 9km trek starting from
                                            Sonprayag.
                                        </li>
                                        <li>
                                            <strong>Local Culture:</strong>{" "}
                                            Enjoy wood-fired Himalayan meals at
                                            village homestays near the temple.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book Triyuginarayan Trek
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/triyuginarayan_trek.png"
                                    alt="Triyuginarayan Temple"
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
