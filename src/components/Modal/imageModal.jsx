import React, { useState, useRef } from "react";

const ImageModal = ({ modal, closeModal, img }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const innerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setPosition({ x, y });
  };

  const handleClickOutside = (e) => {
    e.preventDefault(); // Prevent default action of the click event
    if (modal && innerRef.current && !innerRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 overflow-hidden cursor-pointer  ${
        modal ? "flex" : "hidden"
      } justify-center items-center z-50`}>
      <span
        className="absolute top-2 right-2 font-primary text-2xl text-white bg-gray-500 bg-opacity-30 w-[30px] h-[30px] rounded-[50%] cursor-pointer flex justify-center items-center"
        onClick={closeModal}>
        &times;
      </span>
      <div
        ref={innerRef}
        className="relative w-[80%] h-[80%] overflow-hidden cursor-zoom-in"
        onMouseMove={handleMouseMove}>
        <img
          src={img}
          loading="eager"
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full object-contain transition-opacity ease-in duration-300 hover:scale-105"
          alt=""
          style={{
            transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ImageModal;
