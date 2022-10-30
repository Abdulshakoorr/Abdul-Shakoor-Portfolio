import React from "react";
import { RiComputerFill } from "react-icons/ri";

const Middle = () => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center  gap-2 m-9">
      <span className="basis-[33%] h-[2px] rounded bg-black" ></span>
      <p className="basis-[30%] text-center relative font-serif"> <RiComputerFill className="text-[#ef2e79]"/>
        If you want your <b className="text-[#ef2e79]"> website</b> to stand out from the competition, you
        need a stand-out <b className="text-[#ef2e79]">design company </b>
      </p>
      <span className="basis-[33%] h-[2px] rounded bg-black" ></span>
    </div>
  );
};

export default Middle;
