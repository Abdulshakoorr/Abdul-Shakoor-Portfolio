import React from 'react'
import { AiOutlineWhatsApp,AiOutlineMail,AiFillFacebook } from "react-icons/ai";
import { BiPhoneIncoming} from "react-icons/bi";
import { RiMailSendLine } from "react-icons/ri";
const Contact = () => {
  return (
    <section id='contact' className='w-full h-2/4 flex flex-wrap my-8 gap-4 items-center justify-center md:justify-between bg-[#EBDFB7] p-4 sm:p-8 md:p-16'>
        <div className="text-group max-w-[100%] sm:max-w-[75%] md:max-w-[50%] p-4 shadow-md flex gap-2 flex-col">
            <h2 className='font-serif text-3xl py-4'>Get in touch</h2>
            <p className='font-serif text-xs text-gray-700'>
             Connecting World for Better Solving Keeping you in touch for more Growth Personalized Service, Deserving results Giving you your Own receptionist
            </p>
            <p className='flex items-center gap-2'>
                <AiOutlineMail/>  Email: abdulshakoorafridi349@gmail.com
            </p>
            <p className='flex items-center gap-2'>
                <AiOutlineMail/>  Email: as4630425@gmail.com
            </p>
            <p className='flex items-center gap-2'>
               <AiOutlineWhatsApp/> Whats-app: +92 3471810373
            </p>
            <p className='flex items-center gap-2'>
             <BiPhoneIncoming /> Call: +92 3312589582
            </p>
            <p >
             <a href="https://www.facebook.com/profile.php?id=100012381725764" target='blank' className='flex items-center gap-2'><AiFillFacebook className='rounded-xl'/>Facebook</a> 
            </p>
           
        </div>
        <div className="form max-w-[100%] text-center shadow-xl">
            <form action="https://formspree.io/f/mnqrzyvj" method='POST' className='flex flex-col gap-2 items-center justify-center'>
                <div className="input-group">
                    <input type="text" name='user-name' required placeholder='name' className='w-[250px] p-2 rounded-sm shadow outline-none'/>
                </div>
                <div className="input-group">
                    <input type="email" name='email' required placeholder='email' className='w-[250px] p-2 rounded-sm shadow outline-none'/>
                </div>
                <div className="input-group">
                    <textarea type="text" name='message' required placeholder='Message...' className='w-[250px] min-h-[120px] p-2 rounded-sm shadow outline-none'/>
                </div>
                <button className='hover:bg-amber-500 bg-[#d8bf85] p-2 w-full rounded hover:shadow-md flex items-center justify-center gap-2'>send <RiMailSendLine/></button>
            </form>
        </div>
    </section>
  )
}

export default Contact