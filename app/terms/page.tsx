export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Hotels Bali, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use of Service</h2>
            <p className="text-muted-foreground mb-4">
              Our service is provided for personal and non-commercial use. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use the service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of our service</li>
              <li>Copy, modify, or distribute our content without written permission</li>
              <li>Use any automated systems or software to extract data from our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Booking and Reservations</h2>
            <p className="text-muted-foreground mb-4">
              When making a booking through our platform:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for any charges, fees, or taxes associated with your booking</li>
              <li>Cancellation policies vary by property and are clearly stated during the booking process</li>
              <li>We act as an intermediary between you and the accommodation providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Content and Reviews</h2>
            <p className="text-muted-foreground">
              By submitting reviews, comments, or other content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, publish, and distribute such content. You represent that you own or have the necessary rights to such content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Pricing and Availability</h2>
            <p className="text-muted-foreground">
              All prices are displayed in the selected currency and are subject to change. While we strive to ensure accuracy, if we discover a pricing error, we reserve the right to cancel any bookings made at the incorrect price.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              We provide our service on an "as is" and "as available" basis. We do not guarantee that our service will be uninterrupted, timely, secure, or error-free. We are not liable for any indirect, incidental, special, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Affiliate Partnerships</h2>
            <p className="text-muted-foreground">
              We may participate in affiliate partnerships and receive commissions for bookings made through our links. This does not affect the price you pay, and we maintain editorial independence in our content and recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Modifications to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Continued use of our service after any changes constitutes acceptance of the new terms. We will notify users of significant changes through our website or email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us through our website. We will make every effort to respond to your inquiry promptly.
            </p>
          </section>

          <div className="text-sm text-muted-foreground mt-8 pt-8 border-t">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </main>
  );
}