import React, { useState, useRef } from "react";
import { Quotations, Right, Left, Add } from "../assets/svgs/svgs";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Card from "../components/Card/Card";

import PopUp from "../components/Popup/Popup";

const titleVariants = {
  hidden: { opacity: 0, translateX: -100 },
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.7 } },
};

const cardVariants = ({ delay }) => {
  return {
    hidden: { scale: 0, translateX: 300 },
    visible: {
      scale: 1,
      translateX: 0,
      transition: { duration: 0.7, delay: delay },
    },
  };
};

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const elementRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (id) => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const cards = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  return (
    <section
      ref={ref}
      className="firstSection min-h-[65vh] md:h-[80vh] px-3 py-10 md:py-20 overflow-hidden flex flex-col gap-10">
      <header>
        <motion.div
          ref={elementRef}
          initial="hidden"
          animate={inView ? "visible" : ""}
          variants={titleVariants}
          className="col-span-1">
          <h1 className="font-primary font-bold text-white text-3xl md:text-6xl md:leading-[70px] tracking-tighter">
            Trusted By 200+
            <span className="bg-white bg-opacity-30 ms-2 md:ms-0 pe-2">
              Client
            </span>
          </h1>
          <p className="font-primary text-bold text-base md:text-lg mt-2 md:mt-5 ms-5 md:ms-0">
            Don't just take our word for it.
          </p>
        </motion.div>
      </header>

      <main className="flex flex-col gap-10">
        <div className="flex gap-10 relative overflow-x-hidden">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}>
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Card
                  card={card}
                  index={index}
                  elementRef={elementRef}
                  inView={inView}
                  cardVariants={cardVariants}
                />
              </SwiperSlide>
            ))}
            ...
          </Swiper>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          title="addreviewbtn"
          onClick={openPopup}
          className="font-bold text-lg cursor-pointer border rounded-sm border-white px-6 py-3 bg-[#F5F5F5] hover:text-[#0F182B] transition-colors ease-linear duration-200 w-[150px] mx-auto flex justify-center">
          <Add addStyle={"w-7 h-7"} />
        </motion.button>
      </main>

      <PopUp isOpen={isOpen} closePopup={closePopup} />
    </section>
  );
};

export default Testimonials;
