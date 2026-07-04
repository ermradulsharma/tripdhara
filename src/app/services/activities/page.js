export const metadata = {
    title: "Adventure Activities - Tripdhara",
    description:
        "Book adventure activities in Rishikesh and Uttarakhand including river rafting, bungee jumping, paragliding, and guided trekking packages.",
};

export default function ActivitiesPage() {
    return (
        <main>
            <section
                className="subpage-hero"
                style={{
                    backgroundImage: 'url("/assets/images/hero_act.png")',
                }}
            >
                <div className="hero-overlay"></div>
                <div className="subpage-hero-content">
                    <span className="subpage-hero-subtitle">
                        High Adrenaline
                    </span>
                    <h1 className="subpage-hero-title">
                        Himalayan Adventure Activities
                    </h1>
                </div>
            </section>

            {/*  Details Section  */}
            <section className="details-section">
                <div className="section-container">
                    <div className="details-grid">
                        {/*  1. River Rafting  */}
                        <div className="detail-block" id="rafting">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    2.1. White Water Rapids
                                </span>
                                <h3>Ganga River Rafting in Rishikesh</h3>
                                <p>
                                    Rishikesh is home to some of the finest
                                    white-water rapids in the world. Navigate
                                    the emerald waters of the Ganga as it cuts
                                    through the Shivalik hills, led by
                                    professional river captains.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Experience Highlights:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>
                                                Rapids for Everyone:
                                            </strong>
                                            From beginner-friendly Grade II
                                            rapids (like Club House and Double
                                            Trouble) to challenging Grade III+
                                            rapids (like Roller Coaster and Golf
                                            Course).
                                        </li>
                                        <li>
                                            <strong>Body Surfing:</strong>
                                            Experience the thrill of floating in
                                            the calm stretches of the river
                                            under the supervision of your guide.
                                        </li>
                                        <li>
                                            <strong>Cliff Jumping:</strong> Leap
                                            off ledges into the deep river pool
                                            at designated points along the
                                            rafting route.
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    <strong>Safety & Regulations:</strong> Every
                                    raft is guided by a certified river captain
                                    and accompanied by a safety kayaker.
                                    High-buoyancy life jackets, helmets, and a
                                    detailed safety briefing are mandatory.
                                </p>
                                <p>
                                    <strong>Best Time:</strong> Late September
                                    to mid-June. Rafting is closed during
                                    monsoons (July to mid-Sept).
                                </p>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book Rafting Slot
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/tripdhara_rafting.png"
                                    alt="River Rafting Rishikesh"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  2. Trekking  */}
                        <div className="detail-block" id="trekking">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    2.2. Mountain Trails
                                </span>
                                <h3>Guided Wilderness Trekking</h3>
                                <p>
                                    Walk through ancient oak forests,
                                    rhododendron groves, and high-altitude
                                    alpine meadows (bugyals). Trekking in
                                    Uttarakhand offers routes for every level of
                                    fitness.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Trek Difficulty Levels:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>
                                                Easy (Beginner-Friendly):
                                            </strong>
                                            Deoriatal-Chandrashila trek, Nag
                                            Tibba. Perfect for families and
                                            weekend trips.
                                        </li>
                                        <li>
                                            <strong>
                                                Moderate (Basic fitness):
                                            </strong>
                                            Har Ki Dun, Valley of Flowers,
                                            Dayara Bugyal.
                                        </li>
                                        <li>
                                            <strong>
                                                Difficult (High Altitude):
                                            </strong>
                                            Roopkund, Kedartal, Bali Pass.
                                            Recommended for experienced
                                            trekkers.
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    <strong>What to Expect:</strong> Walk with
                                    experienced local guides who understand
                                    trail safety, mountain weather signs, and
                                    flora/fauna. Mules or porters handle the
                                    luggage so you can walk comfortably.
                                </p>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Explore Trek Packages
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/tripdhara_trekking.png"
                                    alt="Himalayan Trekking"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  3. Bungee Jumping  */}
                        <div className="detail-block" id="bungee">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    2.3. Free Fall
                                </span>
                                <h3>India&apos;s Highest Bungee Jumping</h3>
                                <p>
                                    Leap from India&apos;s highest
                                    fixed-platform bungee jumping site in
                                    Rishikesh. Jump from a cantilever platform
                                    built over a rocky cliff overlooking a
                                    tributary of the Ganga, at a height of 83
                                    meters.
                                </p>
                                <p>
                                    Designed and operated by jumpmasters from
                                    Australia and New Zealand. All harnesses,
                                    cords, and safety systems comply with
                                    international safety regulations.
                                </p>
                                <div className="detail-faq-list">
                                    <h4>Frequently Asked Questions:</h4>
                                    <div className="detail-faq-item">
                                        <h5>Is there an age/weight limit?</h5>
                                        <p>
                                            Minimum age is 12 years. Minimum
                                            weight is 35kg, maximum is 110kg.
                                        </p>
                                    </div>
                                    <div className="detail-faq-item">
                                        <h5>
                                            Are there any medical restrictions?
                                        </h5>
                                        <p>
                                            Jumping is not permitted for
                                            individuals with heart conditions,
                                            epilepsy, high blood pressure,
                                            back/neck injuries, or pregnancy.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book Bungee Jump
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/tripdhara_bungee.png"
                                    alt="Bungee Jumping Rishikesh"
                                    className="detail-img"
                                />
                            </div>
                        </div>

                        {/*  4. Paragliding  */}
                        <div className="detail-block" id="paragliding">
                            <div className="detail-text-wrapper">
                                <span className="detail-tagline">
                                    2.4. Soaring Skies
                                </span>
                                <h3>Tandem Paragliding Joyrides</h3>
                                <p>
                                    Soar like a Himalayan eagle over the valleys
                                    of Rishikesh or the alpine lakes of Bhimtal.
                                    Enjoy the panoramic views of terraced fields
                                    and winding rivers under the wings.
                                </p>
                                <p>
                                    In a tandem flight, you are securely
                                    harnessed to an experienced pilot who
                                    handles the launch, navigation, and landing.
                                    You simply take a short run off the slope.
                                </p>
                                <div className="detail-benefits">
                                    <h4>Safety & Logistics:</h4>
                                    <ul className="detail-benefits-list">
                                        <li>
                                            <strong>Certified Pilots:</strong>{" "}
                                            Fly with licenses holding veteran
                                            pilots with hundreds of logged
                                            flight hours.
                                        </li>
                                        <li>
                                            <strong>Equipment Checks:</strong>
                                            Pre-flight glider checks and reserve
                                            parachutes are standard for all
                                            launches.
                                        </li>
                                        <li>
                                            <strong>Ideal Season:</strong>{" "}
                                            September to November, and March to
                                            May are best for flight thermals.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="../../#booking"
                                    className="btn btn-primary"
                                >
                                    Book Paragliding Flight
                                </a>
                            </div>
                            <div className="detail-img-wrapper">
                                <img
                                    src="/assets/images/tripdhara_paragliding.png"
                                    alt="Paragliding Flight"
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
