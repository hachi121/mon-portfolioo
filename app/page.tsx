"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

import Social from "@/components/Social";



const Home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full ">
        {/* Main Flex Container */}
        <div className="flex flex-col xl:flex-row  items-center justify-between xl:pt-8 xl:pb-24">
          {/* Left Content */}
          <div className=" text-center xl:text-left pr-8 flex flex-col gap-4 mt-14">
            {/* "I am Mon Angelo" Section */}
            <h1 className="h-1 mb-8 text-3xl sm:text-2xl  lg:text-5xl mg:text-xl font-bold text-accent justify-between">
              I'm Mon Angelo
            </h1>

            {/* TypeAnimation Section */}
            <p className="text-3xl sm:text-3xl md:text-xl lg:text-2xl ">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2500,
                  "UI/UX Designer",
                  2500,
                  "Game Developer",
                  2500,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </p>
            <p className="text-[#a7a7a7] max-w-[500px] mb-9 ">
              I am a <span className="text-accent italic">Fresh graduate</span>{" "}
              from the{" "}
              <span className="text-accent italic">
                Technological Institute of the Philippines
              </span>
              , I craft dynamic, user-friendly, and visually striking web experiences with precision and creativity.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex
              items-center gap-[5px]"
              onClick={() => window.open("/ARABIT_RESUME.pdf", "_blank")}>
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0 items-center ">
                <Social 
                containerStyles="flex gap-[20px]" 
                iconStyle="w-10 h-10 border border-accent rounded-full text-accent 
                flex items-center justify-center hover:bg-accent 
                hover:text-primary hover:transition-all duration-500 sm:items-center"/> 
            </div>
            </div>
            
            
          </div>

          {/* GIF Section */}
          <div className="flex items-center justify-center sm:text-4xl lg:text-5xl">
            <img
              src="https://camo.githubusercontent.com/4d9f5ecceb711eec6e2018f38a5677dc657c9738d4a65ba3b928c41c0a45b439/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966"
              alt="Animated GIF"
              className="object-cover rounded-full w-[80%] max-w-[500px] h-auto sm:w-[200px] sm:h-[200px] xl:w-[500px] xl:h-[500px] md:w-[200px] md:h-[200px] sm:px-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;