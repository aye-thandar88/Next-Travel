import Image from "next/image";
import React from "react";

type FeatureProps = {
  icon: string;
  title: string;
  description: string;
  key: string;
};

const Feature = ({ icon, title, description, key }: FeatureProps) => {
  return (
    <div
      className="flex w-full flex-1 flex-col items-start"
      key={key}
    >
      <div className="w-16 h-16 flex justify-center bg-green-50 rounded-full">
        <Image src={icon} alt="img" width={32} height={20} />
      </div>

      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none text-justify">
        {description}
      </p>
    </div>
  );
};

export default Feature;
