import React from 'react'
import { AiFillGithub,AiOutlineDropbox,AiOutlineBehance,AiFillDribbbleCircle } from "react-icons/ai";

const Portfolio = () => {
  const portfolios = [
    {
      id:1,
      img: "proimages/portfolio-img/food react - Copy.png",
      heading:'Food website',
      p:'Click To Visit',
      link:'https://foodbunny.netlify.app'
    },
    {
      id:2,
      img: "proimages/portfolio-img/car.png",
      heading:'Car rent website',
      p:'Click To Visit',
      link:'https://car-rental-web.netlify.app'
    },
    {
      id:3,
      img: "proimages/portfolio-img/ecomerce2222.png",
      heading:'E-commerce website',
      p:'Click To Visit',
      link:'https://e-shop-com.netlify.app'
    },
    {
      id:4,
      img: "proimages/portfolio-img/ecomed.png",
      heading:'E-commerce Design',
      p:'Click To Visit',
      link:'https://www.figma.com/proto/VEHFPCc5mQ5ylWWBrHfhGc/Untitled?page-id=0%3A1&node-id=1%3A2&viewport=173%2C196%2C0.13&scaling=scale-down-width&starting-point-node-id=1%3A2'
    },
    {
      id:5,
      img: "proimages/portfolio-img/Desb.png",
      heading:'Admin Dashboard',
      p:'Click To Visit',
      link:'https://www.figma.com/proto/tPsqRWAViKmREUUvulXdXW/Dashborad-design?page-id=0%3A1&node-id=1%3A2'
    },
    {
      id:6,
      img: "proimages/portfolio-img/AppDesign.png",
      heading:'App Design',
      p:'Click To Visit',
      link:'https://www.figma.com/proto/ru7C0XcNX7mRBPkLZC9tLz/food-app?page-id=0%3A1&node-id=2%3A3&starting-point-node-id=2%3A3&scaling=scale-down'
    },
  ]
  return (
    <>
     <h2 className="text-2xl font-semibold font-serif text-center mt-8" id='portfolio'>Portfolios</h2>
        <div className='w-full h-full flex flex-wrap items-center justify-center py-24 gap-2 lg:p-16 md:p-8 sm:p-4'>
          {
            portfolios.map((items) =>{
              return<div key={items.id} className=" relative box basis-64 p-2 hover:p-0 rounded-md shadow-lg shadow-neutral-600  ease-in-out">
              <img src={items.img} alt="" className='rounded-md'/>
               <a href={items.link} target= "blank" className='absolute top-14 left-14 font-serif font-medium transparent p-4 shadow-lg text-slate-100  hover:bg-slate-800 rounded'>
                <h1>{items.heading}</h1>
                <p>{items.p}</p>
               </a>
          </div>
            })
          }
        </div>
        <div className="social-links flex items-center flex-wrap justify-center gap-4 text-[#000000] py-4 ">
          <div className="github flex items-center justify-center hover:text-[#f51111]">
            <a href="https://github.com/Abdulshakoorr" target='blank' className="github gap-2 flex items-center justify-center hover:text-[#f51111]">
              <AiFillGithub/>
              <p>Github</p>
            </a>
          </div>
          <div className="Netlify flex items-center justify-center hover:text-[#19ffdc]">
            <a href="https://app.netlify.com/user/settings" target='blank' className="Netlify gap-2 flex items-center justify-center hover:text-[#19ffdc]">
            <AiOutlineDropbox/>
            <p>Netlify</p>
            </a>
          </div>
          <div className="Behance flex items-center justify-center hover:text-[#1928ff]">
            <a href="https://www.behance.net/abdulshakoorafridi" target='blank'  className="Behance gap-2 flex items-center justify-center hover:text-[#1928ff]">
            <AiOutlineBehance/>
            <p>Behance</p>
            </a>
          </div>
          <div className="Behance flex items-center justify-center hover:text-[#ff1966]">
            <a href="https://dribbble.com/Afridi0331" target='blank' className="Behance gap-2 flex items-center justify-center hover:text-[#ff1966]">
              <AiFillDribbbleCircle/>
              <p>Dribble</p>
            </a>
          </div>
        </div>
    </>
  )
}

export default Portfolio