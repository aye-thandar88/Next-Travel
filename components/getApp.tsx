import React from "react";
import Button from "./button";
import Image from "next/image";

type Props = {};

const GetApp = (props: Props) => {
  return (
    <section className="max-container padding-container w-full">
      <div className={`get-app mt-10 `}>
        <div className="flex flex-col gap-12 justify-center items-start px-10">
          <h1 className="bold-40 lg:bold-64 mt-5 capitalize">
            Get for free now!
          </h1>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex flex-col w-full gap-3 xl:flex-row">
            <Button
              type={"button"}
              title={"App Store"}
              variant={"btn_white"}
              icon={"/apple.svg"}
            />
            <Button
              type={"button"}
              title={"Play Store"}
              variant={"btn_dark_green_outline"}
              icon="/android.svg"
            />
          </div>
        </div>
        <div className="flex items-center px-10">
          <Image
            src={"/phone2.png"}
            alt={"phone"}
            width={500}
            height={870}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
