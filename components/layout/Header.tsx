"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/EdzeetaLogo.svg"
            alt="Edzeeta Logo"
            width={140}
            height={40}
            priority
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-[#004aad] transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-[#004aad] transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#004aad] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
        <Button className="bg-[#004aad] hover:bg-[#003a87] text-white">
          Contact Us
        </Button>
      </div>
    </motion.header>
  );
}
