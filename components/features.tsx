import { FEATURES } from "@/constants";
import React from "react";
import Feature from "./feature";
import Image from "next/image";

type Props = {};

const Features = (props: Props) => {
  return (
    <section className="max-container padding-container w-full">
      <div className="flex flex-col gap-5 mt-5 py-10">
        <div>
          <p className="bold-40 lg:bold-64 mt-5 capitalize">Our Features</p>
        </div>
        <div className="flex flex-col xl:flex-row">
          <div className="xl:w-1/2 mt-10 flex justify-center xl:px-20 p-10 ">
            <Image
              src={"/phone6.png"}
              alt={"phone"}
              width={500}
              height={370}
              className="w-full"
            />
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 xl:w-1/2 py-10">
            {FEATURES.map((feature) => (
              <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                key={feature.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
