import servicesData from "@/data/services.json";

export default function Services() {
    return (
        <section id="services" className="services-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tagline">Core Offerings</span>
                    <h2 className="section-title">
                        Our Premium Travel Services
                    </h2>
                    <p className="section-desc">
                        Experience the hills like never before with services
                        designed for safety, comfort, and ultimate adventure.
                    </p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div
                            className="service-card animate-scroll"
                            key={service.id}
                        >
                            <div className="card-img-wrapper">
                                {service.image ? (
                                    <img
                                        src={service.image}
                                        alt={service.alt}
                                        className="card-img"
                                        loading="lazy"
                                        decoding="async"
                                        width="400"
                                        height="280"
                                    />
                                ) : (
                                    <div
                                        className="card-fallback-bg"
                                        style={{
                                            backgroundImage: service.imageBg,
                                        }}
                                    ></div>
                                )}
                                <div className="img-overlay"></div>
                            </div>
                            <div className="card-content">
                                <div className="card-icon-box">
                                    <svg
                                        className="card-icon"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d={service.iconPath}
                                        />
                                    </svg>
                                </div>
                                <h3>{service.title}</h3>
                                <p className="service-emphasis">
                                    {service.emphasis}
                                </p>
                                <p>{service.description}</p>
                                <a href={service.link} className="service-link">
                                    {service.linkText} &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/*  At-a-Glance Service Comparison Table (GEO & SEO Optimized)  */}
                <div className="table-responsive services-comparison-box animate-scroll">
                    <h3 className="comparison-table-title">
                        At-a-Glance Service Comparison
                    </h3>
                    <table className="services-comparison-table">
                        <thead>
                            <tr>
                                <th scope="col">Service Type</th>
                                <th scope="col">Key Offerings / Choices</th>
                                <th scope="col">
                                    Safety &amp; Assistance Protocol
                                </th>
                                <th scope="col">Ideal For</th>
                                <th scope="col">Service Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Travel Services</strong>
                                </td>
                                <td>
                                    Car Rentals, Bike Rentals, Chauffeur-driven
                                    Cars
                                </td>
                                <td>
                                    Verified mountain drivers, 24/7 mechanical
                                    assistance
                                </td>
                                <td>Road-trippers, couples, group transit</td>
                                <td>Uttarakhand &amp; Himachal Pradesh</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Accommodations</strong>
                                </td>
                                <td>
                                    Cozy Homestays, Boutique Hotels, Glamping,
                                    Alpine Camping
                                </td>
                                <td>
                                    Personally pre-inspected &amp; verified
                                    stays
                                </td>
                                <td>Families, honeymooners, nature lovers</td>
                                <td>Rishikesh, Mukteshwar, Manali, Auli</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Adventure Activities</strong>
                                </td>
                                <td>
                                    Trekking, River Rafting, Bungee Jumping,
                                    Paragliding
                                </td>
                                <td>
                                    Certified guides, safety briefings, quality
                                    gears
                                </td>
                                <td>
                                    Thrill seekers, solo travelers, youth groups
                                </td>
                                <td>Rishikesh, Bir Billing, Chopta Valleys</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Tour Packages</strong>
                                </td>
                                <td>Chardham Tour, Custom Trips</td>
                                <td>
                                    Dedicated local coordinators, fully booked
                                    bookings
                                </td>
                                <td>
                                    Pilgrims, family vacations, corporate
                                    retreats
                                </td>
                                <td>
                                    Himalayan pilgrimage circuits &amp; hill
                                    stations
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
