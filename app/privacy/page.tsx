export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Collection and Usage</h2>
            <p className="text-muted-foreground">
              We collect and use data solely for analytics purposes to understand how visitors interact with our website
              and to improve our services. This information helps us enhance our offerings and provide a better user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Email Marketing</h2>
            <p className="text-muted-foreground">
              When you subscribe to our newsletter, we collect your email address to send you marketing offers,
              travel tips, and updates about our services. We want to be clear that:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>Your email will only be used for our own marketing communications</li>
              <li>We will never sell or share your email address with third parties</li>
              <li>You can unsubscribe from our communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to analyze website traffic and improve our services.
              These tools help us understand how visitors use our site and optimize the user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information and maintain its confidentiality.
              We regularly review and update our security practices to ensure the safety of your data.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}