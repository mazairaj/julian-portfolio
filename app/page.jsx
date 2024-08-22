import { Button } from "../components/ui/button"
import Image from "next/image";
import { FiDownload }  from 'react-icons/fi'
import Socials from "../components/Socials/Socials";
import Photo from "../components/Photo/Photo";
import Signature  from "../components/Photo/Signature";
import Stats from "../components/Stats/Stats";
import Typewriter from "@/components/Typewriter/Typewriter";

const YourComponent = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              {/* Software Developer */}
              <Typewriter
                words={['Software Developer', 'Builder', 'Product Lead', 'UI/UX Engineer']}
                typingSpeed={100}
                deletingSpeed={50}
                delayBetweenWords={1500}
                delayBeforeDelete={1000}

              />
            </span>
            <h1 className="h1 mb-6">
              {`Hello I'm`} <br /> 
              <span className="text-accent">Julian Mazaira</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I excel at crafting elegant digital experiences, 
            with expertise in React and Angular and strong skills 
            across the frontend stack.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/resume/FrontEnd-Resume_2024_V2.pdf"
                download="Resume_Julian_Mazaira.pdf"
                className="btn btn-outline lg uppercase flex items-center gap-2"
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                  aria-label="Download CV"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
              </div>
            </div>
            <Signature />
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default YourComponent;
