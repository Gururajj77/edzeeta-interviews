"use client";

import { useState, useEffect, MouseEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ContactModal from "@/components/ContactModal"; // Import the ContactModal component

export default function Header() {
  // Add state for contact modal
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (
    e: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // If it's the contact section, open the modal instead
    if (id === "contact") {
      setContactModalOpen(true);
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerHeight - 16;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

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
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 py-1 sm:py-1.5 md:py-2 px-3 sm:px-4 md:px-6 transition-all duration-200 ${
          isScrolled || mobileMenuOpen ? "bg-white shadow-md" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/EdzeetaLogo.svg"
                alt="Edzeeta Logo"
                width={100}
                height={30}
                className="w-20 sm:w-24 md:w-28 cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={20} className="text-gray-700" />
            ) : (
              <Menu size={20} className="text-gray-700" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="text-gray-700 hover:text-[#004aad] transition-colors duration-200 font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#004aad] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, "pricing")}
              className="text-gray-700 hover:text-[#004aad] transition-colors duration-200 font-medium relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#004aad] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-gray-700 hover:text-[#004aad] transition-colors duration-200 font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#004aad] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <div className="hidden md:block">
            <Button
              className="bg-[#004aad] hover:bg-[#003a87] text-white text-sm px-4 py-1.5"
              onClick={() => setContactModalOpen(true)}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 px-3 mt-2 bg-white border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "services")}
                className="text-gray-700 hover:text-[#004aad] py-2 border-b border-gray-100 text-sm font-medium flex items-center justify-between"
              >
                Services
                <span className="text-[#004aad] text-xs">→</span>
              </a>
              <a
                href="#pricing"
                onClick={(e) => scrollToSection(e, "pricing")}
                className="text-gray-700 hover:text-[#004aad] py-2 border-b border-gray-100 text-sm font-medium flex items-center justify-between"
              >
                Pricing
                <span className="text-[#004aad] text-xs">→</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="text-gray-700 hover:text-[#004aad] py-2 border-b border-gray-100 text-sm font-medium flex items-center justify-between"
              >
                Contact
                <span className="text-[#004aad] text-xs">→</span>
              </a>
              <Button
                className="bg-[#004aad] hover:bg-[#003a87] text-white w-full text-sm py-1.5 mt-2"
                onClick={() => setContactModalOpen(true)}
              >
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </motion.header>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
