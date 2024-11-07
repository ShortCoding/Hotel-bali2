"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, HeartHandshake, Award } from "lucide-react";

const features = [
  {
    title: "Best Price Guarantee",
    description: "We match any comparable price you find elsewhere",
    icon: Shield
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your travel needs",
    icon: Clock
  },
  {
    title: "Trusted Partners",
    description: "Carefully selected hotels and resorts in Bali",
    icon: HeartHandshake
  },
  {
    title: "Verified Reviews",
    description: "Real reviews from real travelers",
    icon: Award
  }
];

export function WhyChooseUs() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Why Choose Us</h2>
        <p className="text-muted-foreground mt-2">
          We make your Bali stay unforgettable
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="text-center">
            <CardContent className="pt-6">
              <feature.icon className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}