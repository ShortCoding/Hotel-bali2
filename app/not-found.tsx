import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Oops! Looks like you&apos;re lost in paradise
        </h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Even the best travelers sometimes take a wrong turn. Let&apos;s get you back to exploring Bali&apos;s finest hotels.
        </p>
        <Link href="/">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Return to Paradise
          </Button>
        </Link>
      </div>
    </div>
  );
}