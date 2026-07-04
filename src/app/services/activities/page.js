import PageHero from "@/components/ui/PageHero";
import DetailBlock from "@/components/ui/DetailBlock";
import activitiesData from "@/data/activities.json";

export const metadata = {
    title: "Adventure Activities - Tripdhara",
    description:
        "Book adventure activities in Rishikesh and Uttarakhand including river rafting, bungee jumping, paragliding, and guided trekking packages.",
};

export default function ActivitiesPage() {
    return (
        <main>
            <PageHero
                bgImage="/assets/images/hero_act.png"
                subtitle="High Adrenaline"
                title="Himalayan Adventure Activities"
            />

            <section className="details-section">
                <div className="section-container">
                    <div className="details-grid">
                        {activitiesData.map((data) => (
                            <DetailBlock key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
