"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Award,
  Clock,
  Zap,
  Sparkles,
  Target,
  ChevronRight,
} from "lucide-react";

export default function WhyUsSection() {
  const [activeReason, setActiveReason] = useState<number | null>(null);

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const reasons = [
    {
      icon: Users,
      title: "Industry Experts",
      description:
        "Our interviewers have worked at top companies like Google, Amazon, and Microsoft",
      details:
        "All our coaches have 8+ years of experience in their fields and have conducted 100+ real interviews. They know exactly what hiring managers are looking for and will give you insider tips to stand out.",
      color: "blue",
    },
    {
      icon: Award,
      title: "90% Success Rate",
      description:
        "9 out of 10 candidates report improved interview performance after our sessions",
      details:
        "Based on post-session surveys and follow-ups, clients who complete our interview preparation program experience a 90% higher callback rate and 72% increase in final-round success.",
      color: "green",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description:
        "Get your interview assessment and growth areas document within 24 hours",
      details:
        "We understand the fast-paced nature of job hunting. Our comprehensive feedback documents are delivered within 24 hours, giving you time to implement changes before your next interview.",
      color: "amber",
    },
    {
      icon: Target,
      title: "Personalized Approach",
      description:
        "Sessions tailored to your specific role, industry, and experience level",
      details:
        "No generic advice here. We analyze the specific company, role, and team you're interviewing for, and customize mock questions based on your experience level and career goals.",
      color: "purple",
    },
    {
      icon: Sparkles,
      title: "Actionable Feedback",
      description: "Specific, implementable feedback you can apply immediately",
      details:
        "Our feedback goes beyond vague suggestions. You'll receive concrete examples, specific phrases to use, body language adjustments, and strategic approaches to tackle your weakest areas.",
      color: "pink",
    },
    {
      icon: Zap,
      title: "Confidence Booster",
      description:
        "Practice in a real-world setting to build confidence for the actual interview",
      details:
        "Our simulated interview environment mirrors the pressure and format of real interviews. With multiple practice rounds, you'll develop the confidence to handle even the toughest questions with ease.",
      color: "orange",
    },
  ];

  const getColorClass = (color: string, isBackground = false) => {
    const baseClass = isBackground ? "bg-" : "text-";
    switch (color) {
      case "blue":
        return `${baseClass}blue-500`;
      case "green":
        return `${baseClass}green-500`;
      case "amber":
        return `${baseClass}amber-500`;
      case "purple":
        return `${baseClass}purple-500`;
      case "pink":
        return `${baseClass}pink-500`;
      case "orange":
        return `${baseClass}orange-500`;
      default:
        return `${baseClass}blue-500`;
    }
  };

  const getBgLightClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50";
      case "green":
        return "bg-green-50";
      case "amber":
        return "bg-amber-50";
      case "purple":
        return "bg-purple-50";
      case "pink":
        return "bg-pink-50";
      case "orange":
        return "bg-orange-50";
      default:
        return "bg-blue-50";
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-1/4 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      <div className="absolute -left-20 sm:-left-32 top-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-blue-50/50 -z-10"></div>
      <div className="absolute -right-20 sm:-right-32 bottom-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-blue-50/50 -z-10"></div>
      <div className="absolute right-1/4 top-1/3 w-16 h-16 rounded-full bg-green-50/40 -z-10"></div>
      <div className="absolute left-1/3 bottom-1/3 w-24 h-24 rounded-full bg-purple-50/30 -z-10"></div>

      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#004aad] font-medium text-sm mb-4">
            Why Choose Edzeeta
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re committed to helping you succeed in your career journey
            with expertise and personalized support
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer ${
                activeReason === index
                  ? "ring-2 ring-offset-2 " + getBgLightClass(reason.color)
                  : ""
              }`}
              whileHover={{ y: -5 }}
              onClick={() =>
                setActiveReason(activeReason === index ? null : index)
              }
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div
                    className={`p-2.5 ${getBgLightClass(
                      reason.color
                    )} rounded-lg`}
                  >
                    <reason.icon
                      className={`w-5 h-5 ${getColorClass(reason.color)}`}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1.5">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Expanded content */}
                  {activeReason === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pt-3 border-t border-gray-100"
                    >
                      <p className="text-sm text-gray-700">{reason.details}</p>
                    </motion.div>
                  )}

                  {/* Read more indicator */}
                  <div
                    className={`mt-2 flex items-center text-sm font-medium ${getColorClass(
                      reason.color
                    )}`}
                  >
                    <span>
                      {activeReason === index ? "Read less" : "Read more"}
                    </span>
                    <motion.div
                      animate={{
                        rotate: activeReason === index ? 90 : 0,
                        x: activeReason === index ? 2 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-blue-50/50 rounded-2xl max-w-3xl mx-auto shadow-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-blue-100/40 -z-10"></div>
          <div className="absolute -left-6 -top-6 w-20 h-20 rounded-full bg-blue-100/30 -z-10"></div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
              <Image
                src="/EdzeetaLogo.svg"
                alt="Edzeeta Logo"
                width={56}
                height={56}
              />
            </div>
            <div>
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-bold">
                  Trusted by 10,000+ professionals
                </h3>
                <div className="ml-3 flex -space-x-2">
                  {[1, 2, 3, 4].map((idx) => (
                    <div
                      key={idx}
                      className={`w-6 h-6 rounded-full border-2 border-white ${
                        [
                          "bg-blue-400",
                          "bg-green-400",
                          "bg-purple-400",
                          "bg-amber-400",
                        ][idx - 1]
                      }`}
                    ></div>
                  ))}
                  <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                    +
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Join hundreds of professionals who have successfully landed
                their dream jobs after working with Edzeeta. Our dedicated team
                of industry experts is committed to your success.
              </p>

              {/* Added stat counters */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">98%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">1000+</div>
                  <div className="text-xs text-gray-600">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600">80%</div>
                  <div className="text-xs text-gray-600">Hire Rate</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
