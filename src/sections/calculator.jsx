import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Scale, Men, Women, Spinner, ExMark } from "../assets/svgs/svgs";
import CalculatorPage from "../components/calculatorPage/calculatorPage";
import Tooltip from "../components/BmiToolTip/Tooltip";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, translateX: -100 },
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.7 } },
};

const markVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2 } },
};

const mainVariants = {
  hidden: { opacity: 0, translateY: 100 },
  visible: {
    opacity: 1,
    translateY: 2,
    transition: { duration: 0.7, delay: 0.4 },
  },
};

const Calculator = () => {
  const [gender, setGender] = useState(null);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [differance, setDifferance] = useState(0);
  const [calculationsStarts, setCalculationsStarts] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: true });
  const elementRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (calculationsStarts) setLoading(false);
    }, 2500);
  }, [loading]);

  const handleGenderClick = (e) => {
    setGender(e.target.dataset.type);
  };

  const handleWeightChange = (e) => {
    const value = parseFloat(e.target.value);

    if (!isNaN(value)) setWeight(value);
  };

  const handleHeightChange = (e) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value)) setHeight(value);
  };

  const calculateBMI = (weight, height) => {
    if (weight === 0 || height === 0) {
      return;
    }

    setLoading(true);
    setCalculationsStarts(true);

    // Convert height from centimeters to meters
    let heightM = height / 100;

    // Calculate BMI
    let bmi = weight / (heightM * heightM);
    setBmi(bmi);

    if (bmi < 18.5) {
      setResult("Underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
      setResult("Normal weight");
    } else if (bmi >= 25 && bmi < 30) {
      setResult("Overweight");
    } else {
      setResult("Obese");
    }

    // Calculate target BMI within the normal weight range
    let targetBMI = (18.5 + 24.9) / 2;

    // Calculate weight difference needed to reach normal weight
    let weightDifference = (targetBMI - bmi) * heightM * heightM;

    setDifferance(weightDifference);
  };

  const repeat = () => {
    setCalculationsStarts(false);

    setWeight(0);
    setHeight(0);
    setBmi(0);
    setLoading(false);
    setResult("");
    setGender(null);
    setDifferance(0);
  };

  return (
    <section className="min-h-[70vh] py-5 sm:p-0 md:h-[80vh] firstSection relative overflow-hidden">
      <div className="wave2 first">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"></path>
        </svg>
      </div>

      <div className="con mt-10 pt-0" ref={ref}>
        <div className="relative md:px-20 md:py-10 flex items-center justify-between">
          <motion.div
            ref={elementRef}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={titleVariants}
            className="flex items-center gap-2 md:gap-7">
            <span>
              <Scale addStyle={"h-7 w-7 md:h-10 md:w-10"} />
            </span>
            <span className="font-primary font-bold text-white text-xl  md:text-[40px] tracking-tighter">
              كم تحتاج إلى أن تخسر؟
            </span>
          </motion.div>
          <motion.div
            ref={elementRef}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={markVariants}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}>
            <ExMark addStyle={"w-5 h-5 md:w-8 md:h-8 cursor-pointer"} />
          </motion.div>
          <Tooltip isHovered={isHovered} />
        </div>

        {!calculationsStarts ? (
          <motion.main
            ref={elementRef}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={mainVariants}
            className="w-full flex justify-center font-secondary mt-12">
            <div className="w-full lg:w-[40%] flex flex-col gap-10 mx-auto">
              <div className="flex flex-col md:flex-row md:items-center gap-5">
                <label className="text-base md:text-lg leading-normal w-[200px]">
                  اختر جنسك :
                </label>

                <div className="flex items-center gap-4 mx-auto md:mx-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleGenderClick}
                    data-type="men"
                    className={
                      "px-4 py-2 w-[120px] cursor-pointer border rounded-sm text-white font-normal flex items-center justify-around " +
                      `${
                        gender === "men"
                          ? "border-2 border-blue-400 "
                          : "border border-white"
                      }`
                    }>
                    <Men addStyle={"w-6 h-6"} />
                    ذكر
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleGenderClick}
                    data-type="women"
                    className={
                      "px-4 py-2 w-[120px] cursor-pointer rounded-sm text-white font-normal flex items-center justify-around " +
                      `${
                        gender === "women"
                          ? "border-2 border-red-400 "
                          : "border border-white"
                      }`
                    }>
                    <Women addStyle={"w-6 h-6"} /> أنثى
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-5">
                <label
                  className="text-base md:text-lg leading-normal w-[200px]"
                  htmlFor="weight">
                  أدخل وزنك :
                </label>

                <div className="flex items-center gap-3 mx-auto md:mx-0">
                  <input
                    onChange={handleWeightChange}
                    type="number"
                    placeholder="0"
                    id="weight"
                    min={0}
                    value={weight}
                    className="bg-white outline-none px-2 py-1 text-black"
                  />

                  <span>كلغ</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-5">
                <label
                  className="text-base md:text-lg leading-normal w-[200px]"
                  htmlFor="height">
                  أدخل طولك:
                </label>

                <div className="flex items-center gap-3 mx-auto md:mx-0">
                  <input
                    onChange={handleHeightChange}
                    type="number"
                    placeholder="0"
                    id="height"
                    value={height}
                    min={0}
                    className="bg-white outline-none px-2 py-1 text-black"
                  />

                  <span>سم</span>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <motion.button
                  aria-label="calculate"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => calculateBMI(weight, height)}
                  className="font-bold text-lg cursor-pointer border rounded-sm border-white px-6 py-3 hover:bg-white hover:text-[#0F182B] transition-colors ease-linear duration-200 ">
                  احسب
                </motion.button>
              </div>
            </div>
          </motion.main>
        ) : loading ? (
          <main className="w-full flex justify-center mt-12 pt-10 ">
            <Spinner addStyle={"w-10 h-10 animate-spin"} />
          </main>
        ) : (
          <CalculatorPage
            result={result}
            bmi={bmi}
            differance={differance}
            repeat={repeat}
          />
        )}
      </div>
    </section>
  );
};

export default Calculator;
