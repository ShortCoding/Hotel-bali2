"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const locations = [
  {
    label: "Ubud",
    value: "ubud",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
    count: 178
  },
  {
    label: "Seminyak",
    value: "seminyak",
    image: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2a?auto=format&fit=crop&q=80",
    count: 203
  },
  {
    label: "Kuta",
    value: "kuta",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    count: 156
  },
  {
    label: "Canggu",
    value: "canggu",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
    count: 145
  },
  {
    label: "Nusa Dua",
    value: "nusa-dua",
    image: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80",
    count: 124
  }
];

const features = [
  { label: "Pool", value: "pool" },
  { label: "Beach Access", value: "beach" },
  { label: "Spa", value: "spa" },
  { label: "Restaurant", value: "restaurant" },
  { label: "Fitness Center", value: "fitness" },
  { label: "Room Service", value: "roomService" }
];

interface HotelFiltersProps {
  defaultLocation?: string;
}

export function HotelFilters({ defaultLocation }: HotelFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(
    searchParams.get("features")?.split(",") || []
  );

  const handleLocationSelect = (locationValue: string) => {
    setSelectedLocation(locationValue);
    const params = new URLSearchParams(searchParams.toString());
    
    if (locationValue !== defaultLocation) {
      router.push(`/hotels/${locationValue}`);
    }
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter(f => f !== feature)
      : [...selectedFeatures, feature];
    
    setSelectedFeatures(newFeatures);
    
    const params = new URLSearchParams(searchParams.toString());
    if (newFeatures.length > 0) {
      params.set("features", newFeatures.join(","));
    } else {
      params.delete("features");
    }
    
    const query = params.toString();
    const path = defaultLocation ? `/hotels/${defaultLocation}` : "/hotels";
    router.push(`${path}${query ? `?${query}` : ""}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Location</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {locations.map((location, index) => (
            <LocationCard
              key={location.value}
              location={location}
              isSelected={location.value === selectedLocation}
              onClick={() => handleLocationSelect(location.value)}
              index={index}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Features</h3>
        <div className="flex flex-wrap gap-2">
          {features.map((feature) => (
            <button
              key={feature.value}
              onClick={() => handleFeatureToggle(feature.value)}
              className={cn(
                "px-4 py-2 rounded-full border transition-colors",
                selectedFeatures.includes(feature.value)
                  ? "bg-primary text-white border-primary"
                  : "border-gray-200 hover:border-primary"
              )}
            >
              {feature.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function LocationCard({ 
  location,
  isSelected, 
  onClick,
  index
}: { 
  location: typeof locations[0];
  isSelected: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card
        className={cn(
          "group cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-lg",
          isSelected && "ring-2 ring-primary"
        )}
        onClick={onClick}
      >
        <div className="relative h-32">
          <img
            src={location.image}
            alt={location.label}
            className="object-cover w-full h-full brightness-75 group-hover:scale-110 transition-transform duration-300"
          />
          <div className={cn(
            "absolute inset-0 transition-colors",
            isSelected ? "bg-primary/40" : "group-hover:bg-primary/20"
          )} />
          <div className="absolute inset-0 p-4 text-white flex flex-col justify-between">
            <div>
              <h4 className="font-semibold">{location.label}</h4>
              <p className="text-sm text-white/90">{location.count} properties</p>
            </div>
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Check className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}