import React from "react";

const Tooltip = ({ isHovered }) => {
  return (
    <div dir="rtl"
      className={`${
        !isHovered ? "hidden " : "block "
      } bg-white shadow-lg p-7 absolute left-[50%] top-[10%] translate-x-[-50%] w-[80%] z-50 flex flex-col gap-5 rounded-md max-w-[400px] md:left-[75%] md:top-[40%]`}>
      <h1 className="text-black font-primary font-bold ">
        ماذا يعني مؤشر كتلة الجسم الخاص بك:
      </h1>
      <p className="text-gray-800 font-secondary font-medium text-base leading-5">
        مؤشر كتلة الجسم (BMI) هو حساب لحجمك يأخذ في الاعتبار طولك ووزنك. قبل عدة
        سنوات، أتذكر استخدام الرسوم البيانية التي طلبت منك العثور على طولك على
        الجانب الأيسر ثم تمرير إصبعك لليمين لرؤية "الوزن المثالي" الخاص بك من
        الخيارات المدرجة تحت أحجام "الهيكل" الصغيرة أو المتوسطة أو الكبيرة.
      </p>

      <div className="absolute right-[-9px] top-[3px] border-t-[10px] border-t-transparent border-l-[10px] border-l-white border-b-[10px] border-b-transparent"></div>
    </div>
  );
};

export default Tooltip;
