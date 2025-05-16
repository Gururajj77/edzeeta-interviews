// app/privacy-policy/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto py-24 px-4 sm:px-6 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 pt-10">
          Privacy Policy
        </h1>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">
            This Privacy Policy (&quot;Policy&quot;) outlines how EdZeeta Pvt.
            Ltd. (&quot;We,&quot; &quot;Us,&quot; &quot;EdZeeta,&quot;
            &quot;Company,&quot; or &quot;Our&quot;) collects, uses, stores, and
            discloses information provided by you (&quot;You&quot; or
            &quot;User&quot;) when using our website. This Policy forms a legal
            agreement between You and EdZeeta, and your use of our website
            implies your consent to abide by this Policy. We reserve the right
            to modify this Policy at any time, and such changes will be
            effective upon posting on our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            APPLICABILITY
          </h2>
          <p className="text-gray-600 mb-6">
            This Policy applies to the collection, use, storage, and disclosure
            of information, including personal and business data, provided by
            You while using our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            COLLECTION OF INFORMATION
          </h2>
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            Personally Identifiable Information
          </h3>
          <p className="text-gray-600 mb-4">
            We collect and process information from You, which may include:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-2">
              Information provided through forms on the website (e.g., name,
              email address, mailing address, phone number, financial
              information, unique identifiers, username, account number, and
              password).
            </li>
            <li className="mb-2">
              Information shared via email or telephone communication.
            </li>
            <li className="mb-2">Survey responses.</li>
          </ul>

          {/* Additional sections of the privacy policy would continue here */}
          {/* For brevity, I've only included a portion of the policy */}

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            CONTACT
          </h2>
          <p className="text-gray-600 mb-2">
            For any questions or concerns regarding this Policy, please contact
            us at:
          </p>
          <p className="text-gray-600 mb-2">Address: Bangalore, India</p>
          <p className="text-gray-600 mb-2">Phone: +91-8073418832</p>
          <p className="text-gray-600 mb-6">Email: support@edzeeta.com</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            APPLICABLE LAW AND JURISDICTION
          </h2>
          <p className="text-gray-600 mb-8">
            This Privacy Policy is governed by the laws of India, and any
            disputes will be heard in courts located in Bengaluru, India.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
