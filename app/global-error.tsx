"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center space-y-6 px-4">
            <AlertTriangle className="h-24 w-24 mx-auto text-red-500" />
            <h1 className="text-4xl font-bold tracking-tight">
              Unexpected Error
            </h1>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              We've encountered an unexpected error. Our team has been notified and is working on it.
            </p>
            <Button
              onClick={reset}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}