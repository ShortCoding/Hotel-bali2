export type Hotel = {
  id: string;
  name: string;
  location: string;
  description: string;
  price: string;
  rating: number;
  reviews?: number;
  image: string;
  features: string[];
  amenities: string[];
};

const hotels: Hotel[] = [
  {
    id: "1",
    name: "Four Seasons Resort Bali at Jimbaran Bay",
    location: "Jimbaran",
    description: "Luxury beachfront resort with private villas",
    price: "$850",
    rating: 5,
    reviews: 487,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
    features: ["Pool", "Beachfront", "Spa"],
    amenities: ["Room Service", "Restaurant", "Fitness Center"]
  },
  {
    id: "2",
    name: "COMO Uma Ubud",
    location: "Ubud",
    description: "Boutique resort in the heart of Ubud",
    price: "$550",
    rating: 5,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80",
    features: ["Pool", "Spa", "Yoga"],
    amenities: ["Restaurant", "Spa", "Yoga Studio"]
  }
];

export function getHotels(): Hotel[] {
  return hotels;
}

export function getHotelsByLocation(location: string): Hotel[] {
  return hotels.filter(hotel => 
    hotel.location.toLowerCase() === location.toLowerCase()
  );
}

export function getHotelsByFeatures(features: string[]): Hotel[] {
  if (!features.length) return hotels;
  
  return hotels.filter(hotel =>
    features.every(feature => 
      hotel.features.includes(feature)
    )
  );
}