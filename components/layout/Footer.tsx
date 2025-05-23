"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

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
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="text-[#004aad] mt-1 flex-shrink-0" />
                <span className="text-[#004aad]">hr@edzeeta.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone
                  size={16}
                  className="text-[#004aad] mt-1 flex-shrink-0"
                />
                <span className="text-[#004aad]">+91-8073418832</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin
                  size={16}
                  className="text-[#004aad] mt-1 flex-shrink-0"
                />
                <span className="text-[#004aad] text-sm">
                  4th Floor, Kondapur, Serilingampally Mandal, Plot no #154,
                  Gachibowli - Miyapur Rd, opposite Harsha Toyota, Kondapur,
                  Hyderabad, Telangana 500084
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-400/30 text-center">
          <p className="text-[#004aad] mb-4">
            © {new Date().getFullYear()} Edzeeta. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-[#004aad] hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              className="text-[#004aad] hover:underline"
            >
              Refund Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-[#004aad] hover:underline"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
