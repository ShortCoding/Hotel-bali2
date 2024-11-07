import { HotelFilters } from "@/components/hotel-filters";
import { HotelGrid } from "@/components/hotel-grid";
import { getHotels, getHotelsByLocation } from "@/lib/hotels";
import { Separator } from "@/components/ui/separator";

export default function HotelsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  // Get all hotels or filter by location
  const allHotels = getHotels();
  const locationHotels = searchParams.location
    ? getHotelsByLocation(searchParams.location)
    : allHotels;

  // Apply feature filters
  const features = searchParams.features?.split(",") || [];
  const filteredHotels = features.length
    ? locationHotels.filter(hotel => 
        features.every(feature => 
          hotel.features[feature as keyof typeof hotel.features]
        )
      )
    : locationHotels;

  // Get location name for display
  const locationName = searchParams.location
    ? searchParams.location.split("-").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(" ")
    : null;

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {locationName 
              ? `Hotels in ${locationName}, Bali`
              : "Find Your Perfect Stay in Bali"
            }
          </h1>
          <p className="text-xl text-muted-foreground">
            {locationName
              ? `Discover the best places to stay in ${locationName}`
              : "Browse our curated selection of hotels, resorts, and villas"
            }
          </p>
        </div>

        <HotelFilters defaultLocation={searchParams.location} />
        <Separator className="my-8" />
        <div className="text-sm text-muted-foreground mb-4">
          Showing {filteredHotels.length} properties
          {locationName && ` in ${locationName}`}
        </div>
        <HotelGrid hotels={filteredHotels} />
      </div>
    </main>
  );
}