import { Card, CardContent } from "@/components/ui/card";

const restaurants = [
  {
    name: "Brewbar",
    logo: "/assets/brewbar.png",
    discount: "20% off"
  },
  {
    name: "The Cracking Kernel",
    logo: "/assets/crackingkernel.png",
    discount: "15% off"
  },
  {
    name: "Hunza Den",
    logo: "/assets/hunzaden.png",
    discount: "25% off"
  },
  {
    name: "Spud Chai",
    logo: "/assets/spudchai.png",
    discount: "20% off"
  },
  {
    name: "Stufd",
    logo: "/assets/stufd.png",
    discount: "30% off"
  },
  {
    name: "Tadka Gali",
    logo: "/assets/tadkagali.png",
    discount: "20% off"
  },
  {
    name: "Zaan",
    logo: "/assets/zaan.png",
    discount: "15% off"
  },
  {
    name: "Dot",
    logo: "/assets/dot.png",
    discount: "25% off"
  },
  {
    name: "Zingo",
    logo: "/assets/zingo.png",
    discount: "20% off"
  }
];

export default function RestaurantGrid() {
  return (
    <section className="py-24 container">
      <h2 className="text-4xl font-bold text-center mb-4">Our Partners</h2>
      <p className="text-center text-muted-foreground mb-12">Exclusive discounts at your favorite places</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.name} className="bg-white border-2 border-black hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="aspect-video flex items-center justify-center mb-4">
                <img
                  src={restaurant.logo}
                  alt={`${restaurant.name} logo`}
                  className="h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black">{restaurant.name}</h3>
                <p className="text-primary font-medium mt-2">{restaurant.discount}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}