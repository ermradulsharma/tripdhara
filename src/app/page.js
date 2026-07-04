import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Routes from "@/components/Routes";
import WhyUs from "@/components/WhyUs";
import Booking from "@/components/Booking";
import Destinations from "@/components/Destinations";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

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
