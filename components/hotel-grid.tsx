"use client";

import { Hotel } from "@/lib/hotels";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";

export function HotelGrid({ hotels }: { hotels: Hotel[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hotels.map((hotel) => (
        <Card key={hotel.id} className="overflow-hidden group">
          <div className="relative h-64">
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
                <span className="ml-1 text-sm">{hotel.rating}</span>
                {hotel.reviews && (
                  <span className="text-sm text-muted-foreground ml-1">
                    ({hotel.reviews} reviews)
                  </span>
                )}
              </div>
            </CardTitle>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              {hotel.location}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground line-clamp-2">
              {hotel.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {hotel.amenities.map((amenity) => (
                <Badge key={amenity} variant="outline">
                  {amenity}
                </Badge>
              ))}
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}