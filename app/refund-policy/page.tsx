// app/refund-policy/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Refund Policy | Edzeeta IRP",
  description:
    "Edzeeta's refund policy, terms, and conditions for course payments",
};

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
              our support team at hr@edzeeta.com to discuss your situation. We
              will review each case on an individual basis and work towards a
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

          <p className="text-gray-600 mb-8">
            For any refund-related inquiries or requests, please contact our
            support team at hr@edzeeta.com. We are here to assist you and
            address any concerns you may have.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Refund Method
          </h2>
          <p className="text-gray-600 mb-4">
            If refund is approved then, your refund will be processed based on
            the original payment source as follows:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-4">
              <strong>Payment via Card:</strong> If your initial payment was
              made using a card, the refund will be credited back to that card.
              Please note that depending on your card issuer, it may take up to
              30 days for the refund to be reflected in your account.
            </li>

            <li className="mb-4">
              <strong>Payment via Bank Account:</strong> If your payment was
              made directly from your bank account, the refund will be
              transferred back to the same bank account.
            </li>

            <li className="mb-4">
              <strong>
                Payment via Other Sources (e.g., Instamojo, PhonePe, Google Pay,
                etc.):
              </strong>{" "}
              If your payment was originally processed through an alternate
              source such as Instamojo, PhonePe, Google Pay, or similar methods,
              the refund will be returned to the same source.
            </li>
          </ul>

          <p className="text-gray-600 mb-8">
            Please be aware that we do not provide cash refunds under any
            circumstances. If you have any questions or concerns regarding your
            refund, please do not hesitate to contact our customer support team
            for assistance at hr@edzeeta.com.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Change of Course Policy
          </h2>
          <p className="text-gray-600 mb-4">
            EdZeeta permits students to request a change of course to an
            alternative option following these guidelines:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-2">
              EdZeeta must be notified in writing at least 1 week prior to the
              commencement date of the original course.
            </li>

            <li className="mb-2">
              The alternative course must have available seats and should be
              completed within 1 month from the original course finish date.
            </li>

            <li className="mb-2">
              If a student is switching to a course of higher value, they are
              required to pay the difference in course fees. However, if
              switching to a course of lower value, EdZeeta is not responsible
              for reimbursing the difference in fees.
            </li>
          </ul>

          <p className="text-gray-600 mb-6">
            Please note that course changes are allowed only once during the
            program.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Process for Change of Course
          </h2>
          <ul className="list-disc pl-6 mb-8 text-gray-600">
            <li className="mb-2">
              Contact EdZeeta at hr@edzeeta.com to initiate your course change
              request.
            </li>

            <li className="mb-2">
              Upon approval, complete the &quot;Course Change Form&quot;
              provided and submit it within 3 business days.
            </li>

            <li className="mb-2">
              If there is a difference in course costs (if applicable), make the
              necessary payment and submit the payment receipt to
              hr@edzeeta.com.
            </li>

            <li className="mb-2">
              You will receive confirmation of your course change request within
              5-7 business days.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Reschedule Policy
          </h2>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            Rescheduling by EdZeeta
          </h3>
          <p className="text-gray-600 mb-4">
            Rescheduling initiated by EdZeeta is governed by the following
            guidelines:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-2">
              If a course does not commence within 10 business days of the
              published commencement date, the student is entitled to either
              receive a complimentary course or opt to join a different
              batch/course.
            </li>

            <li className="mb-2">
              EdZeeta will make every effort to conduct the course as scheduled.
              However, in the event of a course being rescheduled due to
              unforeseen delays on our end, EdZeeta is responsible only for the
              cost of the course. Any travel, logistics, or personal expenses
              incurred as a result of this rescheduling will not be refunded.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            Rescheduling by Customer
          </h3>
          <p className="text-gray-600 mb-4">
            Rescheduling requests made by customers are governed by the
            following guidelines:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-2">
              The reschedule request must be submitted at least 7 business days
              before the scheduled commencement of the course.
            </li>

            <li className="mb-2">
              The rescheduled date should fall within 90 days of the initial
              commencement date.
            </li>

            <li className="mb-2">
              Rescheduling does not allow the customer to change their course
              selection.
            </li>

            <li className="mb-2">
              Rescheduling is subject to seat availability.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            Process for Rescheduling of Course
          </h3>
          <ul className="list-disc pl-6 mb-8 text-gray-600">
            <li className="mb-2">
              Contact EdZeeta at hr@edzeeta.com with your course rescheduling
              request.
            </li>

            <li className="mb-2">
              Upon approval, complete the &quot;Reschedule Course Form&quot;
              provided and submit it within 3 business days.
            </li>

            <li className="mb-2">
              If there is a difference in course costs (if applicable), make the
              necessary payment and submit the payment receipt to
              hr@edzeeta.com.
            </li>

            <li className="mb-2">
              You will receive confirmation of your course reschedule request
              within 5-7 business days.
            </li>

            <li className="mb-2">
              Please note that if the rescheduled course has a higher value,
              students are required to pay the difference in course fees.
              However, if switching to a course of lower value, EdZeeta is not
              responsible for reimbursing the difference in fees.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Cancellation Policy
          </h2>
          <p className="text-gray-600 mb-6">
            EdZeeta retains the right to cancel any session or modify the
            session&apos;s location under circumstances such as unavailability
            of the instructor, insufficient participants, or force majeure
            events including earthquakes, fire, floods, riots, curfew, bandhs,
            protests, strikes, civil unrest, and similar occurrences. Please be
            aware that our cancellation policy is governed by the following
            terms:
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            Cancellation by EdZeeta
          </h3>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-2">
              In the event EdZeeta permanently cancels a workshop, seminar, or
              conference, participants will receive a 100% refund.
            </li>

            <li className="mb-2">
              If a batch is delayed for more than 1 month, participants will be
              granted complimentary course access.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            Change of Location by EdZeeta
          </h3>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li className="mb-2">
              If EdZeeta changes the location of an event, it will make
              arrangements to provide a similar infrastructure as originally
              planned.
            </li>

            <li className="mb-2">
              EdZeeta will not cover any personal expenses incurred due to the
              change of location under any circumstances.
            </li>

            <li className="mb-2">
              EdZeeta reserves the right to either accommodate students in a
              similar infrastructure as initially decided or provide
              compensation as deemed appropriate.
            </li>
          </ul>

          <p className="text-gray-600 mb-8">
            Please note that while we strive to provide the best learning
            experience, unforeseen circumstances may occasionally require such
            actions. Rest assured, we will make every effort to minimize
            disruptions and provide suitable alternatives.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
