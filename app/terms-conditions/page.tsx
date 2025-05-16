// app/terms-conditions/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms & Conditions | Edzeeta IRP",
  description: "Edzeeta's terms and conditions for website and service usage",
};

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
            updated by us from time to time without prior notice. Please review
            our Privacy Policy, as it forms an integral part of these Terms of
            Use. The version of this Agreement in effect on the date of use
            governs your interactions with the Site. If you disagree with any
            part of this Agreement or our Privacy Policy, please refrain from
            using our Site. If you have questions or concerns, contact us at
            support@edzeeta.com. We appreciate your choosing EdZeeta for your
            educational journey.
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

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Courses Offered and Payment Terms
          </h2>

          <p className="text-gray-600 mb-6">
            Detailed information about our courses, including course offerings
            and prices, can be found on our website. By registering for a
            course, you agree to pay the specified course fees as per the
            pricing schedule indicated on the Site. When making a payment, it is
            essential to provide accurate account information, including valid
            credit card, debit card, or net banking credentials. Additionally,
            you must certify that you are over 18 years of age and legally
            capable of entering into a valid and binding agreement with EDZEETA.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Payment Processing and Account Payment
          </h2>

          <p className="text-gray-600 mb-6">
            EDZEETA may utilize third-party electronic payment processors and
            financial institutions (&quot;EPPs&quot;) to facilitate and process
            financial transactions. By using our services, you hereby grant us
            irrevocable authorization to instruct these EPPs as needed to handle
            your transactions, and you agree that EDZEETA may issue such
            instructions on your behalf in accordance with the requests you
            submit on the Site.
          </p>

          <p className="text-gray-600 mb-4">
            While utilizing any of the EPPs made available on the Site, it is
            important to note that EDZEETA shall not be held responsible or
            assume liability for any loss or damage incurred by you, whether
            directly or indirectly, due to:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-2">
              Lack of authorization for any transactions.
            </li>
            <li className="mb-2">
              Any payment issues arising from the transaction.
            </li>
            <li className="mb-2">
              The decline of a transaction for any reason.
            </li>
          </ul>

          <p className="text-gray-600 mb-6">
            You acknowledge, accept, and agree that the payment facility
            provided by us is neither a banking nor financial service, but
            rather a means to facilitate convenient transactions through EPPs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Modification of Pricing and Billing Terms
          </h2>

          <p className="text-gray-600 mb-6">
            We retain the right to introduce new prices and alter the amount or
            criteria for determining prices or charges related to any of the
            courses we offer at any time. By using our services, you agree to
            comply with these pricing changes and to fulfill all charges,
            including applicable taxes, as per the billing terms in effect at
            the time when the price or charge becomes due.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Intellectual Property
          </h2>

          <p className="text-gray-600 mb-6">
            EdZeeta explicitly reserves all intellectual property rights
            pertaining to all text, programs, products, processes, technology,
            content, software, and other materials presented on this Website.
            The compilation (comprising the collection, arrangement, and
            assembly) of the Website&apos;s content is the exclusive property of
            EdZeeta. Reproduction, either in full or in part, is strictly
            prohibited without the express written consent of EdZeeta.
          </p>

          <p className="text-gray-600 mb-6">
            The trademarks, logos, and slogans showcased on the Site, including
            the mark &quot;EDZEETA,&quot; (collectively referred to as the
            &quot;Trademarks&quot;), are the property of EDZEETA. Nothing on
            this Site should be construed as granting any license or right to
            utilize the Trademarks without the written permission of EdZeeta or
            the respective third-party owner of the Trademarks. Any misuse of
            the Trademarks or any other content on the Site, except as provided
            for in these Terms of Use, is strictly prohibited. Please be advised
            that EdZeeta will vigorously enforce its intellectual property
            rights to the fullest extent permitted by the law.
          </p>

          <p className="text-gray-600 mb-6">
            EdZeeta grants registered users a non-exclusive, non-transferable,
            and revocable right to use the content on the Site solely for
            non-profit, educational, and research purposes, without the right to
            sublicense. EDZEETA respects the intellectual property of others,
            and we request the same from our users and content partners.
            Unauthorized posting, reproduction, copying, distribution,
            modification, public display, or public performance of copyrighted
            works constitutes an infringement of the copyright owner&apos;s
            rights. As a condition of your use of the Site, you agree not to
            employ any feature of the Site to infringe upon the intellectual
            property rights of others in any manner. We retain the right to
            terminate the accounts and block access to the Site of any user who
            repeatedly infringes upon the copyrights or other intellectual
            property rights of EDZEETA or others. These actions may be taken at
            any time, at our sole discretion, with or without notice, and
            without any liability to the terminated user or the user whose
            access is blocked.
          </p>

          <p className="text-gray-600 mb-6">
            The term &quot;Intellectual Property Right,&quot; for the purposes
            of these Terms of Use, encompasses all copyrights (including, but
            not limited to, the exclusive right to reproduce, distribute copies
            of, display, and perform the copyrighted work, and to prepare
            derivative works), copyright registrations and applications,
            trademark rights (including, but not limited to, registrations and
            applications), patent rights (whether registered or unregistered),
            trade names or business names, registered and unregistered design
            rights, mask-work rights, trade secrets, moral rights, author&apos;s
            rights, rights in packaging, goodwill, and other intellectual
            property rights, along with all renewals and extensions thereof and
            all rights or forms of protection of a similar nature or having an
            equivalent or similar effect to any of the above, which may exist
            anywhere globally, regardless of whether any of such rights arise
            under the laws of India or any other state, country, or
            jurisdiction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Data Protection/Privacy Policy
          </h2>

          <p className="text-gray-600 mb-6">
            We reserve the right to modify this Policy at any time, especially
            as required to align with the rules and regulations set forth by
            various governmental and regulatory bodies, or to comply with
            applicable laws and regulations. The updated version of this Policy
            shall become effective when posted on our website or when we notify
            the User. By utilizing the Services or accessing the website
            subsequent to receiving notice of changes or their publication on
            the Website, the User hereby provides their consent to the revised
            terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Restricted Actions
          </h2>

          <p className="text-gray-600 mb-4">
            During your use of the Site, you are prohibited from engaging in the
            following activities:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-2">
              Attempting to copy, modify, duplicate, imitate, reproduce, create
              derivative works from, frame, mirror, or download any part of the
              Site in any form or media or by any means.
            </li>

            <li className="mb-2">
              Attempting to decompile, disassemble, reverse engineer, or
              otherwise discover any source code from any part of the site.
            </li>

            <li className="mb-2">
              Selling, reselling, redistributing, or commercially exploiting any
              material from this Site, except for content specifically and
              expressly made available for redistribution.
            </li>

            <li className="mb-2">
              Accessing or using any part of the Site to build or create a
              product or service similar to or competitive with the business of
              EDZEETA.
            </li>

            <li className="mb-2">
              Attempting to obtain unauthorized access to the site or assisting
              third parties in doing so.
            </li>

            <li className="mb-2">
              Abusing the use of the site, including for advertising or
              solicitation to buy or sell any products and/or for creating,
              sharing, and sending unsolicited commercial messages, bulk email,
              &quot;junk mail,&quot; &quot;spam,&quot; or chain letters.
            </li>

            <li className="mb-2">
              Creating or sending viruses, worms, trojan horses, flood or mail
              bombs, or engaging in denial of service attacks while using the
              Site.
            </li>

            <li className="mb-2">
              Using the Site in any manner that damages, disables, overburdens,
              or impairs the Site, EDZEETA&apos;s systems or servers, or the
              cloud or other platform on which we operate, and/or interferes
              with any other party&apos;s use and enjoyment of the Site.
            </li>

            <li className="mb-2">
              Accessing the site by any means other than through the interface
              provided by us for accessing the Site.
            </li>

            <li className="mb-2">
              Permitting any third party to engage in any of the foregoing
              activities.
            </li>
          </ul>

          <p className="text-gray-600 mb-6">
            You are required to take all reasonable measures to prevent any
            unauthorized access to, or use of, the Site, and in the event of any
            such unauthorized access or use, you must promptly notify us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Third-Party Content
          </h2>

          <p className="text-gray-600 mb-4">
            The Site may offer links to or frame third-party websites or
            resources and may automatically direct Users to sponsors&apos; or
            third parties&apos; websites or resources. You acknowledge and agree
            that EDZEETA bears no responsibility or liability for:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-2">
              The availability or accuracy of such websites or resources; or
            </li>

            <li className="mb-2">
              The content, products, or services provided on or accessible from
              such websites or resources.
            </li>
          </ul>

          <p className="text-gray-600 mb-6">
            The presence of links to these websites or resources does not
            constitute an endorsement by EDZEETA of such websites or resources,
            or the content, products, or services they offer.
          </p>

          <p className="text-gray-600 mb-6">
            You acknowledge your sole responsibility for, and assume all risks
            arising from, your use of any such websites or resources. We advise
            you to review the applicable third party&apos;s terms and policies,
            including privacy and data collection practices, for any website you
            navigate to.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Notifications
          </h2>

          <p className="text-gray-600 mb-6">
            By using our services, you consent to EDZEETA sending you
            notifications and important messages periodically through its
            websites, mobile applications, and email, with the aim of enhancing
            your experience with the services we offer. You acknowledge that we
            may deliver notices to you on our website, via email to an email
            address you have provided, or through alternative means, including
            but not limited to your mobile number or telephone. It is your
            responsibility to ensure that your contact information remains
            current and up-to-date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            No Representations or Warranties
          </h2>

          <p className="text-gray-600 mb-6">
            Your access to the Site is solely at your own risk. Our services are
            provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis
            without any warranties of any kind, whether express or implied,
            including but not limited to implied warranties of merchantability,
            fitness for a particular purpose, title, and non-infringement.
            EDZEETA makes no representations regarding the completeness or
            accuracy of the information provided on the Site. Furthermore,
            EDZEETA does not endorse or vouch for the reliability or accuracy of
            any content or information distributed through or accessed from the
            Site and has not conducted any investigation into such information.
          </p>

          <p className="text-gray-600 mb-6">
            To the extent permitted by law, EDZEETA assumes no liability or
            responsibility for any errors or omissions in the content of the
            Site. EDZEETA has not reviewed all the links provided on the Site
            and is not responsible for the content of any off-Site pages.
            Clicking on hyperlinks and visiting any off-Site pages is done
            entirely at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Change or Termination
          </h2>

          <p className="text-gray-600 mb-6">
            We reserve the right, without prior notice, to make changes to the
            Site, cease providing the Site, applications, or services, or
            establish usage limits for the Site. We may permanently or
            temporarily terminate or suspend your access to the Site without
            notice or liability, for any reason or for no reason, including if,
            in our sole discretion, you breach any provision of these Terms of
            Use. In the event of the termination of these Terms of Use or your
            access to the Site for any reason or no reason, you will remain
            bound by these Terms of Use, which, by their nature, should survive
            termination. This includes but is not limited to ownership
            provisions, warranty disclaimers, indemnification, and limitations
            of liability.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Limitation of Liability
          </h2>

          <p className="text-gray-600 mb-6">
            To the fullest extent permitted by applicable law, neither EDZEETA
            nor its affiliates shall be liable under any theory of liability
            (whether in contract, tort, negligence, or otherwise) for any
            indirect, incidental, special, consequential, punitive, or exemplary
            damages. This includes damages for the loss of revenues, profits,
            goodwill, use, data, or other intangible losses, even if such
            parties were advised of, knew of, or should have known of the
            possibility of such damages. These damages may arise from or relate
            to the Sites, Services, or these Terms of Use.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Indemnification
          </h2>

          <p className="text-gray-600 mb-6">
            The User agrees to indemnify, defend, and hold harmless EDZEETA and
            its Affiliates from and against any and all claims, liabilities,
            damages, losses, costs, expenses, and fees of any kind, including
            reasonable attorneys&apos; fees and legal costs. This
            indemnification applies to claims arising from or related to:
          </p>

          <p className="text-gray-600 mb-4">
            (a) Any information, including User Content or any other content,
            submitted, posted, or transmitted by the User or anyone using the
            User&apos;s account on or through the Sites or Services.
          </p>

          <p className="text-gray-600 mb-4">
            (b) The use of the Sites or Services by the User or anyone using the
            User&apos;s account.
          </p>

          <p className="text-gray-600 mb-4">
            (c) The violation of these Terms of Use by the User or anyone using
            the User&apos;s account.
          </p>

          <p className="text-gray-600 mb-6">
            (d) The violation of any rights of any third party, including
            intellectual property, privacy, publicity, or other proprietary
            rights, by the User or anyone using the User&apos;s account.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Jurisdiction
          </h2>

          <p className="text-gray-600 mb-6">
            These Terms of Use shall be governed by the laws of India, and any
            dispute arising hereunder shall be exclusively subject to the
            jurisdiction of the courts in Bengaluru, India.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            International Use
          </h2>

          <p className="text-gray-600 mb-6">
            The Site is controlled and operated from within India. EDZEETA makes
            no representation that the Site is appropriate or available in
            locations outside of India. Individuals who choose to access the
            Site or utilize our services from other locations do so at their own
            risk and are solely responsible for complying with applicable laws
            in their respective jurisdictions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            General
          </h2>

          <p className="text-gray-600 mb-6">
            The failure of EDZEETA to enforce any right or provision of these
            Terms of Use shall not constitute a waiver of future enforcement of
            that right or provision. Any waiver of such right or provision shall
            be effective only if it is in writing and signed by a duly
            authorized representative of EDZEETA. Unless expressly stated in
            these Terms of Use, the exercise by either party of any of its
            remedies under these Terms of Use shall not prejudice its other
            remedies under these Terms of Use or otherwise. If, for any reason,
            a court of competent jurisdiction finds any provision of these Terms
            of Use to be invalid or unenforceable, that provision shall be
            enforced to the maximum extent permitted by law, and the other
            provisions of these Terms of Use shall remain in full force and
            effect.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Miscellaneous
          </h2>

          <p className="text-gray-600 mb-6">
            Except as expressly provided in these Terms of Use, there shall be
            no third-party beneficiaries to the Terms of Use. EDZEETA shall have
            the right to assign its rights or delegate any of its
            responsibilities under these Terms of Use to an affiliate or in
            connection with a merger, consolidation, or reorganization of
            EDZEETA or the sale of substantially all of its assets.
          </p>

          <p className="text-gray-600 mb-6">
            In the event that any provision of this Agreement, or its
            application, becomes or is declared by a court of competent
            jurisdiction to be illegal, void, or unenforceable, the remainder of
            this Agreement will continue in full force and effect, and the
            application of such provision to other persons or circumstances will
            be interpreted to reasonably effect the intent of the parties
            hereto.
          </p>

          <p className="text-gray-600 mb-6">
            This Agreement constitutes the entire agreement between EDZEETA and
            the User regarding the subject matter hereof, and it supersedes any
            prior arrangement, understanding, or agreement between the parties,
            whether written or oral, pertaining to the subject matter hereof.
          </p>

          <p className="text-gray-600 mb-6">
            Notwithstanding anything to the contrary herein, EDZEETA shall not
            be held liable for any delay or failure in performance or
            non-availability of the services resulting, directly or indirectly,
            from acts of nature, events, omissions, accidents, or causes beyond
            its reasonable control. These causes may include, but are not
            limited to, internet failure, network or computer equipment
            failures, telecommunication equipment failure, electrical power
            failures, strikes, lock-outs, or other industrial disputes, labor
            disputes, riots, insurrections, civil disturbances, shortages of
            labor or materials, fires, floods, storms, explosions, breakdown of
            plant or machinery, acts of God, war, governmental actions or
            orders, or orders of domestic or foreign courts or tribunals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Online Internship Scope
          </h2>

          <p className="text-gray-600 mb-6">
            &quot;The fees that we charge the students are solely for their
            training through live classes and recorded videos, and do not cover
            the internship itself. EDZEETA does not impose any charges for the
            internship project phase, as it is provided entirely as a
            complimentary service.&quot;
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Purpose
          </h2>

          <p className="text-gray-600 mb-8">
            This policy outlines the procedures and processes for handling
            refund requests and addresses situations that may necessitate the
            processing of refunds.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
