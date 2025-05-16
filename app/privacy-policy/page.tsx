// app/privacy-policy/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | Edzeeta IRP",
  description: "Edzeeta's Privacy Policy and data protection information",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto py-24 px-4 sm:px-6 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 pt-10">
          PRIVACY POLICY
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

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            Non-Personal Information
          </h3>
          <p className="text-gray-600 mb-6">
            When You visit our website, our servers may automatically record
            certain information sent by your web browser. This information may
            include web requests, IP address, browser type, referring/exit
            pages, URLs, click data, domain names, and more. This information is
            used for analysis, security, and improving our website.
          </p>
          <p className="text-gray-600 mb-6">
            We may use web beacons to track online usage patterns anonymously
            and in HTML-based emails to monitor email open rates. No personally
            identifiable information is collected using these web beacons.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Cookies</h3>
          <p className="text-gray-600 mb-4">
            We use cookies to enhance your online experience. Cookies are small
            files stored on your computer&apos;s hard drive that contain
            anonymous identifiers. They help Us:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-2">Estimate user size and usage patterns.</li>
            <li className="mb-2">
              Store preferences and customize website content.
            </li>
            <li className="mb-2">Expedite searches.</li>
            <li className="mb-2">Recognize You on return visits.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            USE OF INFORMATION
          </h2>
          <p className="text-gray-600 mb-4">
            We may use the collected information:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-2">
              To improve, monitor, and administer our website.
            </li>
            <li className="mb-2">Conduct research and analysis.</li>
            <li className="mb-2">Diagnose technical issues.</li>
            <li className="mb-2">Maintain security.</li>
            <li className="mb-2">Customize content based on your interests.</li>
            <li className="mb-2">Notify You of changes to our website.</li>
            <li className="mb-2">
              Comply with legal and regulatory obligations.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            THIRD-PARTY SERVICES
          </h2>
          <p className="text-gray-600 mb-6">
            We may share information with third-party service providers to
            facilitate services such as payment processing. These providers have
            their own privacy policies, and we encourage You to review them.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            DISCLOSURE OF INFORMATION
          </h2>
          <p className="text-gray-600 mb-6">
            We do not sell, rent, or provide your personal/business information
            to third parties except as stated in this Policy. We may share
            information with third parties in the following cases:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-2">
              When required by law, court orders, or legal proceedings.
            </li>
            <li className="mb-2">
              In the event of business sales, mergers, or dissolutions.
            </li>
            <li className="mb-2">
              To operate and maintain our website (e.g., payment processors,
              email service providers).
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            YOUR CHOICES
          </h2>
          <p className="text-gray-600 mb-6">
            You may update or correct your account information and email
            preferences at any time. To request the removal of your personal
            information from our database, please contact us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            LINKS TO THIRD-PARTY SITES
          </h2>
          <p className="text-gray-600 mb-6">
            Our website may contain links to third-party websites with their own
            privacy policies. We are not responsible for these policies or the
            content of external websites.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            INFORMATION STORAGE AND SECURITY
          </h2>
          <p className="text-gray-600 mb-6">
            We employ physical, electronic, and administrative safeguards to
            protect your data. However, no security measures are 100% foolproof.
            You should safeguard your login information and use strong passwords
            to protect your account.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            EXCLUSION
          </h2>
          <p className="text-gray-600 mb-6">
            This Policy does not cover unsolicited information provided by You
            or information posted in public website areas. Such information is
            non-confidential, and We may use or disclose it without restriction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            SEVERABILITY
          </h2>
          <p className="text-gray-600 mb-6">
            If any part of this Policy is found to be invalid or unenforceable,
            it will not affect the validity of the remaining portions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            GOVERNING LAW AND DISPUTE RESOLUTION
          </h2>
          <p className="text-gray-600 mb-6">
            This Policy is governed by Indian law, and disputes will be resolved
            in Bengaluru, India.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            FOREIGN JURISDICTION
          </h2>
          <p className="text-gray-600 mb-6">
            Our website&apos;s content is intended for use in India. If You
            access our website from other locations, You are responsible for
            compliance with local laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            CHANGES TO THE PRIVACY POLICY
          </h2>
          <p className="text-gray-600 mb-6">
            We may modify this Policy to comply with regulations or for other
            reasons. Your continued use of our website after changes are posted
            indicates your consent to the updated terms.
          </p>

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
