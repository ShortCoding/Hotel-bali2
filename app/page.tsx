import { FeaturedHotels } from '@/components/featured-hotels';
import { Hero } from '@/components/hero';
import { PopularAreas } from '@/components/popular-areas';
import { Newsletter } from '@/components/newsletter';
import { BlogPosts } from '@/components/blog-posts';
import { FAQ } from '@/components/faq';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <FeaturedHotels />
        <PopularAreas />
        <BlogPosts />
        <FAQ />
        <Newsletter />
      </div>
    </main>
  );
}