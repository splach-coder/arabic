import React from "react";
import { motion } from "framer-motion";
import a1 from "../../assets/images/a1.jpg";
import a2 from "../../assets/images/a2.jpg";
import { Star } from "../../assets/svgs/svgs";

const Card = ({ card, elementRef, inView, cardVariants, index }) => {
  return (
    <motion.div
      key={card.id}
      ref={elementRef}
      initial="hidden"
      animate={inView ? "visible" : ""}
      variants={cardVariants(index + 1 / 10)}
      className={`bg-[#f5f5f5] p-2 rounded-lg min-w-[330px] max-w-[330px] h-[430px] flex flex-col gap-6 ease-linear duration-200 transition-all mx-auto`}>
      <header className="relative h-[60%]">
        <div className="flex gap-2 h-full ">
          <div className="w-[50%]  h-full">
            <img src={a1} className="w-full h-full object-cover" loading="lazy" alt="" />
          </div>
          <div className="w-[50%]  h-full">
            <img src={a2} className="w-full h-full object-cover" loading="lazy" alt="" />
          </div>
        </div>

        <div className="absolute bottom-[-20px] left-[50%] translate-x-[-50%] bg-[#153750] w-12 h-12 rounded-[50%] overflow-hidden">
          <img
            src={a2}
            className="w-full h-full object-contain"
            alt=""
            loading="lazy"
          />
        </div>
      </header>

      <main className="h-[40%] flex flex-col gap-2 ">
        <div className="flex flex-col items-center">
          <div className="font-secondary font-bold text-black text-base ">
            Mohamed Said
          </div>
          <div className="flex justify-center gap-2">
            <Star addStyle= "w-6 h-6 " />
            <Star addStyle= "w-6 h-6 " />
            <Star addStyle= "w-6 h-6 " />
            <Star addStyle= "w-6 h-6 " />
            <Star addStyle= "w-6 h-6 " />
          </div>
        </div>
        <p className="font-secondary font-normal text-black text-lg p-1 ">
          Lorem ipsum dolor sit amet consecur, adipisicing elit.
          Exercitationem cupiditate quam.
        </p>
      </main>
    </motion.div>
  );
};

export default Card;
