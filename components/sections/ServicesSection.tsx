"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, HelpCircle } from "lucide-react";
import ServiceCard from "@/components/ui/service-card";

export default function ServicesSection() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      icon: MessageSquare,
      title: "Mock Interviews",
      description:
        "Prepare for your next interview with industry professionals",
      features: [
        "60-minute interview sessions",
        "Customized to your target role",
        "Detailed feedback and tips",
      ],
    },
    {
      icon: FileText,
      title: "Resume Building",
      description: "Professional resume crafting and optimization",
      features: [
        "ATS-friendly formatting",
        "Keyword optimization",
        "Accomplishment-focused content",
      ],
    },
    {
      icon: HelpCircle,
      title: "Career Counseling",
      description: "Personalized guidance for your career journey",
      features: [
        "Career path assessment",
        "Job search strategy",
        "Negotiation coaching",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-20 relative">
      {/* Premium background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#004aad] font-medium text-sm mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional support to help you navigate the job market with
            confidence and stand out from the competition
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional premium content */}
        <motion.div
          className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto premium-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-8 h-8 text-[#004aad]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Need a customized service?
              </h3>
              <p className="text-gray-600 mb-0">
                We offer personalized packages tailored to your specific career
                goals and challenges. Contact our team for a customized solution
                that meets your exact requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
