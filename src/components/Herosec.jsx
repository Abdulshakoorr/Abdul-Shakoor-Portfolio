import React from "react";
import { BiPhoneIncoming } from "react-icons/bi";

const Herosec = () => {
  return (
    <main className="max-w-[100vw] h-4/5 pt-16 flex gap-8 flex-col-reverse sm:flex-row md:flex-row lg:flex-row items-center justify-center">
      <div className="text-containent basis-2/5 py-16 text-center lg:text-left sm:text-left md:text-left">
        <h3 className="text-sm pb-4">
          My self
           <span className="text-lg bold text-[#EF2E79] "> Abdul Shakoor</span>
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-4xl text-center sm:text-left lg:text-5xl leading-normal">
            I'm a UX/UI <b>Designer</b>  and web <b>Developer.</b> 
        </h1>
        <p className="text-sm pt-4 pb-4 font-serif text-gray-800">
         Your brand takes control of its visual <br /> representation with custom web design
        </p>
        <a href="#contact" className="inline-block mt-4 px-6 py-2 rounded-sm shadow-md hover:bg-[#ef2e79] hover:text-white bg-[#FFD130] relative">Contact<BiPhoneIncoming className="absolute top-1  right-1"/>
        </a>
      </div>
      <div className="hero-img basis-2/4">
        <img
          src="proimages/hero-img.png"
          alt=""
          className="w-full object-cover"
        />
      </div>
    </main>
  );
};

export default Herosec;
