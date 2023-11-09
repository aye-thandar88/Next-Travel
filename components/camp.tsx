import React from "react";
import CapmSite from "./campSite";

type Props = {};

const Camp = (props: Props) => {
  return (
    <section className="max-container padding-container w-full xl:mb-20">
      <div className="flex flex-row gap-5 py-10 mt-10">
        <div className="flex w-full justify-start h-[340px] lg:h-[400px] xl:h-[640px]">
          <CapmSite
            title="Putuk Truno Camp"
            subtitle="Prigen, Pasuruan"
            peopleJoined="50+ Joined"
            backgroundImage="bg-bg-img-1"
          />
        </div>
        {/* <div className="flex w-full justify-start h-[340px] lg:h-[400px] xl:h-[640px]">
          <CapmSite
            title="Putuk Truno Camp"
            subtitle="Prigen, Pasuruan"
            peopleJoined="50+ Joined"
            backgroundImage="bg-bg-img-1"
          />
        </div> */}
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-36 xl:-mt-80 lg:mr-6">
        <div className="bg-green-50 lg:opacity-80 px-8 py-10 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <p className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </p>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That is why we are here for those of you who want to start an
            adventure
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
