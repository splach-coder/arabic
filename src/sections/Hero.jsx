import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import AnimatedTexts from "../components/animatedFirstText/Text";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section
      id="hero"
      className="firstSection relative w-full h-[80vh] md:h-[120vh] overflow-hidden">
      <div className="con">
        <Header />
        <main className="flex flex-col justify-center items-center gap-7 w-full font-primary h-[55vh] md:h-[65vh]">
          {isMobile ? (
            <h1
              className="font-bold text-[30px]  
            leading-[45px]  md:leading-[75px] md:text-[60px] text-center text-white">
              <span className="font-black text-4xl tracking-tighter">
                <AnimatedTexts text="TrimDown " />
              </span>
              <AnimatedTexts text="Your Ultimate Weight Loss Companion." />
            </h1>
          ) : (
            <h1 className="font-bold text-[40px]  leading-[40px]  md:leading-[75px] md:text-[60px] text-center text-white">
              <span className="font-black text-7xl tracking-[-6px]">
                <AnimatedTexts text="TrimDown " />
              </span>
              <AnimatedTexts text="Your" />
              <br />
              <AnimatedTexts text="Ultimate Weight Loss" /> <br />
              <AnimatedTexts text="Companion." />
            </h1>
          )}

          {isMobile ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="font-secondary font-normal text-sm text-center">
              Start losing weight with
              <span className="font-bold">TrimDown</span> - your solution for
              shedding pounds and feeling amazing. Say goodbye to diet
              frustrations and hello to a happier, healthier you.
            </motion.p>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              className="font-secondary font-normal text-base leading-[26px] text-center">
              Start losing weight with
              <span className="font-bold">TrimDown</span> - your solution for
              shedding pounds and feeling amazing. <br /> Say goodbye to diet
              frustrations and hello to a happier, healthier you.
            </motion.p>
          )}

          <motion.button
            initial={{ opacity: 0, scale: 0, translateY: 100 }}
            animate={{
              opacity: 1,
              translateY: 0,
              scale: 1,
              transition: { duration: 0.5, delay: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="font-secondary font-bold bg-primary rounded-[4px] py-3 px-6 flex gap-2 items-center"
            aria-label="shopknow">
            Shop now
            <span className="font-primary text-xl">&rarr;</span>
          </motion.button>
        </main>
      </div>

      <div className={`wave ${isMobile ? "hidden" : ""}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
