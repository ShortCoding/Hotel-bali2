"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Timer, Sparkles, Tag } from "lucide-react";

const offers = [
  {
    title: "Early Bird Special",
    description: "Book 60 days in advance and save up to 25%",
    icon: Timer,
    discount: "25% OFF",
    validUntil: "Limited time offer"
  },
  {
    title: "Luxury Package",
    description: "Free spa treatment and airport transfer included",
    icon: Sparkles,
    discount: "BONUS",
    validUntil: "For luxury villas"
  },
  {
    title: "Last Minute Deals",
    description: "Special rates for stays within the next 7 days",
    icon: Tag,
    discount: "40% OFF",
    validUntil: "Based on availability"
  }
];

export function SpecialOffers() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Special Offers</h2>
        <p className="text-muted-foreground mt-2">
          Exclusive deals for your dream vacation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <Card key={offer.title} className="relative overflow-hidden group">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-primary text-white">
                {offer.discount}
              </Badge>
            </div>
            <CardHeader>
              <offer.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{offer.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{offer.description}</p>
              <p className="text-sm text-muted-foreground">{offer.validUntil}</p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                View Deal
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}