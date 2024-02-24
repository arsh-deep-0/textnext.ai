import { useEffect, useRef } from "react";

function Portfolio({portfolioRef}) {
  const Homez = () => {
    window.open("https://homez-wbs.webflow.io/", "_blank");
  };

  const Uck = () => {
    window.open("https://universalcustomkitchens.ca/", "_blank");
  };

  return (
    <div ref={portfolioRef} className="py-8 px-2 overflow-hidden black-wire lg:black-wire-lg ">
      <h2 className="text-white text-center text-3xl aoboshi  lg:text-5xl lg:py-4 ani-p ">Recent Work</h2>
      <div className="flex items-center justify-center text-white">
        <div className="flex-col items-center flex py-8 gap-0 lg:flex-row lg:w-full">
          <div className="lg:w-1/2 ani-p ">
            <img className="lg:w-full" src="project-1.svg" onClick={Homez} alt="" />
            <p className="text-center antics" onClick={Homez}>HOMEZ</p>
          </div>

          <div className="lg:w-1/2 ani-p ">
            <img className="lg:w-full" src="project-2.svg" alt="" onClick={Uck} />
            <p className="text-center antics" onClick={Uck}>Universal custom kitchens</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Portfolio;
