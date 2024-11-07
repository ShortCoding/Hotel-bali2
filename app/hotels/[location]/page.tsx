import { HotelFilters } from "@/components/hotel-filters";
import { HotelGrid } from "@/components/hotel-grid";
import { getHotelsByLocation } from "@/lib/hotels";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export async function generateStaticParams() {
  return [
    { location: "ubud" },
    { location: "seminyak" },
    { location: "kuta" },
    { location: "canggu" },
    { location: "nusa-dua" },
  ];
}

export async function generateMetadata({ params }: { params: { location: string } }) {
  const location = params.location.split("-").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");

  return {
    title: `Hotels in ${location}, Bali | Best Places to Stay`,
    description: `Find the best hotels in ${location}, Bali. Compare prices, read reviews, and book your perfect ${location} hotel.`,
  };
}

export default function LocationHotelsPage({ 
  params,
  searchParams,
}: { 
  params: { location: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const hotels = getHotelsByLocation(params.location);
  
  if (!hotels) {
    notFound();
  }

  const features = searchParams.features?.split(",") || [];
  
  const filteredHotels = features.length
    ? hotels.filter(hotel => 
        features.every(feature => 
          hotel.features[feature as keyof typeof hotel.features]
        )
      )
    : hotels;

  const location = params.location.split("-").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Hotels in {location}</h1>
          <p className="text-xl text-muted-foreground">
            Discover the best places to stay in {location}, Bali
          </p>
        </div>

        <HotelFilters defaultLocation={params.location} />
        <Separator className="my-8" />
        <div className="text-sm text-muted-foreground mb-4">
          Showing {filteredHotels.length} properties in {location}
        </div>
        <HotelGrid hotels={filteredHotels} />
      </div>
    </main>
  );
}