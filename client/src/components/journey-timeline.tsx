import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "2022",
    title: "The Beginning",
    description: "Started with a simple idea to help students save money",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff"
  },
  {
    year: "2023",
    title: "First Partnerships",
    description: "Launched with 10 restaurant partners in Karachi",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    year: "2023",
    title: "Expansion",
    description: "Expanded to Lahore and Islamabad with 50+ partners",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    year: "2024",
    title: "Growing Community",
    description: "Over 10,000 students using Dhoond daily",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  }
];

export default function JourneyTimeline() {
  return (
    <div className="container py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <Card key={index} className="relative">
            <CardContent className="p-6 grid md:grid-cols-[1fr_2fr] gap-6">
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-primary">{event.year}</div>
                <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
              </div>
              <div className="flex gap-6 items-center">
                <p className="text-muted-foreground">{event.description}</p>
                <img
                  src={event.image}
                  alt={event.title}
                  className="hidden md:block w-32 h-32 object-cover rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
