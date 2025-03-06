"use client";

import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 bg-white text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/EdzeetaLogo.svg"
              alt="Edzeeta Logo"
              width={140}
              height={40}
              className="mb-4"
            />
            <p className="text-[#004aad]">
              Helping professionals elevate their careers through expert
              guidance and preparation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#004aad] hover:text-white transition-colors"
                >
                  Mock Interviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#004aad] hover:text-white transition-colors"
                >
                  Resume Building
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#004aad] hover:text-white transition-colors"
                >
                  LinkedIn Optimization
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#004aad] hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#004aad] hover:text-white transition-colors"
                >
                  Career Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#004aad] hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-[#004aad]" />
                <span className="text-[#004aad]">opportunities@edzeeta.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-[#004aad]" />
                <span className="text-[#004aad]">+91-8073418832</span>
              </li>
              <li className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-[#004aad] hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-[#004aad] hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-[#004aad] hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-400/30 text-center">
          <p className="text-[#004aad]">
            © {new Date().getFullYear()} Edzeeta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
