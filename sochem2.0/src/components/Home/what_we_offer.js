import React from "react";
import Image from "next/image";

const what_we_offer = () => {
  return (
    <div className="bg-slate-900 mt-12 mb-12 pb-24">
      <div className="m-12 p-12">
        <p className="font-bold font-heading text-center text-[#FFFFFF] text-xl sm:text-[2.5rem]">
          What we offer?
        </p>
      </div>
      <div className=" mr-12 ml-12 gap-12 pr-12 pl-12 flex flex-row  ">
        <div className="mb-5 ml-12 mt-8 shadow-2xl bg-[#312e81] rounded border-2 border-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300   ">
          <a href="#">
            <div className="w-full h-full">
              <img
                className="object-scale-down h-48 w-96"
                src="/images/Saly-12.svg"
              />
              <div className="py-5">
                <div className="font-bold text-xl mb-10 card-text text-center text-slate-300">
                  200+ Hours<br></br>
                  On-Demand Videos
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mb-10  mr-12 ml-12 shadow-2xl bg-[#312e81] rounded border-2 border-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 ">
          <a href="#">
            <div className="w-full h-full">
              <img
                className="object-scale-down h-48 w-96 "
                src="/images/Saly-10.svg"
              />
              <div className="py-5">
                <div className=" font-bold text-xl mb-2 card-text text-center text-slate-300 ">
                  50+ <br></br>
                  LIVE Workshops
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mb-5 mr-12 mt-8 shadow-2xl bg-[#312e81] rounded border-2 border-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 ">
          <a href="#">
            <div className="w-full h-full">
              <img
                className="object-scale-down h-48 w-96 "
                src="/images/Saly-16.svg"
              />
              <div className="py-5">
                <div className="font-bold text-xl mb-10 card-text text-center text-slate-300">
                  250+ Hours<br></br>
                  Daily Speaking Practice
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/Group 7019.svg"
          width={250}
          height={250}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default what_we_offer;
