import { Card, CardContent } from "@/components/ui/card";

const restaurants = [
  {
    name: "Brewbar",
    logo: "/assets/brewbar.png",
    texture: "/assets/texturebrewbar.png",
  },
  {
    name: "The Cracking Kernel",
    logo: "/assets/crackingkernel.png",
    texture: "/assets/texturecrackingkernel.png",
  },
  {
    name: "Hunza Den",
    logo: "/assets/hunzaden.png",
    texture: "/assets/texturehunzaden.png",
  },
  {
    name: "Spud Chai",
    logo: "/assets/spudchai.png",
    texture: "/assets/texturespudchai.png",
  },
  {
    name: "Stufd",
    logo: "/assets/stufd.png",
    texture: "/assets/texturestufd.png",
  },
  {
    name: "Tadka Gali",
    logo: "/assets/tadkagali.png",
    texture: "/assets/texturetadkagali.png",
  },
  {
    name: "Zaan",
    logo: "/assets/zaan.png",
    texture: "/assets/texturezaan.png",
  },
  {
    name: "Dot",
    logo: "/assets/dot.png",
    texture: "/assets/texturedot.png",
  },
  {
    name: "Zingo",
    logo: "/assets/zingo.png",
    texture: "/assets/texturezingo.png",
  },
  {
    name: "Coffee Lounge",
    logo: "/assets/coffeelounge.png",
    texture: "/assets/texturecoffeelounge.png",
  },
  {
    name: "Spread",
    logo: "/assets/spread.png",
    texture: "/assets/texturespread.png",
  },
  {
    name: "Burger O'Clock",
    logo: "/assets/burgeroclock.png",
    texture: "/assets/textureburgeroclock.png",
  }
];

export default function RestaurantGrid() {
  return (
    <section className="py-24 flex justify-center items-center w-full">
      <div className="flex flex-col items-center max-w-[1472px]">
        <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
        <div className="w-[1472px] h-[832px] grid grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <Card 
              key={restaurant.name} 
              className="border-2 border-black hover:shadow-lg transition-shadow overflow-hidden relative"
              style={{
                backgroundImage: `url(${restaurant.texture})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <CardContent className="p-6 relative h-full flex items-center justify-center">
                <img
                  src={restaurant.logo}
                  alt={`${restaurant.name} logo`}
                  className="h-32 w-auto object-contain"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}