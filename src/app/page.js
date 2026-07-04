import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Services from "@/components/sections/Services";
import Routes from "@/components/sections/Routes";
import WhyUs from "@/components/sections/WhyUs";
import Booking from "@/components/sections/Booking";
import Destinations from "@/components/sections/Destinations";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Page() {
    return (
        <main>
            <Hero />
            <Intro />
            <Services />
            <Routes />
            <WhyUs />
            <Booking />
            <Destinations />
            <About />
            <Testimonials />
            <FAQ />
            <Contact />
        </main>
    );
}
