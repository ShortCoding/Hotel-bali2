"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="rounded-2xl bg-primary/5 p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <Mail className="h-12 w-12 text-primary mx-auto" />
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Stay Updated</h2>
          <p className="text-muted-foreground">
            Subscribe to our newsletter for exclusive deals and travel tips
          </p>
        </div>
        <form className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-muted-foreground">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
        </p>
      </div>
    </section>
  );
}