import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";

import React, { useRef } from "react";

function Buttons({ name1, name2 }) {
  return (
    <div className="start flex justify-center gap-4 py-8 my-2 lg:gap-16 lg:py-821">
      <button id="plans-button" className="button w-40 lg:w-44 text-lg crimson bg-blue-voilet" >
        {name1}
      </button>
      <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer" className="button w-40 lg:w-44  text-lg  crimson bg-black flex justify-center">
        {name2} <FaExternalLinkAlt className='mt-1 ml-1'/>
      </a>
    </div>
  );
}

export default Buttons;

