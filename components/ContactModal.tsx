"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to the webhook
      const response = await fetch(
        "https://n8n.aiqi.app/webhook-test/789d3331-b72b-46a6-b542-fafb62487570",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            source: "website_contact_form",
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
        setFormSubmitted(true);

        // Reset form after 3 seconds and close modal
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          onClose();
        }, 3000);
      } else {
        console.error("Form submission failed");
        alert(
          "There was an error submitting your message. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 bg-[#004aad]">
              <h2 className="text-xl font-bold text-white">Contact Us</h2>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
              {/* Contact Form - Takes up 3/5 of the space on desktop */}
              <div className="md:col-span-3">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-10">
                    <div className="w-16 h-16 mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <Send size={24} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 text-center">
                      Thank you for contacting us. We&apos;ll get back to you
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#004aad] focus:border-transparent outline-none"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#004aad] focus:border-transparent outline-none"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#004aad] focus:border-transparent outline-none"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#004aad] focus:border-transparent outline-none"
                        required
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        <option value="Mock Interview">Mock Interview</option>
                        <option value="Resume Building">Resume Building</option>
                        <option value="Career Counseling">
                          Career Counseling
                        </option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#004aad] focus:border-transparent outline-none resize-none"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#004aad] hover:bg-[#003a87] text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information - Takes up 2/5 of the space on desktop */}
              <div className="md:col-span-2 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                      <Mail size={18} className="text-[#004aad]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">
                        Email
                      </h4>
                      <a
                        href="mailto:hr@edzeeta.com"
                        className="text-[#004aad] hover:underline text-sm"
                      >
                        hr@edzeeta.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                      <Phone size={18} className="text-[#004aad]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">
                        Phone
                      </h4>
                      <a
                        href="tel:+918073418832"
                        className="text-[#004aad] hover:underline text-sm"
                      >
                        +91-8073418832
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                      <MapPin size={18} className="text-[#004aad]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">
                        Location
                      </h4>
                      <p className="text-gray-600 text-sm">
                        4th Floor, Kondapur, Serilingampally Mandal, Plot no
                        #154, Gachibowli - Miyapur Rd, opposite Harsha Toyota,
                        Kondapur, Hyderabad, Telangana 500084
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Office Hours
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 10:00 AM - 2:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
