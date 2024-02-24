import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./line"
import Timelinestopover from "./timelinestopover"
import Linestopover from "./linestopovercombo";
import Funnel from "./funnel";
import ContactForm from "./contactform";
import Testimonial from "./testimonial";
import Services from "./services";
import LinestopoverLg from "./linestopovercombolg";
import { useState } from "react";


const linestopoverProps = { name: "Sales Funnels", imgSrc: "funnel.svg", component: <Funnel />, order: 1 };
const linestopoverProps2 = { name: "Case Studies & Testimonials", imgSrc: "reviewfeature.svg", component: <Testimonial />, order: 2 };
const linestopoverProps3 = { name: "Lead Generation and Conversion Optimization:", imgSrc: "contactforms.svg", component: <ContactForm />, order: 3 };
const linestopoverProps0 = { name: "Our Services", component: <Services />, order: 4 };

function Timeline() {

    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Call it initially
        window.addEventListener('resize', handleResize); // Listen for window resize events


        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the listener on unmount
        };
    }, []);

    return <>
    <div className="bg-black">
    <div className="px-2 py-16 black-wire lg:black-wire-lg">

<div className="">
    <h2 className="ani-t text-white text-4xl  text-center aoboshi py-8 " >Lets look at <br /> <span className="text-5xl blue-text ">What we Offer </span></h2>
    <h3 className="text-white text-xl text-center pt-4 crimson shadow">Our Features</h3>
</div>

<div className="py-4">
    {
        isMobile&&<>
            <Linestopover {...linestopoverProps0} />
                {/*  <Linestopover {...linestopoverProps} />
       <Linestopover {...linestopoverProps2} />
            <Linestopover {...linestopoverProps3} /> */}
        </>
    }

    {
        !isMobile&&<>
        <LinestopoverLg {...linestopoverProps0}/>
      {/*   <LinestopoverLg {...linestopoverProps}/>
        <LinestopoverLg {...linestopoverProps2}/>
        <LinestopoverLg {...linestopoverProps3}/> */}
        </>
    }


</div>
</div>
    </div>
        


    </>
}

export default Timeline