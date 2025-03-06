"use client";

import { LucideIcon, Check, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  isActive?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  isActive = false,
}: ServiceCardProps) {
  return (
    <Card
      className={`h-full transition-all duration-300 border rounded-xl overflow-hidden relative ${
        isActive
          ? "shadow-xl border-blue-200"
          : "shadow-md hover:shadow-xl border-gray-100"
      }`}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-white -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-blue-100/20 -z-10"></div>
      <div className="absolute -left-12 -top-12 w-20 h-20 rounded-full bg-blue-50/10 -z-10"></div>

      <CardHeader className="pb-3 pt-6 relative">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-sm ${
            isActive ? "bg-blue-100" : "bg-blue-50"
          }`}
        >
          <Icon
            className={`h-7 w-7 ${
              isActive ? "text-blue-600" : "text-[#004aad]"
            }`}
          />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-600 mt-2 text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="w-full h-px bg-gray-100 my-4"></div>
        <ul className="space-y-2.5">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center mr-2.5 mt-0.5 flex-shrink-0 ${
                  isActive ? "bg-blue-100" : "bg-blue-50"
                }`}
              >
                <Check className="h-3 w-3 text-green-500" />
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* "Learn more" indicator */}
        <div className="mt-4 flex items-center text-[#004aad] text-sm font-medium">
          <span>{isActive ? "View details" : "Learn more"}</span>
          <motion.div
            animate={{ x: isActive ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight className="h-4 w-4 ml-1" />
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}
