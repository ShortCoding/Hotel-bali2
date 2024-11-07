"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

const featuredHotels = [
  {
    id: 1,
    name: "Four Seasons Resort Bali at Jimbaran Bay",
    location: "Jimbaran",
    rating: 5,
    price: "$850",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
    tags: ["Beachfront", "Luxury", "Spa"]
  },
  {
    id: 2,
    name: "COMO Uma Ubud",
    location: "Ubud",
    rating: 5,
    price: "$550",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80",
    tags: ["Jungle View", "Yoga", "Wellness"]
  },
  {
    id: 3,
    name: "Alila Villas Uluwatu",
    location: "Uluwatu",
    rating: 5,
    price: "$750",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80",
    tags: ["Cliff View", "Design", "Pool Villa"]
  }
];

export function FeaturedHotels() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Featured Hotels</h2>
        <p className="text-muted-foreground mt-2">
          Discover our hand-picked luxury accommodations in Bali
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredHotels.map((hotel) => (
          <Card key={hotel.id} className="overflow-hidden group cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                  From {hotel.price}/night
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {hotel.name}
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm">{hotel.rating}.0</span>
                </div>
              </CardTitle>
              <CardDescription className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {hotel.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                {hotel.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}