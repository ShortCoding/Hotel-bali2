import { getBlogPost, getBlogPostsMeta } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getBlogPostsMeta();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="relative h-[400px] -mx-4 sm:-mx-6 lg:-mx-8 mb-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <div className="flex items-center">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full mr-2"
                />
                {post.author.name}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}