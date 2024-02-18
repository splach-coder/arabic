import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import stars from "../assets/images/stars.png";
import aaa from "../assets/images/aaa.png";

const textVariants = {
  hidden: { opacity: 0, translateX: -100 },
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.7 } },
};

const descVariants = {
  firstVariant: {
    hidden: { opacity: 0, translateX: -100 },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.7, delay: 0.4 },
    },
  },
  secondVariant: {
    hidden: { opacity: 0, translateX: 100 },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.7, delay: 0.8 },
    },
  },
};

const cardsVariants = {
  cardOne: {
    hidden: { opacity: 0, translateX: -100 },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  },
  cardTwo: {
    hidden: { opacity: 0, translateY: 200 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.9, delay: 0.4 },
    },
  },
  cardThree: {
    hidden: { opacity: 0, translateX: 100 },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 1, delay: 0.6 },
    },
  },
};

const Products = ({ openModal }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const elementRef = useRef(null);

  return (
    <section
      id="products"
      ref={ref}
      className="bg-white flex flex-col gap-10 md:grid md:grid-cols-3 mb-10 md:mb-0  mt-[25vh] sm:mt-[10vh] md:mt-[25vh] w-full md:h-[100vh] overflow-hidden">
      <div className="con md:col-span-2 flex flex-col">
        <motion.div
          ref={elementRef}
          initial="hidden"
          animate={inView ? "visible" : ""}
          variants={textVariants}
          className="md:px-20 py-10 flex gap-7">
          <span>
            <img src={stars} className="w-8 h-8" alt="stars" loading="lazy" />
          </span>
          <span className="font-primary font-bold text-black text-2xl md:text-[40px] tracking-tighter">
            Are you motivated to lose weight <br /> as quickly as possible?
          </span>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center gap-4 md:col-span-1">
            <motion.div
              ref={elementRef}
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={cardsVariants.cardOne}
              className="relative border border-black w-[250px] h-[300px]">
              <img
                className="w-full h-full object-contain img-bg"
                src={aaa}
                alt="product"
                loading="lazy"
              />

              <motion.div
                onClick={() => openModal(aaa)}
                whileHover={{ scale: 1.2 }}
                className="absolute bottom-2 left-2 bg-white w-10 h-10 rounded-[50%] cursor-pointer ">
                <span className="text-black rotate-[-45deg] text-3xl absolute left-[50%] top-[50%] translate-x-[-60%] translate-y-[-54%]">
                  &rarr;
                </span>
              </motion.div>
            </motion.div>

            <motion.span
              ref={elementRef}
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={descVariants.firstVariant}
              className="text-gray-800 w-[250px] font-secondary font-bold text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda.
            </motion.span>
          </div>

          <div className="flex justify-center md:block md:col-span-1 md:pt-16">
            <motion.div
              ref={elementRef}
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={cardsVariants.cardTwo}
              className="relative border border-black w-[350px] h-[400px]">
              <img
                className="w-full h-full object-contain img-bg"
                src={aaa}
                loading="lazy"
                alt=""
              />
              <motion.div
                onClick={() => openModal(aaa)}
                whileHover={{ scale: 1.2 }}
                className="absolute bottom-2 left-2 bg-white w-10 h-10 rounded-[50%] cursor-pointer ">
                <span className="text-black rotate-[-45deg] text-3xl absolute left-[50%] top-[50%] translate-x-[-60%] translate-y-[-54%]">
                  &rarr;
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4  md:col-span-1">
        <motion.div
          ref={elementRef}
          initial="hidden"
          animate={inView ? "visible" : ""}
          variants={cardsVariants.cardThree}
          className="relative border border-black w-[300px] h-[350px]">
          <img
            className="w-full h-full object-contain img-bg"
            src={aaa}
            alt=""
            loading="lazy"
          />
          <motion.div
            onClick={() => openModal(aaa)}
            whileHover={{ scale: 1.2 }}
            className="absolute bottom-2 left-2 bg-white w-10 h-10 rounded-[50%] cursor-pointer ">
            <span className="text-black rotate-[-45deg] text-3xl absolute left-[50%] top-[50%] translate-x-[-60%] translate-y-[-54%]">
              &rarr;
            </span>
          </motion.div>
        </motion.div>

        <motion.span
          ref={elementRef}
          initial="hidden"
          animate={inView ? "visible" : ""}
          variants={descVariants.secondVariant}
          className="text-gray-800 w-[250px] font-secondary font-bold text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda.
        </motion.span>
      </div>
    </section>
  );
};

export default Products;
