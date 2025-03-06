"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  FileText,
  HelpCircle,
  ChevronRight,
  X,
} from "lucide-react";
import ServiceCard from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

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
        "Prepare for your next interview with industry professionals who have worked at top companies.",
      features: [
        "60-minute interview sessions",
        "Customized to your target role",
        "Detailed feedback and tips",
        "Role-specific question preparation",
        "Follow-up support",
      ],
      color: "blue",
      details:
        "Our mock interviews simulate real job interviews for your specific industry and role. We provide constructive feedback to improve your performance and boost your confidence. Includes recorded session for self-review and personalized improvement plan.",
    },
    {
      icon: FileText,
      title: "Resume Building",
      description:
        "Professional resume crafting and optimization to get past ATS systems and impress recruiters.",
      features: [
        "ATS-friendly formatting",
        "Keyword optimization",
        "Accomplishment-focused content",
        "Visual design enhancement",
        "Multiple format options",
      ],
      color: "green",
      details:
        "Our resume experts craft compelling, ATS-optimized resumes that highlight your achievements and skills. We focus on quantifiable results and industry-specific keywords to increase your interview callbacks by up to 40%.",
    },
    {
      icon: HelpCircle,
      title: "Career Counseling",
      description:
        "Personalized guidance for your career journey from experienced industry professionals.",
      features: [
        "Career path assessment",
        "Job search strategy",
        "Negotiation coaching",
        "Long-term career planning",
        "Industry-specific insights",
      ],
      color: "purple",
      details:
        "Our career counseling helps you navigate job market complexities with personalized advice. We'll help you identify your strengths, explore suitable career paths, and develop effective strategies for job searching and salary negotiation.",
    },
  ];

  const handleCardClick = (index: number) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  return (
    <section
      id="services"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 relative"
    >
      {/* Premium background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 sm:right-20 w-24 sm:w-32 h-24 sm:h-32 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 sm:left-20 w-32 sm:w-40 h-32 sm:h-40 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-green-100/20 rounded-full blur-2xl -z-10"></div>

      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
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
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Professional support to help you navigate the job market with
            confidence and stand out from the competition
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
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
                y: -5,
                transition: { duration: 0.3 },
              }}
              onClick={() => handleCardClick(index)}
              className="cursor-pointer"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                isActive={expandedService === index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for expanded service details */}
        <AnimatePresence>
          {expandedService !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
              onClick={() => setExpandedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => setExpandedService(null)}
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    {expandedService !== null &&
                      (() => {
                        const ServiceIcon = services[expandedService].icon;
                        return (
                          <ServiceIcon className="w-6 h-6 text-[#004aad]" />
                        );
                      })()}
                  </div>
                  {expandedService !== null && (
                    <h3 className="text-xl font-bold">
                      {services[expandedService].title}
                    </h3>
                  )}
                </div>

                {expandedService !== null && (
                  <>
                    <p className="text-gray-700 mb-6">
                      {services[expandedService].details}
                    </p>

                    <h4 className="font-medium mb-3">What&apos;s included:</h4>
                    <ul className="space-y-2 mb-6">
                      {services[expandedService].features.map(
                        (feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <ChevronRight className="h-3 w-3 text-[#004aad]" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        )
                      )}
                    </ul>

                    <Button className="w-full bg-[#004aad] hover:bg-[#003a87] text-white py-2">
                      Get Started
                    </Button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional premium content */}
        <motion.div
          className="mt-12 sm:mt-16 p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto premium-shadow relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-white -z-10"></div>

          {/* Decorative element */}
          <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-blue-100/30 -z-10"></div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-8 h-8 text-[#004aad]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Need a customized service?
              </h3>
              <p className="text-gray-600 mb-4">
                We offer personalized packages tailored to your specific career
                goals and challenges. Contact our team for a customized solution
                that meets your exact requirements.
              </p>
              <Button className="bg-[#004aad] hover:bg-[#003a87] text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
