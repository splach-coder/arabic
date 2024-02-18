import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import AnimatedTexts from "../components/animatedFirstText/Text";
import product from "../assets/images/aaa.png";

const HeroLaptop = () => {
  return (
    <section className="firstSection relative w-full h-screen overflow-hidden">
      <div className="con" style={{ height: "calc(100% - 82px)" }}>
        <Header />
        <main className="w-full h-full flex ">
          <div className="w-[40%] h-full flex flex-col justify-center gap-10">
            <h1 className="font-bold leading-[55px] text-[40px] text-left text-white">
              <span className="font-bold text-6xl tracking-[-4px]">
                <AnimatedTexts text="TrimDown " />
              </span>
              <AnimatedTexts text="Your Ultimate Weight Loss Companion." />
            </h1>

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
              className="font-secondary font-bold bg-primary rounded-[4px] py-3 px-6 flex gap-2 items-center max-w-40"
              aria-label="shopknow">
              Shop now
              <span className="font-primary text-xl">&rarr;</span>
            </motion.button>
          </div>

          <div className="w-[60%] h-full">
            <div className="w-full h-full flex justify-center items-center">
              <img src={product} className="w-[90%] h-[90%] object-contain" alt="" />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default HeroLaptop;
