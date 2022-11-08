import React from "react";
import { FiDownloadCloud } from "react-icons/fi";
import { FcGenealogy } from "react-icons/fc";
const About = () => {
  return (
    <div className="relative" id="about">
      <section className="flex flex-col rounded bg-[#EBDFB7] h-[70%] sm:flex-row items-center py-16">
        <div className="about-img basis-2/4 p-8 shadow-xl relative">
          <img
            src="proimages/Group 13.png"
            alt=""
            className="w-full object-cover"
          />
          <video
            src="proimages/pro.mp4"
            autoPlay
            controls
            className="absolute -bottom-10 w-48 sm:w-72 rounded shadow-sm shadow-yellow-400"
          ></video>
        </div>
        <div className="text-group basis-2/5 flex flex-col gap-4 p-8">
          <h2 className="text-2xl font-serif mt-2 font-semibold">About me</h2>
          <p className="font-serif text-sm text-gray-800">
            My self Abdul Shakoor. I am a full stack Web-Developer and designer
            it has been 2 years since I completed my college education in
            computer science I found my passion in web design and development I
            felt joy by building fantastic projects using different and
            innovative technologies and working with most of the frameworks
            which makes life so much easier. I also provide freelancing services
            you can hire me as your UX / UI designer and developer for your
            projects. Thank’s
          </p>
          <h2 className="text-bold text-xl font-semibold">Education</h2>
          <ul className="font-serif text-sm">
            <li>UX / UI Designer</li>
            <li>Developer</li>
          </ul>
          <a
            href="proimages/Updated CV.pdf"
            download
            className="block mt-4 px-6 py-2 rounded-sm shadow-md hover:bg-[#ef2e79] hover:text-white bg-[#FFD130] relative"
          >
            Download CV
            <FiDownloadCloud className="absolute top-1  right-1" />
          </a>
        </div>
      </section>
      <div className="skill-section px-16 py-2 text-center tracking-[.2rem] shadow-2xl rounded-md bg-slate-200 w-64 absolute -bottom-4 right-16 md:right-64  shadow-[#878787] flex flex-row ">
        Skill Section <FcGenealogy className="text-2xl"/>
      </div>
    </div>
  );
};

export default About;
