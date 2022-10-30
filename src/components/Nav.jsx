import React,{useState} from 'react'
import { AiOutlineMenuUnfold,AiOutlineCloseCircle } from "react-icons/ai";
const Nav = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <nav className='w-full flex items-center mx-auto  sm:px-2 justify-between h-16 fixed shadow bg-[#f6f6f6] z-10 px-8 sm:mx-0'>
        <div className="basis-[15%]">
            <img src="../../proimages/logo.png" alt="Abdul" className='w-[100%] sm:w-[70%] md:w-[60%]' />
        </div>
        <div className="list sm:block hidden">
        <ul className='flex gap-2 font-serif px-4'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
        <div className="mobile-nav block sm:hidden mr-6 relative" onClick={()=> setCollapsed(!collapsed)}>
            {
              collapsed ? <AiOutlineCloseCircle className='text-xl rounded-lg shadow'/>: <AiOutlineMenuUnfold className='text-xl'/>
            }
        </div>
        {
          collapsed && <div className="mobile--navigation sm:hidden shadow-lg bg-[#f3f3f3] w-64 absolute top-16 h-[100vh] right-0">
            <ul className='flex flex-col gap-12 font-serif px-16 py-8'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        }
    </nav>
  )
}

export default Nav