"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export default function HeroSection() {
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

  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-50 rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-70"></div>
      <div className="absolute top-1/4 left-1/6 w-6 h-6 bg-blue-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 right-1/6 w-8 h-8 bg-blue-200 rounded-full opacity-40"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
            variants={itemVariants}
          >
            <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#004aad] font-medium text-sm mb-4">
              Trusted by 1000+ professionals
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ace Your Next{" "}
              <span className="text-[#004aad] relative">
                Interview
                <span className="absolute bottom-2 left-0 w-full h-2 bg-blue-100 -z-10 rounded"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional mock interviews, resume building, and career
              counseling services to help you land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#004aad] hover:bg-[#003a87] text-white text-lg py-7 px-8 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-200/50 transition-all duration-300 hover:translate-y-[-2px]">
                Get Started <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                className="border-[#004aad] text-[#004aad] hover:bg-blue-50 hover:text-[#004aad] text-lg py-7 px-8 rounded-xl transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <div className="relative h-[450px] w-full">
              <Image
                src="/edzeeta-interviews.png"
                alt="Professional interview preparation"
                fill
                className="object-contain"
                priority
              />

              {/* Premium decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full -z-10 opacity-60"></div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-lg shadow-xl p-3 flex items-center gap-2"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-sm font-medium">Interview Ready</div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 -right-4 bg-white rounded-lg shadow-xl p-3 flex items-center gap-2"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#004aad]" />
                </div>
                <div className="text-sm font-medium">Career Growth</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
