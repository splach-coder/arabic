import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="flex justify-start py-7">
      <nav>
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-secondary font-normal text-xl leading-[26px]">
            <span className="font-bold">T</span>rim
            <span className="font-bold">D</span>own
          </motion.span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
