import React from "react";

const calculateBMI = (weight, height) => {
  if (weight === 0 || height === 0) {
    return;
  }

  // Convert height from centimeters to meters
  let heightM = height / 100;

  // Calculate BMI
  let bmi = weight / (heightM * heightM);

  let result;

  if (bmi < 18.5) {
    result = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    result = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    result = "Overweight";
  } else {
    result = "Obese";
  }

  // Calculate target BMI within the normal weight range
  let targetBMI = (18.5 + 24.9) / 2;

  // Calculate weight difference needed to reach normal weight
  let weightDifference = (targetBMI - bmi) * heightM * heightM;

  return {
    result,
    weightDifference,
  };
};

export { calculateBMI };
