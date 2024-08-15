"use client"

import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaPython,
  FaReact,
  FaAngular,
  FaFigma,
  FaNodeJs
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si"

import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "../../components/ui/tabs"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "../../components/ui/tooltip"

import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion"

const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta in ullam similique, impedit sapiente fuga, culpa, consectetur vel deleniti temporibus mollitia eos at maiores rem facilis voluptate eligendi totam. Dolorem.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Julian Mazaira"
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 (305) 733 2688"
    },
    {
      fieldName: "Experience",
      fieldValue: "8 Years"
    },
    {
      fieldName: "Email",
      fieldValue: "julian.mazaira@gmail.com"
    },
    {
      fieldName: "Employment",
      fieldValue: "Open to work"
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta in ullam similique, impedit sapiente fuga, culpa, consectetur vel deleniti temporibus mollitia eos at maiores rem facilis voluptate eligendi totam. Dolorem.",
  items: [
    {
      company: "SmarterD",
      position: "Lead Frontend Engineer",
      duration: "2017 - present"
    },
    {
      company: "SmarterD",
      position: "Lead Frontend Engineer",
      duration: "2017 - present"
    },    
    {
      company: "E-commerce Startup",
      position: "Fullstack Engineer",
      duration: "2017"
    },
    {
      company: "E-commerce Startup",
      position: "Fullstack Engineer",
      duration: "2017"
    }
  ]
}

const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dignissimos laboriosam at iure, saepe nesciunt quidem molestias vel inventore eius, perspiciatis, pariatur corrupti optio autem neque earum! Ab, ipsa excepturi.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaPython />,
      name: "python"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <FaAngular />,
      name: "Angular"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "html 5"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon: <FaFigma />,
      name: "figma"
    },
  ]
}
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta in ullam similique, impedit sapiente fuga, culpa, consectetur vel deleniti temporibus mollitia eos at maiores rem facilis voluptate eligendi totam. Dolorem.",
  items: [
    {
      institution: "University of Pennsylvania",
      degree: "B.S. in Engineering",
      duration: "2012 - 2016"
    },
    {
      institution: "Fullstack Development Bootcamp",
      degree: "Fullstack Development",
      duration: "2016 - 2017"
    },    
    {
      institution: "ZeroToMastery Online Courses",
      degree: "Web Development",
      duration: "2023 - 2024"
    },
    {
      institution: "University of Pennsylvania",
      degree: "Varsity Rowing",
      duration: "2012 - 2016"
    }
  ]
}
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80px] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70px] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center items-center">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10
                          rounded-xl flex flex-col justify-center items-center 
                          lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="2-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10
                          rounded-xl flex flex-col justify-center items-center 
                          lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="2-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li
                        key={index}
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex 
                            justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume