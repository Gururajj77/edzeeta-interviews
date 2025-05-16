// app/refund-policy/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto py-24 px-4 sm:px-6 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 pt-10">
          Refund Policy
        </h1>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">
            At EdZeeta, we strive to provide exceptional learning experiences to
            our students. We understand that circumstances may arise that
            necessitate a refund request. Please review our refund policy
            carefully.
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-4">
              <strong>Pre-Registration and Full Payment:</strong> The
              pre-registration amount and the full amount paid by our students
              are non-refundable. Students make payments based on their
              interests and preferences, and once their slot is confirmed, the
              batch is finalized, and access to our Learning Management System
              (LMS) will be granted according to the chosen batch. Due to the
              resources and preparations involved in these processes, refunds
              for pre-registration and full payments are not possible.
            </li>

            <li className="mb-4">
              <strong>Exceptional Circumstances:</strong> We understand that
              exceptional circumstances may arise. In such cases, please contact
              our support team at support@edzeeta.com to discuss your situation.
              We will review each case on an individual basis and work towards a
              suitable solution.
            </li>

            <li className="mb-4">
              <strong>Course Cancellation:</strong> In the unlikely event that
              EdZeeta cancels a full course, a full refund of the course fee
              will be provided to all registered students or you can choose any
              alternative course.
            </li>

            <li className="mb-4">
              <strong>Change of Batch:</strong> If a student requests a change
              of batch before the course commencement date and if a suitable
              alternative is available, we will make every effort to accommodate
              the request without additional charges. However, this is subject
              to availability and the discretion of EdZeeta.
            </li>

            <li className="mb-4">
              <strong>Refund Processing:</strong> Refund requests, if
              applicable, will be processed within 5-7 working days from the
              date of approval.
            </li>
          </ul>

          <p className="text-gray-600 mb-6">
            By enrolling in our courses, you agree to abide by this refund
            policy. We encourage you to carefully consider your commitment
            before registering for a course with us.
          </p>

          <p className="text-gray-600 mb-6">
            For any refund-related inquiries or requests, please contact our
            support team at support@edzeeta.com. We are here to assist you and
            address any concerns you may have.
          </p>

          {/* Additional sections would be added here */}
        </div>
      </div>
      <Footer />
    </main>
  );
}
