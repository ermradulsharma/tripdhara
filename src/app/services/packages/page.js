import PageHero from "@/components/ui/PageHero";
import DetailBlock from "@/components/ui/DetailBlock";
import packagesData from "@/data/packages.json";

export const metadata = {
    title: "Himalayan Packages & Yatras - Tripdhara",
    description:
        "Book organized Char Dham Yatras, Kedarnath, Badrinath, Gangotri, Yamunotri tours, and guided treks to Vasuki Tal and Triyuginarayan with Tripdhara.",
};

export default function PackagesPage() {
    return (
        <main>
            <PageHero
                bgImage="/assets/images/hero_pkg.png"
                subtitle="Sacred & Scenic"
                title="Tour Packages & Yatras"
            />

            <section className="details-section">
                <div className="section-container">
                    <div className="details-grid">
                        {packagesData.map((data) => (
                            <DetailBlock key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
