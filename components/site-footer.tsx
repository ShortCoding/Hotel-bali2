import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              We help travelers find the perfect accommodation in Bali, from luxury resorts to boutique hotels.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/hotels">Hotels</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-sm text-muted-foreground space-y-4">
          <p className="text-center">
            © {new Date().getFullYear()} Hotels Bali. All rights reserved.
          </p>
          <p className="text-center text-xs max-w-2xl mx-auto">
            This website contains affiliate links. When you book through our links, we may earn a commission at no additional cost to you. Your support helps us maintain and improve our service.
          </p>
        </div>
      </div>
    </footer>
  );
}