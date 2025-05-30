"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";

export default function CtaSection() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <section
        id="contact"
        className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#004aad]"
      >
        {/* Background color is explicitly set to ensure it's always blue */}

        {/* Decorative patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-400/10 blur-xl hidden md:block"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-blue-400/10 blur-xl hidden md:block"></div>

        <div className="container mx-auto relative">
          <motion.div
            className="text-center max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl border border-white/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
              Ready to Transform Your Career?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white">
              Join thousands of professionals who have accelerated their career
              growth with Edzeeta&apos;s expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-white text-[#004aad] hover:bg-gray-50 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] w-full sm:w-auto"
                onClick={() => setContactModalOpen(true)}
              >
                Schedule Your Session Today
              </Button>
              <Button className="bg-transparent text-white border border-white hover:bg-white/10 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-xl transition-all duration-300 w-full sm:w-auto">
                Learn How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20">
              <p className="text-white mb-3 sm:mb-4 text-xs sm:text-sm font-medium">
                TRUSTED BY PROFESSIONALS FROM
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 items-center opacity-90">
                <div className="text-white font-bold text-sm sm:text-base md:text-xl">
                  Google
                </div>
                <div className="text-white font-bold text-sm sm:text-base md:text-xl">
                  Amazon
                </div>
                <div className="text-white font-bold text-sm sm:text-base md:text-xl">
                  Microsoft
                </div>
                <div className="text-white font-bold text-sm sm:text-base md:text-xl">
                  Flipkart
                </div>
                <div className="text-white font-bold text-sm sm:text-base md:text-xl">
                  Infosys
                </div>
              </div>
            </div>
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
