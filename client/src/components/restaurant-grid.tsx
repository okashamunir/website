import { Card, CardContent } from "@/components/ui/card";

const restaurants = [
  {
    name: "Urban Bites",
    image: "https://images.unsplash.com/photo-1552611052-60b2c00a2be8",
    discount: "20% off"
  },
  {
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1552729434-12cd1fb0099a",
    discount: "15% off"
  },
  {
    name: "Cafe Connect",
    image: "https://images.unsplash.com/photo-1454944338482-a69bb95894af",
    discount: "25% off"
  },
  {
    name: "Pizza Point",
    image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5",
    discount: "10% off"
  },
  {
    name: "Burger Lab",
    image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606",
    discount: "30% off"
  },
  {
    name: "Tea House",
    image: "https://images.unsplash.com/photo-1464306208223-e0b4495a5553",
    discount: "20% off"
  }
];

export default function RestaurantGrid() {
  return (
    <section className="py-24 container">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.name}>
            <CardContent className="p-0">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                <p className="text-primary font-medium mt-2">{restaurant.discount}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
