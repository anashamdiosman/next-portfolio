import React from "react";
import { Meteor } from "./Meteor";
import Image from "next/image";

function Meteors({
  name,
  description,
  link,
}: {
  name: string;
  description: string;
  link: string;
}) {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="flex justify-center items-center w-full pb-6">
            <img
              src="/assets/svg/github-142-svgrepo-com.svg"
              alt="Jadwelny"
              height={100}
              width={100}
            />
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">
            {name}
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {description}
          </p>

          <div className="flex justify-center items-center w-full">
            <button
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-transparent bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            >
              Explore
            </button>
          </div>

          <Meteor number={20} />
        </div>
      </div>
    </div>
  );
}

export default Meteors;
