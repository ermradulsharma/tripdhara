import PageHero from "@/components/ui/PageHero";
import DetailBlock from "@/components/ui/DetailBlock";
import accommodationData from "@/data/accommodation.json";

export const metadata = {
    title: "Mountain Accommodations - Tripdhara",
    description:
        "Book verified local homestays, hotels, and riverside camping in Uttarakhand and Himachal Pradesh with Tripdhara.",
};

export default function AccommodationPage() {
    return (
        <main>
            <PageHero
                bgImage="/assets/images/hero_acc.png"
                subtitle="Comfort & Safety"
                title="Mountain Accommodations"
            />

            <section className="details-section">
                <div className="section-container">
                    <div className="details-grid">
                        {accommodationData.map((data) => (
                            <DetailBlock key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
