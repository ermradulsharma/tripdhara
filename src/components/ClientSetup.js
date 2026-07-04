"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientSetup() {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll Reveal Animations
        const scrollElements = document.querySelectorAll(".animate-scroll");
        const scrollObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                        scrollObserver.unobserve(entry.target);
                    }
                });
            },
            { root: null, threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
        );
        scrollElements.forEach((el) => scrollObserver.observe(el));

        // Dynamic Hero Text Typer (if it exists)
        const words = [
            "Himalayan Roads",
            "Adventure Bikes",
            "Luxury Resorts",
            "Bespoke Tours",
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typerSpan = document.getElementById("typer-text");

        let typerTimeout;
        function typeEffect() {
            if (!typerSpan) return;
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typerSpan.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typerSpan.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let speed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                speed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                speed = 500;
            }
            typerTimeout = setTimeout(typeEffect, speed);
        }
        if (typerSpan) {
            typeEffect();
        }

        return () => {
            if (typerTimeout) clearTimeout(typerTimeout);
            scrollObserver.disconnect();
        };
    }, [pathname]);

    return null;
}
