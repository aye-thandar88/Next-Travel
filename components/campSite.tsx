import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

type CampSiteProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
};

const CapmSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampSiteProps) => {
  return (
    <div className={`${backgroundImage} h-full w-full bg-cover bg-no-repeat lg:rounded-xl xl:rounded-2xl`}>
      <div className="flex flex-col items-start justify-between h-full py-5">
        <div className="flex flex-row justify-between items-start h-1/2">
          <div className="flex gap-3">
            <div className="p-3">
              <Image src="/map.svg" alt="map" width={28} height={28} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="bold-18 text-white">{title}</h4>
              <p className="regular-14 text-white">{subtitle}</p>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="flex gap-1 items-center p-3">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                alt={url}
                key={url}
                width={32}
                height={32}
                className="inline-block rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

export default CapmSite;
