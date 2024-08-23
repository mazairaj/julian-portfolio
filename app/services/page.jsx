"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion"
const fullstackWebDevelopmentSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Node.js",
  "MongoDB",
  "SQL",
  "Responsive Design",
  "Cross-Browser Compatibility"
];

const uiUxDesignAndFrontendEngineeringSkills = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Figma",
  "Sketch",
  "User Testing",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Responsive Design",
  "Cross-Browser Compatibility"
];

const productManagementSkills = [
  "Product Roadmapping",
  "Requirements Gathering",
  "Agile Methodologies",
  "Team Management",
  "Stakeholder Communication"
];

const technicalConsultingSkills = [
  "Technology Strategy",
  "System Architecture",
  "Code Review",
  "Best Practices",
  "Mentoring",
  "Technical Documentation"
];

const services = [
  {
    num: '01',
    href: '/contact',
    title: 'Fullstack Web Development',
    description: "Building comprehensive web applications, handling both frontend and backend development using modern technologies.",
    skills: fullstackWebDevelopmentSkills
  },
  {
    num: '02',
    href: '/contact?service=UI/UX',
    title: `UI/UX Design \n&  FE Engineering`,
    description: "Crafting intuitive and engaging user interfaces and experiences. This involves user research, wireframing, prototyping, and user testing to create designs that meet user needs and business goals.",
    skills: uiUxDesignAndFrontendEngineeringSkills
  },
  {
    num: '03',
    href: '/contact?service=Product Management',
    title: 'Product Management',
    description: "Leading product development from concept to launch. This includes gathering requirements, creating roadmaps, managing development teams, and ensuring that the product meets both user needs and business objectives.",
    skills: productManagementSkills
  },
  {
    num: '04',
    href: '/contact?service=Technical Consulting',
    title: 'Technical Consulting',
    description: "Providing expert advice on technology strategy, architecture, and best practices. This service helps businesses make informed decisions about their tech stack, development processes, and product strategies.",
    skills: technicalConsultingSkills
  },

]
const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80px] flex items-center justify-center py-12 xl:pt-0"
    >
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:oy-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1, 
              transiation: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline 
                    text-transparent group-hover:text-outline-hover transition-all
                    duration-500">
                      {service.num}
                    </div>
                    <Link 
                      href={service.href} 
                      className="w-[70px] h-[70px] rounded-full bg-white 
                      group-hover:bg-accent transition-all duration-500
                      flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl"/>
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white
                  group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  <p className="text-white/60">{service.description}</p>
                  <div className="border b border-white/20 w-full"></div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Services