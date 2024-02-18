import React, { useState, useCallback } from "react";
import Popup from "reactjs-popup";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { useDropzone } from "react-dropzone";
import Stars from "react-stars";

import { Success } from "../../assets/svgs/svgs";

function PopUp({ isOpen, closePopup }) {
  const [images, setImages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isMobile = useMediaQuery({ maxWidth: 399 });
  const [margin, setMargin] = useState(0);

  const handleRatingChange = (newRating) => {
    console.log("New rating:", newRating);
    // You can handle the rating change here, such as submitting it to a server
  };

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    setMargin((prevMargin) => (isMobile ? prevMargin - 330 : prevMargin - 380));
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Add the dropped images to the state
    setImages((prevImages) => [...prevImages, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/jpeg", // Specify accepted file types
    maxFiles: 4, // Maximum number of files allowed
  });

  const handleRemoveImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const ReviewSubmited = () => {
    setMargin((prevMargin) => (isMobile ? prevMargin - 330 : prevMargin - 380));
    setTimeout(() => {
      closePopup();
    }, [1000]);
  };

  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <Popup
      overlayStyle={{ background: "rgba(0, 0, 0, .8)" }}
      open={isOpen}
      onClose={closePopup}
      modal
      nested>
      {(close) => (
        <motion.div
          variants={container}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className="w-[340px] sm:w-[390px] bg-[#fff] text-black rounded-md p-2 flex flex-col items-center gap-5 shadow-2xl  ">
          <button onClick={close} className="text-2xl text-secondary ms-auto">
            &times;
          </button>

          <main className="w-full overflow-x-hidden flex gap-10">
            <form
              style={{ marginLeft: margin }}
              className="flex flex-col gap-3 pb-5 min-w-full"
              onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2">
                <label htmlFor="fullname">Your name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className={`px-2 py-1 border rounded-sm bg-white ${
                    errors.fullname
                      ? "border-red-500 border-opacity-100"
                      : "border-black border-opacity-80"
                  }`}
                  placeholder="Enter your full name"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-red-500 font-semibold text-sm mt-[-8px]">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`px-2 py-1 border rounded-sm bg-white ${
                    errors.email
                      ? "border-red-500 border-opacity-100"
                      : "border-black border-opacity-80"
                  }`}
                  placeholder="Enter your Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <span className="text-red-500 font-semibold text-sm mt-[-8px]">
                    This field is required
                  </span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span className="text-red-500 font-semibold text-sm mt-[-8px]">
                    Invalid email format
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <h2>Rate this item:</h2>
                <Stars
                  count={5}
                  onChange={handleRatingChange}
                  size={24}
                  color1={"#ccc"}
                  color2={"#ff0"}
                  half={false}
                  value={0} // Initial value, you can set it to the default rating
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="review">Review</label>
                <textarea
                  name="review"
                  id="review"
                  placeholder="Add your review"
                  className={`px-2 py-1 border rounded-sm bg-white ${
                    errors.review
                      ? "border-red-500 border-opacity-100"
                      : "border-black border-opacity-80"
                  }`}
                  cols="30"
                  rows="4"
                  {...register("review", { required: true })}></textarea>
                {errors.review && (
                  <span className="text-red-500 font-semibold text-sm mt-[-8px]">
                    This field is required
                  </span>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="font-bold mt-2 text-white text-lg cursor-pointer border rounded-sm border-white px-4 py-2 bg-[#0F182B] transition-colors ease-linear duration-200 w-[150px] mx-auto flex justify-center">
                Next
              </motion.button>
            </form>

            <div className="min-w-[80%] mx-auto flex flex-col gap-10 pb-5 pt-10">
              <div className="w-full border border-dashed border-black rounded-md h-40 flex justify-center items-center">
                <div className="" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <span>Browse files</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-5">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded ${index}`}
                      className=" w-20 h-16 rounded-sm border border-black"
                    />
                    <button
                      type="button"
                      name="removeImage"
                      className="absolute top-[-8px] right-[-8px] w-[25px] h-[25px] bg-black bg-opacity-90 rounded-[50%] flex justify-center items-center"
                      onClick={() => handleRemoveImage(index)}>
                      <span className="font-primary text-white text-2xl">
                        {" "}
                        &times;
                      </span>
                    </button>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={ReviewSubmited}
                type="button"
                className="font-semibold mt-2 text-white text-lg cursor-pointer border rounded-sm border-white px-4 py-2 bg-[#0F182B] transition-colors ease-linear duration-200 w-[150px] mx-auto flex justify-center">
                Send Review
              </motion.button>
            </div>

            <div className="min-w-full mx-auto flex flex-col items-center gap-5 pb-5 pt-10">
              <Success addStyle={""} />

              <span className="text-[#31F48B] text-2xl font-semibold">
                Review Submited
              </span>
            </div>
          </main>
        </motion.div>
      )}
    </Popup>
  );
}

export default PopUp;
