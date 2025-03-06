"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Award, Clock, Zap, Sparkles, Target } from "lucide-react";

export default function WhyUsSection() {
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

  const reasons = [
    {
      icon: Users,
      title: "Industry Experts",
      description:
        "Our interviewers have worked at top companies like Google, Amazon, and Microsoft",
    },
    {
      icon: Award,
      title: "90% Success Rate",
      description:
        "9 out of 10 candidates report improved interview performance after our sessions",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description:
        "Get your interview assessment and growth areas document within 24 hours",
    },
    {
      icon: Target,
      title: "Personalized Approach",
      description:
        "Sessions tailored to your specific role, industry, and experience level",
    },
    {
      icon: Sparkles,
      title: "Actionable Feedback",
      description: "Specific, implementable feedback you can apply immediately",
    },
    {
      icon: Zap,
      title: "Confidence Booster",
      description:
        "Practice in a real-world setting to build confidence for the actual interview",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-1/3 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-blue-50/50 -z-10"></div>
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 rounded-full bg-blue-50/50 -z-10"></div>

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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re committed to helping you succeed in your career journey
            with expertise and personalized support
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <reason.icon className="w-5 h-5 text-[#004aad]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 p-6 bg-blue-50 rounded-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
              <Image
                src="/EdzeetaLogo.svg"
                alt="Edzeeta Logo"
                width={48}
                height={48}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">
                Trusted by 10,000+ professionals
              </h3>
              <p className="text-gray-700 text-sm">
                Join hundreds of professionals who have successfully landed
                their dream jobs after working with Edzeeta. Our dedicated team
                of industry experts is committed to your success.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
