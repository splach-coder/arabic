import React from "react";
import { motion } from "framer-motion";

const AnimatedTexts = ({ text }) => {
  const title = text.split("");

  return title.map((el, i) => (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.1,
        delay: i / 30,
      }}
      key={i}>
      {el}
    </motion.span>
  ));
};

export default AnimatedTexts;
