import { Card, CardContent } from "@/components/ui/card";

const restaurants = [
  {
    name: "Brewbar",
    logo: "/assets/brewbar.png",
    texture: "/assets/texturebrewbar.png",
    discount: "20% off"
  },
  {
    name: "The Cracking Kernel",
    logo: "/assets/crackingkernel.png",
    texture: "/assets/texturecrackingkernel.png",
    discount: "15% off"
  },
  {
    name: "Hunza Den",
    logo: "/assets/hunzaden.png",
    texture: "/assets/texturehunzaden.png",
    discount: "25% off"
  },
  {
    name: "Spud Chai",
    logo: "/assets/spudchai.png",
    texture: "/assets/texturespudchai.png",
    discount: "20% off"
  },
  {
    name: "Stufd",
    logo: "/assets/stufd.png",
    texture: "/assets/texturestufd.png",
    discount: "30% off"
  },
  {
    name: "Tadka Gali",
    logo: "/assets/tadkagali.png",
    texture: "/assets/texturetadkagali.png",
    discount: "20% off"
  },
  {
    name: "Zaan",
    logo: "/assets/zaan.png",
    texture: "/assets/texturezaan.png",
    discount: "15% off"
  },
  {
    name: "Dot",
    logo: "/assets/dot.png",
    texture: "/assets/texturedot.png",
    discount: "25% off"
  },
  {
    name: "Zingo",
    logo: "/assets/zingo.png",
    texture: "/assets/texturezingo.png",
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
          <Card 
            key={restaurant.name} 
            className="border-2 border-black hover:shadow-lg transition-shadow overflow-hidden relative h-72"
            style={{
              backgroundImage: `url(${restaurant.texture})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black/10" /> {/* Reduced opacity overlay */}
            <CardContent className="p-6 relative h-full flex flex-col justify-center"> 
              <div className="flex items-center justify-center mb-4">
                <img
                  src={restaurant.logo}
                  alt={`${restaurant.name} logo`}
                  className="h-24 object-contain"
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