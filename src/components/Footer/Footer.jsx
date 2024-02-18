import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Facebook,
  Instagram,
  Tiktok,
  Twitter,
} from "../../assets/svgs/socialMedia";

const iconsVariants = (delay) => {
  return {
    hidden: { opacity: 0, translateX: 150 },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.5, delay: delay },
    },
  };
};

const textVariants = {
  hidden: { opacity: 0, translateX: -100 },
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.7 } },
};

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const elementRef = useRef(null);

  return (
    <footer ref={ref} className="footer-bg py-10 overflow-x-hidden">
      <div className="con flex flex-col gap-10">
        <div className="flex justify-between">
          <div>
            <motion.span
              ref={elementRef}
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={textVariants}
              className="font-secondary font-normal text-xl leading-[26px]">
              <span className="font-bold">T</span>rim
              <span className="font-bold">D</span>own
            </motion.span>
          </div>

          <div className="flex gap-5">
            <motion.div
              ref={elementRef}
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={iconsVariants(0.2)}
              className="w-8 h-8 bg-white bg-opacity-30 rounded-[50%] cursor-pointer hover:bg-[#153750] transition-colors ease-in flex justify-center items-center">
              <Facebook addStyle={"w-5 h-5"} />
            </motion.div>
            <motion.div
              ref={elementRef}
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={iconsVariants(0.4)}
              className="w-8 h-8 bg-white bg-opacity-30 rounded-[50%] cursor-pointer hover:bg-[#153750] transition-colors ease-in flex justify-center items-center">
              <Instagram addStyle={"w-6 h-6"} />
            </motion.div>
            <motion.div
              ref={elementRef}
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={iconsVariants(0.6)}
              className="w-8 h-8 bg-white bg-opacity-30 rounded-[50%] cursor-pointer hover:bg-[#153750] transition-colors ease-in flex justify-center items-center">
              <Twitter addStyle={"w-4 h-4"} />
            </motion.div>
            <motion.div
              ref={elementRef}
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={iconsVariants(0.8)}
              className="w-8 h-8 bg-white bg-opacity-30 rounded-[50%] cursor-pointer hover:bg-[#153750] transition-colors ease-in flex justify-center items-center">
              <Tiktok addStyle={"w-5 h-5"} />
            </motion.div>
          </div>
        </div>

        <div className="w-full bg-white opacity-40 h-[1px]"></div>

        <div className="text-center">
          © Copyright 2024, All Rights Reserved by
          <span className="font-bold">T</span>rim
          <span className="font-bold">D</span>own
        </div>
      </div>
    </footer>
  );
};

export default Footer;
