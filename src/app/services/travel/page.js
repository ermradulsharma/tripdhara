import PageHero from "@/components/ui/PageHero";
import DetailBlock from "@/components/ui/DetailBlock";
import travelData from "@/data/travel.json";

export const metadata = {
    title: "Travel & Transport Services - Tripdhara",
    description:
        "Rent self-drive cars, adventure bikes, or book premium SUVs with veteran mountain chauffeurs in Uttarakhand and Rishikesh.",
};

export default function TravelPage() {
    return (
        <main>
            <PageHero
                bgImage="/assets/images/hero_trv.png"
                subtitle="Himalayan Transit"
                title="Travel & Transport Services"
            />

            <section className="details-section">
                <div className="section-container">
                    <div className="details-grid">
                        {travelData.map((data) => (
                            <DetailBlock key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
