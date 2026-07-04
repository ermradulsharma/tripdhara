"use client";
import React, { useState, useEffect } from "react";
import testimonials from "@/data/testimonials.json";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const length = testimonials.length;

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleTransitionEnd = () => {
        if (currentIndex === length + 1) {
            setIsTransitioning(false);
            setCurrentIndex(1);
        } else if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(length);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Touch support
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) nextSlide();
        if (distance < -minSwipeDistance) prevSlide();
    };

    const slides = [testimonials[length - 1], ...testimonials, testimonials[0]];

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="testimonials-glow-blob"></div>
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tagline">Testimonials</span>
                    <h2 className="section-title">What Travelers Say</h2>
                    <p className="section-desc">
                        Join hundreds of travelers who enjoyed safe, scenic, and
                        premium journeys with us.
                    </p>
                </div>

                <div className="testimonials-slider-wrapper">
                    <button
                        className="slider-arrow prev"
                        aria-label="Previous Slide"
                        onClick={prevSlide}
                    >
                        &larr;
                    </button>

                    <div
                        className="testimonials-slider"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div
                            className="testimonials-track"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                                transition: isTransitioning
                                    ? "transform 0.5s ease-in-out"
                                    : "none",
                            }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {slides.map((t, idx) => (
                                <div
                                    className={`testimonial-card ${idx === currentIndex ? "active" : ""}`}
                                    key={idx}
                                >
                                    <div className="testimonial-hero-phrase">
                                        <span className="quote-symbol">“</span>
                                        <h3>{t.heroPhrase}</h3>
                                    </div>
                                    <div className="testimonial-details">
                                        <div className="stars">★★★★★</div>
                                        <p className="testimonial-text">
                                            &quot;{t.text}&quot;
                                        </p>
                                        <div className="user-info">
                                            <div
                                                className="user-avatar"
                                                style={{
                                                    backgroundColor: t.avatarBg,
                                                }}
                                            >
                                                {t.avatarInitials}
                                            </div>
                                            <div>
                                                <h5 className="user-name">
                                                    {t.name}
                                                </h5>
                                                <span className="user-meta">
                                                    {t.meta}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        className="slider-arrow next"
                        aria-label="Next Slide"
                        onClick={nextSlide}
                    >
                        &rarr;
                    </button>
                </div>

                <div className="slider-dots">
                    {testimonials.map((_, idx) => {
                        let realIndex = currentIndex - 1;
                        if (currentIndex === 0) realIndex = length - 1;
                        if (currentIndex === length + 1) realIndex = 0;

                        return (
                            <button
                                key={idx}
                                className={`dot ${idx === realIndex ? "active" : ""}`}
                                aria-label={`Go to slide ${idx + 1}`}
                                onClick={() => {
                                    setIsTransitioning(true);
                                    setCurrentIndex(idx + 1);
                                }}
                            ></button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
