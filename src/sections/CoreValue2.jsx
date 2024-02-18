import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Wheel } from "react-custom-roulette";
import { Spinner } from "../assets/svgs/svgs";
import Confetti from "react-confetti";

const titleVariants = {
  hidden: { opacity: 0, translateX: -100 },
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.7 } },
};

const wheelVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const buttonVariants = {
  hidden: { opacity: 0, translateY: 100 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.7, delay: 0.4 },
  },
};

const CoreValue = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const elementRef = useRef(null);
  const [mustSpin, setMustSpin] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [gamOver, setGamOver] = useState(false);
  const [confeti, setConfeti] = useState(false);

  const data = [
    { option: "-50%", style: { backgroundColor: "#133E59" } },
    { option: "-60%", style: { backgroundColor: "#153750" } },
    { option: "-70%", style: { backgroundColor: "#133E59" } },
    { option: "-80%", style: { backgroundColor: "#153750" } },
    { option: "-90%", style: { backgroundColor: "#133E59" } },
    { option: "-0%", style: { backgroundColor: "#153750" } },
  ];

  const handleSpinStopped = () => {
    setMustSpin(false);
    setRolling(false);
    setGamOver(true);
    setConfeti(true);
  };

  useEffect(() => {
    let timeoutId;

    if (confeti) {
      timeoutId = setTimeout(() => {
        setConfeti(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [confeti]);

  return (
    <section
      dir="ltr"
      ref={ref}
      className="con bg-white min-h-[40vh] py-5 flex flex-col items-center gap-5 relative">
      <header>
        <motion.h1
          dir="rtl"
          ref={elementRef}
          initial="hidden"
          animate={inView ? "visible" : ""}
          variants={titleVariants}
          className="font-primary font-bold text-black text-xl md:text-2xl md:leading-[26px] text-center">
          {gamOver
            ? "🎉🎉🎉🎉🎉🎉"
            : "🎉 لا تفوت! عرضنا الترويجي الحصري موجود هنا! 🎉"}
        </motion.h1>
      </header>

      {!gamOver ? (
        <main className="flex flex-col items-center gap-5">
          <div
            ref={elementRef}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={wheelVariants}>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={4}
              data={data}
              onStopSpinning={handleSpinStopped}
              textColors={["#ffffff"]}
              fontFamily="Inter"
              fontSize={30}
              fontWeight={700}
              spinDuration={1.3}
            />
          </div>

          <motion.button
            ref={elementRef}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={buttonVariants}
            onClick={() => {
              setMustSpin(true);
              setRolling(true);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            disabled={rolling}
            className="px-8 py-3 bg-gradient-to-tr from-[#0F172A] to-[#13354F] font-secondary font-normal text-xl rounded-sm">
            {rolling ? (
              <Spinner addStyle={"w- 5 h-5 animate-spin"} />
            ) : (
              "Spin Now"
            )}
          </motion.button>
        </main>
      ) : (
        <main className="flex flex-col gap-12 items-center px-2 pt-20">
          <motion.h1
            ref={elementRef}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={wheelVariants}
            className="font-primary font-bold text-3xl text-red-500 flex items-center">
            Up to <span className="text-6xl mx-5">90%</span> off
          </motion.h1>

          <motion.button
            ref={elementRef}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={wheelVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 bg-gradient-to-tr from-red-500 to-red-300 font-secondary font-normal text-xl rounded-sm">
            Shop now <span className="font-primary text-xl">&rarr;</span>
          </motion.button>
        </main>
      )}

      {gamOver && confeti ? <Confetti height={"300"} gravity={0.1} /> : ""}
    </section>
  );
};

export default CoreValue;
