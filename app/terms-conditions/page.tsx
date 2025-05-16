// app/terms-conditions/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto py-24 px-4 sm:px-6 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 pt-10">
          Terms & Conditions
        </h1>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">
            This document is published in accordance with the provisions of Rule
            3 (1) of the Information Technology (Intermediaries Guidelines)
            Rules, 2011 that require publishing the rules and regulations,
            Privacy Policy and Terms of Use for access or usage of the
            www.edzeeta.com
          </p>

          <p className="text-gray-600 mb-6">
            EDZEETA PRIVATE LIMITED TERMS OF USE AGREEMENT: This Agreement
            governs your use of the EdZeeta website (&quot;Site&quot;). By
            accessing or submitting any information to us, you consent to and
            agree to be bound by these Terms of Use and our Privacy Policy,
            which is incorporated by reference. Your use of the Site, including
            browsing and visiting, indicates your acceptance of this Agreement
            and all other operating rules, policies, and procedures that may be
            updated by us from time to time without prior notice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Account Registration
          </h2>
          <p className="text-gray-600 mb-6">
            <strong>Age Restriction and Entity Representation:</strong> If you
            are under the age of 18, we kindly request that you refrain from
            signing up for an account on our platform. If you are accessing or
            using our site on behalf of any entity, you hereby represent and
            warrant that you are authorized to accept these Terms of Use on
            behalf of that entity. Furthermore, you acknowledge and agree that
            in the event of any violation of these Terms of Use while using the
            site on behalf of said entity, the entity shall be held responsible
            to EDZEETA for such violations.
          </p>

          <p className="text-gray-600 mb-6">
            <strong>Access and Registration:</strong> While certain areas of our
            site(s) may be accessible without requiring registration, please be
            aware that to access specific features of the Site or to post
            content, registration and the creation of an account
            (&quot;Account&quot;) are necessary. During the registration
            process, it is imperative that you provide us with up-to-date,
            complete, and accurate information. Upon registration, you will be
            required to furnish a username and password, in addition to other
            details specified in our registration process. Safeguard your
            password and refrain from allowing anyone else to access your
            Account or taking any actions that could compromise its security. We
            retain the right to terminate any account if we suspect
            non-compliance with any or all of the terms at any time.
          </p>

          {/* Additional sections would be added here */}

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            JURISDICTION
          </h2>
          <p className="text-gray-600 mb-6">
            These Terms of Use shall be governed by the laws of India, and any
            dispute arising hereunder shall be exclusively subject to the
            jurisdiction of the courts in Bengaluru, India.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            INTERNATIONAL USE
          </h2>
          <p className="text-gray-600 mb-6">
            The Site is controlled and operated from within India. EDZEETA makes
            no representation that the Site is appropriate or available in
            locations outside of India. Individuals who choose to access the
            Site or utilize our services from other locations do so at their own
            risk and are solely responsible for complying with applicable laws
            in their respective jurisdictions.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
