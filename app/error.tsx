"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white">
      <div className="text-center space-y-6 px-4">
        <AlertTriangle className="h-24 w-24 mx-auto text-red-500" />
        <h1 className="text-4xl font-bold tracking-tight">
          Something went wrong!
        </h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Don't worry, it's not you - it's us. Please try again or contact our support if the problem persists.
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
  );
}