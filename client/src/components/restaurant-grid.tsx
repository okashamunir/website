import { Card, CardContent } from "@/components/ui/card";

const restaurants = [
  {
    name: "Brewbar",
    logo: "/attached_assets/brewbar.png",
    discount: "20% off"
  },
  {
    name: "The Cracking Kernel",
    logo: "/attached_assets/crackingkernel.png",
    discount: "15% off"
  },
  {
    name: "Hunza Den",
    logo: "/attached_assets/hunzaden.png",
    discount: "25% off"
  },
  {
    name: "Spud Chai",
    logo: "/attached_assets/spudchai.png",
    discount: "20% off"
  },
  {
    name: "Stufd",
    logo: "/attached_assets/stufd.png",
    discount: "30% off"
  },
  {
    name: "Tadka Gali",
    logo: "/attached_assets/tadkagali.png",
    discount: "20% off"
  },
  {
    name: "Zaan",
    logo: "/attached_assets/zaan.png",
    discount: "15% off"
  },
  {
    name: "Dot",
    logo: "/attached_assets/dot.png",
    discount: "25% off"
  },
  {
    name: "Zingo",
    logo: "/attached_assets/zingo.png",
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