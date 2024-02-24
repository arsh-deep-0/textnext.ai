import React from 'react'
import gsap from 'gsap'
import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

import { document } from 'postcss';


function Navbar() {

  return (
    <>
      <div className='  flex items-center justify-between px-4 py-6 mr-0 w-full'>
        <div className='flex gap-1'>
          <img src="logo.svg" alt="" />
          <h1 className='text-black bodoni text-lg font-bold lg:text-2xl'><span className='blue-text'>Shine</span>Spots</h1>
        </div>
        <img className='h-4' src="menu.svg" alt="" />
      </div>

    </>
  )
}

export default Navbar