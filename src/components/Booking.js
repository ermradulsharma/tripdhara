"use client";
import React, { useState } from "react";

import tabContentData from "./database/bookingTabs.json";

export default function Booking() {
    const [activeTab, setActiveTab] = useState("accommodation");
    const activeData = tabContentData[activeTab];

    const [accommodationForm, setAccommodationForm] = useState({
        name: "",
        phone: "",
        type: "Luxury Resort",
        checkin: "",
        nights: 2,
        guests: 2,
        dest: "Chopta / Tungnath",
    });
    const [activityForm, setActivityForm] = useState({
        name: "",
        phone: "",
        type: "Trekking",
        subtype: "Tungnath-Chandrashila Trek",
        date: "",
        members: 2,
        loc: "Chopta / Rishikesh",
    });
    const [travelForm, setTravelForm] = useState({
        name: "",
        phone: "",
        type: "Chauffeur-driven Car",
        vehicle: "Premium SUV (Fortuner/Scorpio)",
        date: "",
        days: 3,
        route: "Dehradun to Mussoorie",
    });
    const [packageForm, setPackageForm] = useState({
        name: "",
        phone: "",
        type: "Custom Adventure Itinerary",
        date: "",
        days: 5,
        members: 4,
    });

    const handleCounter = (form, setForm, field, delta, min = 1) => {
        setForm((prev) => ({
            ...prev,
            [field]: Math.max(min, prev[field] + delta),
        }));
    };

    const handlePillClick = (form, setForm, field, val) => {
        setForm((prev) => ({ ...prev, [field]: val }));
    };

    const submitWhatsApp = (e, type) => {
        e.preventDefault();
        const recipientPhone = "919536489063";
        let message = "";

        if (type === "accommodation") {
            message =
                `*Tripdhara Booking Inquiry - Accommodation*\n\n` +
                `*Client Name:* ${accommodationForm.name}\n` +
                `*Contact Phone:* ${accommodationForm.phone}\n` +
                `*Stay Type:* ${accommodationForm.type}\n` +
                `*Check-in Date:* ${accommodationForm.checkin}\n` +
                `*Duration:* ${accommodationForm.nights} Night(s)\n` +
                `*Number of Guests:* ${accommodationForm.guests}\n` +
                `*Destination Region:* ${accommodationForm.dest}\n\n` +
                `_Inquiry sent via Tripdhara.com_`;
        } else if (type === "activity") {
            message =
                `*Tripdhara Booking Inquiry - Activity*\n\n` +
                `*Client Name:* ${activityForm.name}\n` +
                `*Contact Phone:* ${activityForm.phone}\n` +
                `*Preferred Activity:* ${activityForm.type} - ${activityForm.subtype}\n` +
                `*Activity Date:* ${activityForm.date}\n` +
                `*Group Size:* ${activityForm.members} Person(s)\n` +
                `*Preferred Location:* ${activityForm.loc}\n\n` +
                `_Inquiry sent via Tripdhara.com_`;
        } else if (type === "travel") {
            message =
                `*Tripdhara Booking Inquiry - Travel Services*\n\n` +
                `*Client Name:* ${travelForm.name}\n` +
                `*Contact Phone:* ${travelForm.phone}\n` +
                `*Travel Option:* ${travelForm.type}\n` +
                `*Vehicle Preference:* ${travelForm.vehicle}\n` +
                `*Start Date:* ${travelForm.date}\n` +
                `*Duration:* ${travelForm.days} Day(s)\n` +
                `*Route / Destination:* ${travelForm.route}\n\n` +
                `_Inquiry sent via Tripdhara.com_`;
        } else if (type === "package") {
            message =
                `*Tripdhara Booking Inquiry - Tour Package*\n\n` +
                `*Client Name:* ${packageForm.name}\n` +
                `*Contact Phone:* ${packageForm.phone}\n` +
                `*Package Type:* ${packageForm.type}\n` +
                `*Travel Date:* ${packageForm.date}\n` +
                `*Duration:* ${packageForm.days} Day(s)\n` +
                `*Group Size:* ${packageForm.members} Member(s)\n\n` +
                `_Inquiry sent via Tripdhara.com_`;
        }

        const encodedText = encodeURIComponent(message);
        window.open(
            `https://wa.me/${recipientPhone}?text=${encodedText}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <section id="booking" className="booking-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tagline">Start Booking</span>
                    <h2 className="section-title">Plan Your Mountain Trip</h2>
                    <p className="section-desc">
                        Book your next Himalayan adventure with ease. Select
                        your desired service – accommodation, thrilling
                        activities, travel, or complete tour packages. Fill in
                        your details, and our team will get back to you
                        instantly via WhatsApp to finalize your booking.
                    </p>
                </div>

                <div className="booking-container animate-scroll">
                    <div className="booking-split-wrapper">
                        {/* Left Side: Interactive Booking Widget */}
                        <div className="booking-form-side">
                            {/* Tabs Header */}
                            <div className="booking-tabs" role="tablist">
                                {Object.values(tabContentData).map((tab) => (
                                    <button
                                        key={tab.id}
                                        className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                                        role="tab"
                                        aria-selected={activeTab === tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="16"
                                            height="16"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill="currentColor"
                                                d={tab.iconPath}
                                            />
                                        </svg>{" "}
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content Body */}
                            <div className="booking-content">
                                {/* ACCOMMODATION TAB */}
                                {activeTab === "accommodation" && (
                                    <div
                                        className="tab-content active"
                                        id="tab-accommodation"
                                        role="tabpanel"
                                    >
                                        <form
                                            className="booking-form"
                                            onSubmit={(e) =>
                                                submitWhatsApp(
                                                    e,
                                                    "accommodation"
                                                )
                                            }
                                        >
                                            <div className="form-grid">
                                                <div className="input-group">
                                                    <label htmlFor="accommodation-name">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="accommodation-name"
                                                        placeholder="John Doe"
                                                        required
                                                        value={
                                                            accommodationForm.name
                                                        }
                                                        onChange={(e) =>
                                                            setAccommodationForm(
                                                                {
                                                                    ...accommodationForm,
                                                                    name: e
                                                                        .target
                                                                        .value,
                                                                }
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="accommodation-phone">
                                                        Mobile Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="accommodation-phone"
                                                        placeholder="e.g. +91 98765 43210"
                                                        required
                                                        value={
                                                            accommodationForm.phone
                                                        }
                                                        onChange={(e) =>
                                                            setAccommodationForm(
                                                                {
                                                                    ...accommodationForm,
                                                                    phone: e
                                                                        .target
                                                                        .value,
                                                                }
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="accommodation-type">
                                                        Accommodation Type
                                                    </label>
                                                    <select
                                                        id="accommodation-type"
                                                        value={
                                                            accommodationForm.type
                                                        }
                                                        onChange={(e) =>
                                                            setAccommodationForm(
                                                                {
                                                                    ...accommodationForm,
                                                                    type: e
                                                                        .target
                                                                        .value,
                                                                }
                                                            )
                                                        }
                                                    >
                                                        <option value="Homestay">
                                                            Homestay
                                                        </option>
                                                        <option value="Hotel">
                                                            Hotel
                                                        </option>
                                                        <option value="Cottage">
                                                            Cottage
                                                        </option>
                                                        <option value="Camping">
                                                            Camping
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="accommodation-checkin">
                                                        Check-in Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="accommodation-checkin"
                                                        required
                                                        value={
                                                            accommodationForm.checkin
                                                        }
                                                        onChange={(e) =>
                                                            setAccommodationForm(
                                                                {
                                                                    ...accommodationForm,
                                                                    checkin:
                                                                        e.target
                                                                            .value,
                                                                }
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label>
                                                        Duration (Nights)
                                                    </label>
                                                    <div className="custom-counter">
                                                        <button
                                                            type="button"
                                                            className="counter-btn minus"
                                                            onClick={() =>
                                                                handleCounter(
                                                                    accommodationForm,
                                                                    setAccommodationForm,
                                                                    "nights",
                                                                    -1
                                                                )
                                                            }
                                                        >
                                                            −
                                                        </button>
                                                        <input
                                                            type="number"
                                                            id="accommodation-nights"
                                                            value={
                                                                accommodationForm.nights
                                                            }
                                                            readOnly
                                                        />
                                                        <button
                                                            type="button"
                                                            className="counter-btn plus"
                                                            onClick={() =>
                                                                handleCounter(
                                                                    accommodationForm,
                                                                    setAccommodationForm,
                                                                    "nights",
                                                                    1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="input-group">
                                                    <label>Guests</label>
                                                    <div className="custom-counter">
                                                        <button
                                                            type="button"
                                                            className="counter-btn minus"
                                                            onClick={() =>
                                                                handleCounter(
                                                                    accommodationForm,
                                                                    setAccommodationForm,
                                                                    "guests",
                                                                    -1
                                                                )
                                                            }
                                                        >
                                                            −
                                                        </button>
                                                        <input
                                                            type="number"
                                                            id="accommodation-guests"
                                                            value={
                                                                accommodationForm.guests
                                                            }
                                                            readOnly
                                                        />
                                                        <button
                                                            type="button"
                                                            className="counter-btn plus"
                                                            onClick={() =>
                                                                handleCounter(
                                                                    accommodationForm,
                                                                    setAccommodationForm,
                                                                    "guests",
                                                                    1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="input-group full-width-tablet">
                                                    <label htmlFor="accommodation-dest">
                                                        Target Destination /
                                                        Region
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="accommodation-dest"
                                                        placeholder="e.g. Chopta, Auli, Mussoorie..."
                                                        value={
                                                            accommodationForm.dest
                                                        }
                                                        onChange={(e) =>
                                                            setAccommodationForm(
                                                                {
                                                                    ...accommodationForm,
                                                                    dest: e
                                                                        .target
                                                                        .value,
                                                                }
                                                            )
                                                        }
                                                    />
                                                    <div className="suggestion-pills">
                                                        <span
                                                            className="pill"
                                                            onClick={() =>
                                                                handlePillClick(
                                                                    accommodationForm,
                                                                    setAccommodationForm,
                                                                    "dest",
                                                                    "Chopta / Tungnath"
                                                                )
                                                            }
                                                        >
                                                            Chopta / Tungnath
                                                        </span>
                                                        <span
                                                            className="pill"
                                                            onClick={() =>
                                                                handlePillClick(
                                                                    accommodationForm,
                                                                    setAccommodationForm,
                                                                    "dest",
                                                                    "Rishikesh (Riverside)"
                                                                )
                                                            }
                                                        >
                                                            Rishikesh
                                                        </span>
                                                        <span
                                                            className="pill"
                                                            onClick={() =>
                                                                handlePillClick(
                                                                    accommodationForm,
                                                                    setAccommodationForm,
                                                                    "dest",
                                                                    "Auli (Ski Resort)"
                                                                )
                                                            }
                                                        >
                                                            Auli
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-submit"
                                            >
                                                Send Accommodation Inquiry on
                                                WhatsApp
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {/* ACTIVITY TAB */}
                                {activeTab === "activity" && (
                                    <div
                                        className="tab-content active"
                                        id="tab-activity"
                                        role="tabpanel"
                                    >
                                        <form
                                            className="booking-form"
                                            onSubmit={(e) =>
                                                submitWhatsApp(e, "activity")
                                            }
                                        >
                                            <div className="form-grid">
                                                <div className="input-group">
                                                    <label htmlFor="activity-name">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="activity-name"
                                                        placeholder="John Doe"
                                                        required
                                                        value={
                                                            activityForm.name
                                                        }
                                                        onChange={(e) =>
                                                            setActivityForm({
                                                                ...activityForm,
                                                                name: e.target
                                                                    .value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="activity-phone">
                                                        Mobile Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="activity-phone"
                                                        placeholder="e.g. +91 98765 43210"
                                                        required
                                                        value={
                                                            activityForm.phone
                                                        }
                                                        onChange={(e) =>
                                                            setActivityForm({
                                                                ...activityForm,
                                                                phone: e.target
                                                                    .value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="activity-type">
                                                        Preferred Activity
                                                    </label>
                                                    <select
                                                        id="activity-type"
                                                        value={
                                                            activityForm.type
                                                        }
                                                        onChange={(e) => {
                                                            setActivityForm({
                                                                ...activityForm,
                                                                type: e.target
                                                                    .value,
                                                                subtype: "",
                                                            });
                                                        }}
                                                    >
                                                        <option value="Trekking">
                                                            Trekking
                                                        </option>
                                                        <option value="Rafting">
                                                            Rafting
                                                        </option>
                                                        <option value="Bungee Jumping">
                                                            Bungee Jumping
                                                        </option>
                                                        <option value="Paragliding">
                                                            Paragliding
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="input-group">
                                                    <label
                                                        htmlFor="activity-subtype"
                                                        id="activity-subtype-label"
                                                    >
                                                        Select Option
                                                    </label>
                                                    <select
                                                        id="activity-subtype"
                                                        value={
                                                            activityForm.subtype
                                                        }
                                                        onChange={(e) =>
                                                            setActivityForm({
                                                                ...activityForm,
                                                                subtype:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                    >
                                                        {activityForm.type ===
                                                            "Trekking" && (
                                                            <>
                                                                <option value="Tungnath-Chandrashila Trek">
                                                                    Tungnath-Chandrashila
                                                                    Trek
                                                                </option>
                                                                <option value="Deoriatal Trek">
                                                                    Deoriatal
                                                                    Trek
                                                                </option>
                                                                <option value="Valley of Flowers Trek">
                                                                    Valley of
                                                                    Flowers Trek
                                                                </option>
                                                                <option value="Custom Trek Plan">
                                                                    Custom Trek
                                                                    Plan
                                                                </option>
                                                            </>
                                                        )}
                                                        {activityForm.type ===
                                                            "Rafting" && (
                                                            <>
                                                                <option value="12 km Stretch (Basic Rapids)">
                                                                    12 km
                                                                    Stretch
                                                                    (Basic
                                                                    Rapids)
                                                                </option>
                                                                <option value="16 km Stretch (Moderate Rapids)">
                                                                    16 km
                                                                    Stretch
                                                                    (Moderate
                                                                    Rapids)
                                                                </option>
                                                                <option value="24 km Stretch (Adventure Rapids)">
                                                                    24 km
                                                                    Stretch
                                                                    (Adventure
                                                                    Rapids)
                                                                </option>
                                                                <option value="36 km Stretch (Extreme Rapids)">
                                                                    36 km
                                                                    Stretch
                                                                    (Extreme
                                                                    Rapids)
                                                                </option>
                                                            </>
                                                        )}
                                                        {activityForm.type ===
                                                            "Bungee Jumping" && (
                                                            <>
                                                                <option value="83 meters Fixed-Platform Jump">
                                                                    83 meters
                                                                    Fixed-Platform
                                                                    Jump
                                                                </option>
                                                                <option value="100 meters Ultra Platform Jump">
                                                                    100 meters
                                                                    Ultra
                                                                    Platform
                                                                    Jump
                                                                </option>
                                                                <option value="Giant Canyon Swing">
                                                                    Giant Canyon
                                                                    Swing
                                                                </option>
                                                            </>
                                                        )}
                                                        {activityForm.type ===
                                                            "Paragliding" && (
                                                            <>
                                                                <option value="Standard Flight (15-20 Mins)">
                                                                    Standard
                                                                    Flight
                                                                    (15-20 Mins)
                                                                </option>
                                                                <option value="High Altitude Flight (30-45 Mins)">
                                                                    High
                                                                    Altitude
                                                                    Flight
                                                                    (30-45 Mins)
                                                                </option>
                                                            </>
                                                        )}
                                                    </select>
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="activity-date">
                                                        Activity Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="activity-date"
                                                        required
                                                        value={
                                                            activityForm.date
                                                        }
                                                        onChange={(e) =>
                                                            setActivityForm({
                                                                ...activityForm,
                                                                date: e.target
                                                                    .value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label>Group Size</label>
                                                    <div className="custom-counter">
                                                        <button
                                                            type="button"
                                                            className="counter-btn minus"
                                                            onClick={() =>
                                                                handleCounter(
                                                                    activityForm,
                                                                    setActivityForm,
                                                                    "members",
                                                                    -1
                                                                )
                                                            }
                                                        >
                                                            −
                                                        </button>
                                                        <input
                                                            type="number"
                                                            id="activity-members"
                                                            value={
                                                                activityForm.members
                                                            }
                                                            readOnly
                                                        />
                                                        <button
                                                            type="button"
                                                            className="counter-btn plus"
                                                            onClick={() =>
                                                                handleCounter(
                                                                    activityForm,
                                                                    setActivityForm,
                                                                    "members",
                                                                    1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-submit"
                                            >
                                                Send Activity Inquiry on
                                                WhatsApp
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {/* TRAVEL TAB */}
                                {activeTab === "travel" && (
                                    <div
                                        className="tab-content active"
                                        id="tab-travel"
                                        role="tabpanel"
                                    >
                                        <form
                                            className="booking-form"
                                            onSubmit={(e) =>
                                                submitWhatsApp(e, "travel")
                                            }
                                        >
                                            <div className="form-grid">
                                                <div className="input-group">
                                                    <label htmlFor="travel-name">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="travel-name"
                                                        placeholder="John Doe"
                                                        required
                                                        value={travelForm.name}
                                                        onChange={(e) =>
                                                            setTravelForm({
                                                                ...travelForm,
                                                                name: e.target
                                                                    .value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="travel-phone">
                                                        Mobile Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="travel-phone"
                                                        placeholder="e.g. +91 98765 43210"
                                                        required
                                                        value={travelForm.phone}
                                                        onChange={(e) =>
                                                            setTravelForm({
                                                                ...travelForm,
                                                                phone: e.target
                                                                    .value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="travel-type">
                                                        Mode of Travel
                                                    </label>
                                                    <select
                                                        id="travel-type"
                                                        value={travelForm.type}
                                                        onChange={(e) => {
                                                            setTravelForm({
                                                                ...travelForm,
                                                                type: e.target
                                                                    .value,
                                                                vehicle:
                                                                    e.target
                                                                        .value ===
                                                                    "Bike Rental"
                                                                        ? "Royal Enfield Himalayan 450"
                                                                        : "Premium SUV (Fortuner/Scorpio)",
                                                            });
                                                        }}
                                                    >
                                                        <option value="Chauffeur-driven Car">
                                                            Chauffeur-driven Car
                                                        </option>
                                                        <option value="Bike Rental">
                                                            Self-drive Bike
                                                            Rental
                                                        </option>
                                                        <option value="Scooty Rental">
                                                            Self-drive Scooty
                                                            Rental
                                                        </option>
                                                        <option value="Car Rental">
                                                            Car Rental
                                                        </option>
                                                    </select>
                                                </div>
                                                <div
                                                    className="input-group"
                                                    id="travel-vehicle-group"
                                                >
                                                    <label htmlFor="travel-vehicle">
                                                        {travelForm.type ===
                                                        "Bike Rental"
                                                            ? "Preferred Bike"
                                                            : "Preferred Vehicle"}
                                                    </label>
                                                    <select
                                                        id="travel-vehicle"
                                                        value={
                                                            travelForm.vehicle
                                                        }
                                                        onChange={(e) =>
                                                            setTravelForm({
                                                                ...travelForm,
                                                                vehicle:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                    >
                                                        {travelForm.type ===
                                                        "Bike Rental" ? (
                                                            <>
                                                                <option value="Royal Enfield Himalayan 450">
                                                                    Royal
                                                                    Enfield
                                                                    Himalayan
                                                                    450
                                                                </option>
                                                                <option value="Royal Enfield Classic 350">
                                                                    Royal
                                                                    Enfield
                                                                    Classic 350
                                                                </option>
                                                                <option value="Hero XPulse 200">
                                                                    Hero XPulse
                                                                    200
                                                                </option>
                                                                <option value="KTM Adventure 390">
                                                                    KTM
                                                                    Adventure
                                                                    390
                                                                </option>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <option value="Premium SUV (Fortuner/Scorpio)">
                                                                    Premium SUV
                                                                    (Fortuner/Scorpio)
                                                                </option>
                                                                <option value="Comfort MPV (Innova/Ertiga)">
                                                                    Comfort MPV
                                                                    (Innova/Ertiga)
                                                                </option>
                                                                <option value="Sedan (Dzire/Etios)">
                                                                    Sedan
                                                                    (Dzire/Etios)
                                                                </option>
                                                            </>
                                                        )}
                                                    </select>
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="travel-date">
                                                        Start Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="travel-date"
                                                        required
                                                        value={travelForm.date}
                                                        onChange={(e) =>
                                                            setTravelForm({
                                                                ...travelForm,
                                                                date: e.target
                                                                    .value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label>Rental Days</label>
                                                    <div className="custom-counter">
                                                        <button
                                                            type="button"
                                                            className="counter-btn minus"
                                                            onClick={() =>
                                                                handleCounter(
                                                                    travelForm,
                                                                    setTravelForm,
                                                                    "days",
                                                                    -1
                                                                )
                                                            }
                                                        >
                                                            −
                                                        </button>
                                                        <input
                                                            type="number"
                                                            id="travel-days"
                                                            value={
                                                                travelForm.days
                                                            }
                                                            readOnly
                                                        />
                                                        <button
                                                            type="button"
                                                            className="counter-btn plus"
                                                            onClick={() =>
                                                                handleCounter(
                                                                    travelForm,
                                                                    setTravelForm,
                                                                    "days",
                                                                    1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-submit"
                                            >
                                                Send Travel Inquiry on WhatsApp
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {/* PACKAGE TAB */}
                                {activeTab === "package" && (
                                    <div
                                        className="tab-content active"
                                        id="tab-package"
                                        role="tabpanel"
                                    >
                                        <form
                                            className="booking-form"
                                            onSubmit={(e) =>
                                                submitWhatsApp(e, "package")
                                            }
                                        >
                                            <div className="form-grid">
                                                <div className="input-group">
                                                    <label htmlFor="package-name">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="package-name"
                                                        placeholder="John Doe"
                                                        required
                                                        value={packageForm.name}
                                                        onChange={(e) =>
                                                            setPackageForm({
                                                                ...packageForm,
                                                                name: e.target
                                                                    .value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="package-phone">
                                                        Mobile Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="package-phone"
                                                        placeholder="e.g. +91 98765 43210"
                                                        required
                                                        value={
                                                            packageForm.phone
                                                        }
                                                        onChange={(e) =>
                                                            setPackageForm({
                                                                ...packageForm,
                                                                phone: e.target
                                                                    .value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="package-type">
                                                        Package Selection
                                                    </label>
                                                    <select
                                                        id="package-type"
                                                        value={packageForm.type}
                                                        onChange={(e) =>
                                                            setPackageForm({
                                                                ...packageForm,
                                                                type: e.target
                                                                    .value,
                                                            })
                                                        }
                                                    >
                                                        <option value="Custom Adventure Itinerary">
                                                            Custom Adventure
                                                            Itinerary
                                                        </option>
                                                        <option value="Chardham Yatra">
                                                            Complete Chardham
                                                            Yatra
                                                        </option>
                                                        <option value="Do Dham Yatra">
                                                            Do Dham Yatra
                                                            (Kedarnath +
                                                            Badrinath)
                                                        </option>
                                                        <option value="Romantic Honeymoon Trip">
                                                            Romantic Honeymoon
                                                            Package
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="package-date">
                                                        Preferred Travel Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="package-date"
                                                        required
                                                        value={packageForm.date}
                                                        onChange={(e) =>
                                                            setPackageForm({
                                                                ...packageForm,
                                                                date: e.target
                                                                    .value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label>Days</label>
                                                    <div className="custom-counter">
                                                        <button
                                                            type="button"
                                                            className="counter-btn minus"
                                                            onClick={() =>
                                                                handleCounter(
                                                                    packageForm,
                                                                    setPackageForm,
                                                                    "days",
                                                                    -1
                                                                )
                                                            }
                                                        >
                                                            −
                                                        </button>
                                                        <input
                                                            type="number"
                                                            id="package-days"
                                                            value={
                                                                packageForm.days
                                                            }
                                                            readOnly
                                                        />
                                                        <button
                                                            type="button"
                                                            className="counter-btn plus"
                                                            onClick={() =>
                                                                handleCounter(
                                                                    packageForm,
                                                                    setPackageForm,
                                                                    "days",
                                                                    1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="input-group">
                                                    <label>Members</label>
                                                    <div className="custom-counter">
                                                        <button
                                                            type="button"
                                                            className="counter-btn minus"
                                                            onClick={() =>
                                                                handleCounter(
                                                                    packageForm,
                                                                    setPackageForm,
                                                                    "members",
                                                                    -1
                                                                )
                                                            }
                                                        >
                                                            −
                                                        </button>
                                                        <input
                                                            type="number"
                                                            id="package-members"
                                                            value={
                                                                packageForm.members
                                                            }
                                                            readOnly
                                                        />
                                                        <button
                                                            type="button"
                                                            className="counter-btn plus"
                                                            onClick={() =>
                                                                handleCounter(
                                                                    packageForm,
                                                                    setPackageForm,
                                                                    "members",
                                                                    1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-submit"
                                            >
                                                Send Package Inquiry on WhatsApp
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Side: Dynamic Image Display Panel */}
                        <div
                            className="booking-image-side"
                            id="booking-image-side"
                            style={{
                                backgroundImage: `linear-gradient(rgba(3, 8, 6, 0.45), rgba(3, 8, 6, 0.9)), ${activeData.image}`,
                            }}
                        >
                            <div className="image-side-overlay">
                                <span
                                    className="image-tagline"
                                    id="booking-image-tagline"
                                >
                                    {activeData.tagline}
                                </span>
                                <h3 id="booking-image-title">
                                    {activeData.title}
                                </h3>
                                <p id="booking-image-desc">{activeData.desc}</p>

                                <div
                                    className="stats-pills-row"
                                    id="booking-stats-row"
                                >
                                    {activeData.stats.map((stat, i) => (
                                        <div className="stat-pill-item" key={i}>
                                            <strong id={`stat-val-${i + 1}`}>
                                                {stat.val}
                                            </strong>
                                            <span id={`stat-lbl-${i + 1}`}>
                                                {stat.lbl}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
