"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Top 10 Luxury Villas in Ubud",
    excerpt: "Discover the most stunning private villas surrounded by rice terraces and jungle views.",
    date: "2024-03-20",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
    slug: "top-luxury-villas-ubud"
  },
  {
    title: "Best Time to Visit Bali",
    excerpt: "A complete guide to Bali's seasons and when to plan your perfect trip.",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2a?auto=format&fit=crop&q=80",
    slug: "best-time-visit-bali"
  },
  {
    title: "Hidden Beaches of Uluwatu",
    excerpt: "Explore secluded beaches and secret coves along Bali's southern peninsula.",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80",
    slug: "hidden-beaches-uluwatu"
  }
];

export function BlogPosts() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Travel Guide</h2>
        <p className="text-muted-foreground mt-2">
          Tips and insights for your Bali adventure
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.title} className="overflow-hidden group">
            <div className="relative h-48">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <CardHeader>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Read More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}