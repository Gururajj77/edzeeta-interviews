"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Feature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  popular?: boolean;
  features: Feature[];
  buttonText: string;
  buttonId: string;
}

export default function PricingCard({
  title,
  subtitle,
  price,
  popular = false,
  features,
  buttonText,
  buttonId,
}: PricingCardProps) {
  return (
    <Card
      className={`h-full flex flex-col hover:shadow-xl transition-all duration-300 relative backdrop-blur-sm overflow-hidden
      ${
        popular
          ? "border-2 border-[#004aad] shadow-lg premium-shadow scale-105 z-10"
          : "border border-gray-100 hover:border-blue-100"
      }`}
    >
      {/* Gradient background for popular plan */}
      {popular && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white -z-10"></div>
      )}

      {/* Decorative elements */}
      <div className="absolute -right-6 -top-6 w-16 h-16 rounded-full bg-blue-100/30 -z-10"></div>
      <div className="absolute -left-6 -bottom-6 w-16 h-16 rounded-full bg-blue-100/30 -z-10"></div>

      <CardHeader className="pb-4 pt-8">
        {popular && (
          <div className="mb-3">
            <Badge className="bg-[#004aad] text-white px-4 py-1 text-xs font-medium rounded-full shadow-md">
              BEST VALUE
            </Badge>
          </div>
        )}
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-500 mt-0.5 text-sm">
          {subtitle}
        </CardDescription>
        <div className="mt-4 mb-1">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500 ml-2 text-sm">one-time</span>
        </div>
      </CardHeader>

      <CardContent className="pb-6 flex-grow">
        <div
          className={`w-full h-px mb-4 ${
            popular ? "bg-blue-100" : "bg-gray-100"
          }`}
        ></div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <div
                  className={`h-4 w-4 rounded-full ${
                    popular ? "bg-blue-50" : "bg-gray-50"
                  } flex items-center justify-center mr-2 mt-0.5`}
                >
                  <Check className="h-3 w-3 text-green-500" />
                </div>
              ) : (
                <div className="h-4 w-4 rounded-full bg-gray-50 flex items-center justify-center mr-2 mt-0.5">
                  <X className="h-3 w-3 text-gray-300" />
                </div>
              )}
              <span
                className={`text-sm ${
                  feature.included
                    ? feature.highlight
                      ? "font-semibold"
                      : ""
                    : "text-gray-400"
                }`}
              >
                {feature.highlight && feature.included ? (
                  <strong>{feature.text}</strong>
                ) : (
                  feature.text
                )}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pb-6 mt-auto">
        <Button
          id={buttonId}
          className={`w-full py-4 rounded-lg transition-all duration-300 hover:shadow-lg text-sm ${
            popular
              ? "bg-[#004aad] hover:bg-[#003a87] text-white shadow-blue-200/50 hover:translate-y-[-2px]"
              : "bg-white hover:bg-gray-50 text-[#004aad] border border-[#004aad] hover:border-[#004aad]"
          }`}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
