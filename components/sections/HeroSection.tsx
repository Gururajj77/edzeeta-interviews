"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function HeroSection() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

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
    <>
      <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 relative overflow-hidden">
        {/* Premium background elements - scaled down on mobile, larger on bigger screens */}
        <div className="absolute top-0 right-0 w-1/4 sm:w-1/3 h-1/3 sm:h-1/2 bg-blue-50 rounded-bl-full opacity-50 sm:opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/5 sm:w-1/4 h-1/5 sm:h-1/4 bg-blue-50 rounded-tr-full opacity-50 sm:opacity-70"></div>
        <div className="absolute top-1/4 left-1/6 w-4 sm:w-6 h-4 sm:h-6 bg-blue-200 rounded-full opacity-30 sm:opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/6 w-5 sm:w-8 h-5 sm:h-8 bg-blue-200 rounded-full opacity-30 sm:opacity-40"></div>

        {/* Subtle grid pattern - reduced opacity on mobile */}
        <div className="absolute inset-0 bg-grid-pattern opacity-2 sm:opacity-5"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-4 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="w-full md:w-1/2 order-2 md:order-1"
              variants={itemVariants}
            >
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-blue-50 rounded-full text-[#004aad] font-medium text-xs sm:text-sm mb-3 sm:mb-4">
                Trusted by 10,000+ professionals
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
                Ace Your Next{" "}
                <span className="text-[#004aad] relative inline-block">
                  Interview
                  <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-1 sm:h-2 bg-blue-100 -z-10 rounded"></span>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                Professional mock interviews, resume building, and career
                counseling services to help you land your dream job.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  className="w-full sm:w-auto bg-[#004aad] hover:bg-[#003a87] text-white text-base sm:text-lg py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-200/50 transition-all duration-300 hover:translate-y-[-2px]"
                  onClick={() => setContactModalOpen(true)}
                >
                  Get Started{" "}
                  <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-[#004aad] text-[#004aad] hover:bg-blue-50 hover:text-[#004aad] text-base sm:text-lg py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg sm:rounded-xl transition-all duration-300 flex justify-center"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 order-1 md:order-2 mb-6 md:mb-0"
              variants={itemVariants}
            >
              <div className="relative h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full mx-auto max-w-[500px] md:max-w-none">
                <Image
                  src="/edzeeta-interviews.png"
                  alt="Professional interview preparation"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Premium decorative elements - smaller on mobile */}
                <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-16 sm:w-24 md:w-40 h-16 sm:h-24 md:h-40 bg-blue-50 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-blue-100 rounded-full -z-10 opacity-60"></div>

                {/* Floating badges - smaller on mobile, larger on bigger screens */}
                <motion.div
                  className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-white rounded-lg shadow-xl p-1.5 sm:p-2 md:p-3 flex items-center gap-1 sm:gap-2"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <div className="text-xs sm:text-sm font-medium">
                    Interview Ready
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 sm:bottom-8 md:bottom-10 -right-1 sm:-right-2 md:-right-4 bg-white rounded-lg shadow-xl p-1.5 sm:p-2 md:p-3 flex items-center gap-1 sm:gap-2"
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#004aad]" />
                  </div>
                  <div className="text-xs sm:text-sm font-medium">
                    Career Growth
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
