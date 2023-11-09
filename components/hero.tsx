import React from "react";
import Image from "next/image";
import Button from "./button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="max-container padding-container w-full">
      <div className="flex flex-col xl:flex-row gap-20 items-center">
        <div className="gap-3 flex flex-col xl:w-1/2">
          <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
          <p>
            We want to be on each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature. We can help you on an
            adventure around the world in just one app
          </p>
          <div className="my-11 flex flex-wrap gap-7">
            <div className="flex items-center gap-3">
              {" "}
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image
                    src="/star.svg"
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
                  />
                ))}
            </div>
            <p className="bold-16 lg:bold-20 text-blue-70">
              198k
              <span className="regular-16 lg:regular-20 ml-2">
                Excellent Reviews
              </span>
            </p>
          </div>
          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button type="button" title="Download App" variant="btn_green" />
            <Button
              type="button"
              title="How we work?"
              icon=""
              variant="btn_white_text"
            />
          </div>
        </div>
        <div className="flex items-start bg-bg-img-2 md:w-[650px] md:h-[640px]">
          <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Location</p>
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </div>
              <p className="bold-20 text-white">Aguas Calientes</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="regular-16 text-gray-20">Distance</p>
                <p className="bold-20 text-white">173.28 mi</p>
              </div>
              <div>
                {" "}
                <p className="regular-16 text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2.040 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
