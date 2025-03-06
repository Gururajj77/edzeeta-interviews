"use client";

import { motion } from "framer-motion";
import PricingCard from "@/components/ui/pricing-card";

export default function PricingSection() {
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

  const pricingPlans = [
    {
      title: "Mock Interview",
      subtitle: "Perfect for interview preparation",
      price: "₹1,299",
      buttonText: "Get Started",
      buttonId: "checkout-basic",
      popular: false,
      features: [
        { text: "1 mock interview session (60 min)", included: true },
        { text: "Industry-specific questions", included: true },
        { text: "Detailed assessment report", included: true },
        { text: "Growth areas document", included: true },
        { text: "Resume review & optimization", included: false },
        { text: "LinkedIn profile optimization", included: false },
      ],
    },
    {
      title: "Interview + Resume",
      subtitle: "Our most popular option",
      price: "₹2,499",
      buttonText: "Secure Your Interview",
      buttonId: "checkout-professional",
      popular: true,
      features: [
        { text: "1 mock interview session (45 min)", included: true },
        { text: "Industry-specific questions", included: true },
        { text: "Detailed assessment report", included: true },
        { text: "Growth areas document", included: true },
        {
          text: "Complete resume review & optimization",
          included: true,
          highlight: true,
        },
        {
          text: "LinkedIn profile optimization",
          included: true,
          highlight: true,
        },
      ],
    },
    {
      title: "Complete Package",
      subtitle: "Comprehensive career support",
      price: "₹2,999",
      buttonText: "Get Started",
      buttonId: "checkout-premium",
      popular: false,
      features: [
        { text: "2 mock interview session (45 min each)", included: true },
        { text: "Industry-specific questions", included: true },
        { text: "Detailed assessment report", included: true },
        { text: "Growth areas document", included: true },
        { text: "Complete resume review & optimization", included: true },
        {
          text: "LinkedIn profile optimization",
          included: true,
        },
        {
          text: "Job portal access",
          included: true,
          highlight: true,
        },
        {
          text: "Access to AI and technical workshops from industry experts",
          included: true,
          highlight: true,
        },
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 px-6 md:px-12 lg:px-20 relative bg-white"
    >
      {/* Light background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>

      <div className="container mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#004aad] font-medium text-sm mb-4">
            Flexible Plans for Everyone
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs and budget with our
            all-inclusive packages
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 relative max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={
                plan.popular ? "md:scale-105 md:-translate-y-2 z-10" : ""
              }
            >
              <PricingCard
                title={plan.title}
                subtitle={plan.subtitle}
                price={plan.price}
                popular={plan.popular}
                features={plan.features}
                buttonText={plan.buttonText}
                buttonId={plan.buttonId}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-600">
            Not sure which plan is right for you?{" "}
            <a
              href="#"
              className="text-[#004aad] font-semibold hover:underline"
            >
              Contact us
            </a>{" "}
            for a free consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
