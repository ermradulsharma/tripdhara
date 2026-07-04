"use client";
import React, { useState } from "react";
import faqs from "./database/faqs.json";

export default function FAQ() {
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tagline">Got Questions?</span>
                    <h2 className="section-title">
                        Frequently Asked Questions
                    </h2>
                    <p className="section-desc">
                        Find quick answers about self-drive rentals, mountain
                        chauffeurs, and customized tour packages.
                    </p>
                </div>
                <div className="faq-accordion">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div
                                className={`faq-item ${isOpen ? "active" : ""}`}
                                key={faq.id}
                            >
                                <button
                                    className="faq-question"
                                    aria-expanded={isOpen}
                                    aria-controls={`${faq.id}-answer`}
                                    onClick={() => toggleFAQ(faq.id)}
                                >
                                    <span>{faq.question}</span>
                                    <span className="faq-icon">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>
                                <div
                                    className="faq-answer"
                                    id={`${faq.id}-answer`}
                                    aria-hidden={!isOpen}
                                    style={{
                                        maxHeight: isOpen ? "200px" : "0",
                                        overflow: "hidden",
                                        transition: "max-height 0.3s ease",
                                        padding: isOpen
                                            ? "15px 20px"
                                            : "0 20px",
                                    }}
                                >
                                    <p style={{ margin: 0 }}>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
