import React from "react";
import { FcMindMap,FcFinePrint,FcMultipleDevices } from "react-icons/fc";

const Services = () => {
  const data = [
    {
      id:1,
      title:"Web/App Design",
      desc:"   UX and UI design makes any brand or Business from ground to the sky.With modern design from an expert designer make any your work much easier to show to your clients and audience to grow fast. We make your dream come true.",
      icon:<FcMindMap/>
    },
    {
      id:2,
      title:"Web/App Development",
      desc:"   We help people to grow by building their website for their brands and company Development with modern technologies is much awesome responsive design media queries and grid system make it mobile friendly.",
      icon:<FcMultipleDevices/>
    },
    {
      id:3,
      title:"Web SEO",
      desc:"  Seo is best for ranking in the search result if your website is optimized with SEO package google will find it much easier for their audience optimize your website On page that audience could reach to you much faster .",
      icon:<FcFinePrint/>
    },
  ]
  return (
    <section className="py-8">
    <h2 className="text-2xl font-semibold font-serif text-center mt-8" id="services">Services</h2>
      <div className="h-full my-4 flex flex-wrap gap-4 items-center justify-center">
      {
            data.map((items) =>{
              return <div key={items.id} className="card1 p-2 bg-pink-500 hover:p-2 hover:bg-slate-200 hover:text-pink-900 shadow-xl shadow-[#24242499] basis-64 rounded md:p-4 text-center h-[400px]">
              <span className="text-5xl ">{items.icon}</span>
              <h1 className="text-2xl p-4 font-serif font-bold">{items.title}</h1>
              <p className="text-sm">
                {items.desc}
              </p>
            </div>
            })
      }
      </div>
    </section>
  );
};

export default Services;
