"use client";

import { LucideIcon, Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
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
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-white -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-blue-100/20 -z-10"></div>

      <CardHeader className="pb-4 pt-8 relative">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-5 shadow-sm">
          <Icon className="h-8 w-8 text-[#004aad]" />
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-600 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-8">
        <div className="w-full h-px bg-gray-100 mb-6"></div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <Check className="h-3 w-3 text-green-500" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      {/* <CardFooter className="pb-8">
        <Button className="w-full py-5 rounded-xl bg-white text-[#004aad] border border-[#004aad] hover:bg-blue-50 hover:border-[#004aad] transition-all duration-300 hover:shadow-md">
          Learn More
        </Button>
      </CardFooter> */}
    </Card>
  );
}
