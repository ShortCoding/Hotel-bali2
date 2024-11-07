"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function SearchHotels() {
  const router = useRouter();
  const [date, setDate] = useState<Date>();
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (date) searchParams.set("date", date.toISOString());
    if (guests) searchParams.set("guests", guests);
    
    let url = "/hotels";
    if (location) {
      url = `/hotels/${location.toLowerCase()}`;
    }
    
    if (searchParams.toString()) {
      url += `?${searchParams.toString()}`;
    }
    
    router.push(url);
  };

  return (
    <Card className="p-6 shadow-lg -mt-24 relative z-20 bg-white/95 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input 
            id="location" 
            placeholder="Where are you going?" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Check-in</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Guests</Label>
          <div className="flex">
            <Input
              id="guests"
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="rounded-r-none"
            />
            <Button variant="outline" className="rounded-l-none">
              <Users className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-end">
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white"
            onClick={handleSearch}
          >
            <Search className="w-4 h-4 mr-2" />
            Search Hotels
          </Button>
        </div>
      </div>
    </Card>
  );
}