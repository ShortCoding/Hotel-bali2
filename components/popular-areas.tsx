"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Link from "next/link";

const areas = [
  {
    name: "Kuta",
    description: "Vibrant beach town",
    image: "https://pixahive.com/wp-content/uploads/2021/01/Kuta-beach-Bali-268319-pixahive.jpg",
    hotels: 156
  },
  {
    name: "Seminyak",
    description: "Trendy beach resort area",
    image: "https://media.istockphoto.com/id/513636770/fr/photo/seminyak-plage-au-cr%C3%A9puscule.jpg?s=612x612&w=0&k=20&c=t4VDHz8_pWSGfCBpO8XwZZO1vv2AJyi-qNASh_QYVZ4=",
    hotels: 203
  },
  {
    name: "Canggu",
    description: "Surf paradise & digital nomad hub",
    image: "https://media.istockphoto.com/id/2153604676/photo/summer-vibe.jpg?s=612x612&w=0&k=20&c=4mVBXeS8whJRdZPy8ogiTWSq1gL8VUJ0wtwhnIJyhTw=",
    hotels: 145
  },
  {
    name: "Ubud",
    description: "Cultural heart of Bali",
    image: "https://media.istockphoto.com/id/515480864/fr/photo/magnifique-rizi%C3%A8res-en-terrasse-ubud-bali-indon%C3%A9sie.jpg?s=170667a&w=0&k=20&c=UMegNit7aD1dw7EZ6iLDyOPwFXAbdXt678jCfAF8a1k=",
    hotels: 178
  },
  {
    name: "Nusa Dua",
    description: "Luxury beach resorts",
    image: "https://media.istockphoto.com/id/1485106198/fr/photo/diamond-beach-est-lune-des-plages-les-plus-visit%C3%A9es-de-nusa-penida-indon%C3%A9sie.jpg?s=612x612&w=0&k=20&c=bJgGbEcpI9SeWVdfr_UIfsuIOJfnCIRlvbV4CIJsONI=",
    hotels: 124
  }
];

export function PopularAreas() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Popular Areas</h2>
        <p className="text-muted-foreground mt-2">
          Explore Bali's most sought-after locations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {areas.map((area) => (
          <Link 
            key={area.name} 
            href={`/hotels/${area.name.toLowerCase()}`}
            className="block"
          >
            <Card className="group cursor-pointer overflow-hidden h-full">
              <div className="relative h-48">
                <img
                  src={area.image}
                  alt={area.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <CardContent className="absolute inset-0 flex flex-col justify-end text-white p-4">
                  <h3 className="text-xl font-semibold">{area.name}</h3>
                  <p className="text-sm text-gray-200">{area.description}</p>
                  <div className="flex items-center mt-2 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {area.hotels} hotels
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}