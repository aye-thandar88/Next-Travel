import React from "react";
import Image from "next/image";

type Props = {};

const Guide = (props: Props) => {
  return (
    <section className="max-container padding-container w-full">
      <div className="flex flex-col gap-3 py-10">
        <div>
          <Image src="/camp2.jpg" alt="map" width={58} height={28} />
          <h1 className="regular-20">WE ARE HERE FOR YOU</h1>
        </div>
        <div className="w-full flex items-start flex-wrap">
          <div className=" mb-5 flex flex-col gap-5  py-10">
            <p className="bold-40 lg:bold-64">Guide You to Easy Path</p>
            <p className="regular-16 text-gray-30">
              Only with the hilink application you will no longer get lost and
              get lost again, because we already support offline maps when there
              is no internet connection in the field. Invite your friends,
              relatives and friends to have fun in the wilderness through the
              valley and reach the top of the mountain
            </p>
          </div>
          <div
            className={`bg-bg-img-2 h-[640px] w-full bg-cover bg-no-repeat lg:rounded-xl xl:rounded-2xl mt-4`}
          >
            <div className="relative z-20 flex w-[368px] rounded-3xl border-2 border-green-90 px-7 py-8 lg:ml-10 gap-4 bg-gray-10">
              <Image src="/meter.svg" alt="meter" width={58} height={158} />
              <div className="flex flex-col justify-between gap-12">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row justify-between">
                    <p className="regular-16 text-gray-30">Destination</p>
                    <p className="regular-16 text-green-50">48 min</p>
                  </div>
                  <p className="bold-20">Aguas Calientes</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="regular-16 text-gray-30">Start track</p>
                  <p className="bold-20">Wonorejo Pasuruan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
