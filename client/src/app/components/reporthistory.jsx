import React from 'react'
import Image from "next/image";
import "../../app/globals.css";
import History from './history'
export default function reporthistory() {
  return (
    <div className=' flex items-center justify-center mt-8 '>
        <div className='w-[85%] gradientblue rounded-lg'>
        <div className=' justify-left my-4  p-4 px-10 flex items-center gap-5'>
            <Image src='/diagram.png' alt='reportCard' height={25} width={25} className=' text-white relative bottom-1'/>
         <h1 className='encodesans text-center font-semibold text-[20px] text-white '>Report Card</h1>
        </div>
        <div className='p-4 px-10'>
        <History/>
        </div>
        
        </div>

  </div>
  )
}
