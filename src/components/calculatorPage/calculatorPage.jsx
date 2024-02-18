import React from "react";
import { motion } from "framer-motion";

const CalculatorPage = ({ result, bmi, differance, repeat }) => {
  const titleVariants = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.3 },
    },
    hidden: { opacity: 0, translateY: 100, transition: { duration: 0.3 } },
  };

  return (
    <main className="w-full flex flex-col items-center gap-12 rounded-sm font-secondary mt-12">
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-center flex flex-col gap-5">
        <span className="text-3xl font-semibold leading-relaxed ">
          {result}
        </span>
      </motion.h1>

      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-center flex flex-col gap-5">
        {bmi < 18.5 || bmi >= 25 ? (
          <span className="text-xl text-gray-400  font-semibold leading-relaxed ">
            <strong className="text-bold text-red-500">Uh Oh!</strong> <br />
            You need to
            {differance.toFixed(2) < 0
              ? " Loss About " + differance.toFixed(2) * -1 + " KG "
              : " Gain About " + differance.toFixed(2) + " KG "}
            to be in the perfect shape.
          </span>
        ) : (
          <span className="text-xl text-gray-400  font-semibold leading-relaxed">
            {`your in ${
              parseInt(differance) === 0.0 ? "perfect shape " : "normal weight "
            }`}

            {parseInt(differance) !== 0 ? (
              <span>
                but if u want to get the perfect shape u need to
                {differance.toFixed(2) < 0
                  ? " Loss About " + differance.toFixed(2) * -1 + " KG "
                  : " Gain About " + differance.toFixed(2) + " KG "}
              </span>
            ) : (
              ""
            )}
          </span>
        )}
      </motion.div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={repeat}
        className="px-4 py-2 w-[120px] cursor-pointer border rounded-sm text-white font-bold">
        كرر
      </motion.button>
    </main>
  );
};

export default CalculatorPage;
