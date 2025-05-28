"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  ChevronRight, 
  ChevronDown,
  Code,
  Database,
  Cloud,
  Cpu,
  BarChart,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function InternshipTrainingsSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const trainingCategories = [
    {
      name: "Software Development",
      icon: Code,
      color: "blue",
      trainings: [
        "Full Stack Web Development",
        "Android App Development",
        "Python",
        "Java",
      ],
    },
    {
      name: "Data & AI",
      icon: Database,
      color: "green",
      trainings: [
        "Machine Learning",
        "Data Science",
        "Artificial Intelligence",
        "Data Analytics",
      ],
    },
    {
      name: "Cloud & Infrastructure",
      icon: Cloud,
      color: "purple",
      trainings: [
        "Cloud Computing",
        "Amazon Web Services",
        "Cyber Security",
      ],
    },
    {
      name: "Engineering",
      icon: Cpu,
      color: "orange",
      trainings: [
        "AutoCAD",
        "Embedded Systems",
        "Internet of Things",
      ],
    },
    {
      name: "Business & Management",
      icon: BarChart,
      color: "red",
      trainings: [
        "Human Resource",
        "Finance",
        "Digital Marketing",
      ],
    },
    {
      name: "Healthcare and Life Sciences",
      icon: Heart,
      color: "pink",
      trainings: [
        "Clinical Research & Clinical Trials with Pharmacovigilance",
        "Medical Coding",
      ],
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 relative">
      {/* Premium background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 sm:left-10 w-28 sm:w-36 h-28 sm:h-36 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-green-100/20 rounded-full blur-2xl -z-10"></div>

      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#004aad] font-medium text-sm mb-4">
            Skill Development
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Internship Trainings
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to bridge the gap between academic knowledge and industry requirements
          </p>
        </motion.div>

        {/* Desktop View - Grid Layout */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {trainingCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-[#004aad]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              </div>
              <div className="space-y-2">
                {category.trainings.map((training, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{training}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View - Accordion */}
        <motion.div
          className="md:hidden space-y-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {trainingCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-[#004aad]" />
                  </div>
                  <span className="font-medium text-gray-900">{category.name}</span>
                </div>
                <motion.div
                  animate={{ rotate: expandedCategory === category.name ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedCategory === category.name && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-2">
                      {category.trainings.map((training, idx) => (
                        <div key={idx} className="flex items-center gap-2 ml-12">
                          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{training}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Overview - Compact Pills */}
        <motion.div
          className="mb-12 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <BarChart className="w-5 h-5 text-[#004aad]" />
            <h3 className="font-semibold text-gray-900">Training Overview</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-blue-50 text-[#004aad] hover:bg-blue-100">
              19 Programs
            </Badge>
            <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
              Industry Certified
            </Badge>
            <Badge variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
              Hands-on Projects
            </Badge>
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 hover:bg-orange-100">
              Expert Mentors
            </Badge>
            <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100">
              Job Assistance
            </Badge>
          </div>
        </motion.div>

        {/* Call to action card */}
        <motion.div
          className="mt-12 sm:mt-16 p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-white -z-10"></div>
          
          {/* Decorative element */}
          <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-blue-100/30 -z-10"></div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-[#004aad]" />
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-[#004aad]" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">
                Ready to start your career journey?
              </h3>
              <p className="text-gray-600 mb-4">
                Our internship training programs combine theoretical knowledge with hands-on experience. Get industry-ready with real-world projects and expert mentorship.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button className="bg-[#004aad] hover:bg-[#003a87] text-white">
                  Explore All Programs
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#004aad] text-[#004aad] hover:bg-blue-50">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { number: "5000+", label: "Trained Students" },
            { number: "95%", label: "Placement Rate" },
            { number: "200+", label: "Partner Companies" },
            { number: "4.8/5", label: "Student Rating" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#004aad] mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
