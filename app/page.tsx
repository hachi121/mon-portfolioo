"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="h-full w-screen">
      <div className="container mx-auto h-full px-4">
        {/* Main Flex Container */}
        <div className="flex flex-col xl:flex-row xl:items-start xl:pt-8 xl:pb-24 items-center justify-between space-y-4 xl:space-y-0">
          {/* Left Content */}
          <div className="w-1/2 text-center xl:text-left pr-8 flex flex-col gap-4 mt-14">
            {/* "I am Mon Angelo" Section */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">
              I'm Mon Angelo
            </h1>

            {/* TypeAnimation Section */}
            <p className="text-3xl sm:text-2xl lg:text-3xl">
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
            <p className="text-left text-xl text-[#a7a7a7]">
              I am a <span className="text-accent italic">Fresh graduate</span>{" "}
              from the{" "}
              <span className="text-accent italic">
                Technological Institute of the Philippines
              </span>
              , I craft dynamic, user-friendly, and visually striking web experiences with precision and creativity.
            </p>
          </div>

          {/* GIF Section */}
          <div className="w-1/2 flex justify-center sm:text-4xl lg:text-5xl">
            <img
              src="https://camo.githubusercontent.com/4d9f5ecceb711eec6e2018f38a5677dc657c9738d4a65ba3b928c41c0a45b439/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966"
              alt="Animated GIF"
              className="w-[400px] h-[400px] object-cover rounded-full sm:h-[200px] sm:w-[200px] xl:h-[500px] xl:w-[500px] md:h-[200px] md:w-[200px]  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;