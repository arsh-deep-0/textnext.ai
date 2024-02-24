'use client'
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import React from 'react';
// import Navbar from '../components/navbar';
// import Trustpilot from '../components/trustpilot';
// import Heading from '../components/Heading';
// import Subheading from '../components/subheading';
// import Buttons from '../components/buttons';
// import Testimonials from '../components/testimonials';
// import ReviewsBox from '../components/reviewsbox';
// import House from '../components/house';
// import Companies from '../components/companies';
// import Portfolio from '../components/portfolio';
// import Pricing from '../components/pricing';
// import Timeline from "../components/timeline";
// import Wire from "../components/wire";
// import Gallery from "../components/gallery";
// import Galleryheading from "../components/galleryheading";
// import BlackWire from "../components/blackwire";
// import Footer from "../components/footer";
import SplashScreen from "../../src/app/components/splashscreen";
// import NewNavbar from "../components/newnavbar";
// import Poster from "../components/poster";
// import Poster2 from "../components/poster2";


export default function Start() {
  // gsap.registerPlugin(ScrollTrigger);
  const appt = useRef(null);

  const pricingRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

//   const scrollToPricing = () => {
//     if (pricingRef.current) {
//       const targetY = pricingRef.current.getBoundingClientRect().top + window.pageYOffset;
//       slowScrollTo(targetY);
//     }
//   };
//   const scrollToPortfolio = () => {
//     if (portfolioRef.current) {
//       const targetY = portfolioRef.current.getBoundingClientRect().top + window.pageYOffset;
//       slowScrollTo(targetY);
//     }
//   };
//   const scrollToContact = () => {
//     if (contactRef.current) {
//       const targetY = contactRef.current.getBoundingClientRect().top + window.pageYOffset;
//       slowScrollTo(targetY);
//     }
//   };

//   const slowScrollTo = (targetY, duration = 2000) => {
//     const initialY = window.pageYOffset;
//     const diff = targetY - initialY;
//     let start;

//     const easeOutQuad = (t) => 1 - Math.pow(1 - t, 2);

//     const scrollStep = (timestamp) => {
//       if (!start) start = timestamp;
//       const time = timestamp - start;
//       const percentage = Math.min(time / duration, 1);
//       const easedPercentage = easeOutQuad(percentage);

//       window.scrollTo(0, initialY + diff * easedPercentage);

//       if (time < duration) {
//         requestAnimationFrame(scrollStep);
//       }
//     };

//     requestAnimationFrame(scrollStep);
//   };

//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
//     };

//     handleResize(); // Call it initially
//     window.addEventListener('resize', handleResize); // Listen for window resize events


//     return () => {
//       window.removeEventListener('resize', handleResize); // Clean up the listener on unmount
//     };
//   }, []);

//   useEffect(()=>{
//     let ctx = gsap.context(()=>{
//       gsap.from(".ani", {
//         y:30,
//         opacity:0,
//         duration: 0.5,
//         ease:'sine.out',
//         stagger:0.35,
//         scrollTrigger: {
//             trigger: ".ani",
//             start: "top 80%",
//             toggleActions: "play none none none ",
//         }
//     }
//     );

//     gsap.from(".ani-p", {
//       y:30,
//       opacity:0,
//       duration: 0.5,
//       ease:'sine.out',
//       stagger:0.35,
//       scrollTrigger: {
//           trigger: ".ani-p",
//           start: "top 70%",
//           toggleActions: "play none none none ",
//       }
//   }
//   );

  
//   gsap.from(".ani-t", {
//     y:25,
//     opacity:0,
//     duration: 0.8,
//     ease:'back.out',
//     stagger:0.35,
//     scrollTrigger: {
//         trigger: ".ani-t",
//         start: "top 70%",
//         toggleActions: "play none none none ",
//     }
// }
// );
// gsap.from(".ani-t1", {
//   y:25,
//   opacity:0,
//   duration: 0.8,
//   ease:'back.out',
//   stagger:0.35,
//   scrollTrigger: {
//       trigger: ".ani-t1",
//       start: "top 70%",
//       toggleActions: "play none none none ",
//   }
// }
// );
// gsap.from(".ani-t2", {
//   y:25,
//   opacity:0,
//   duration: 0.8,
//   ease:'back.out',
//   stagger:0.35,
//   scrollTrigger: {
//       trigger: ".ani-t2",
//       start: "top 70%",
//       toggleActions: "play none none none ",
//   }
// }
// );

//   gsap.from(".ani-g", {
//     y:30,
//     opacity:0,
//     duration: 0.5,
//     ease:'back.out',
//     stagger:0.35,
//     scrollTrigger: {
//         trigger: ".ani-g",
//         start: "top 70%",
//         toggleActions: "play none none none ",
//     }
// }
// );
// gsap.from(".start",{
//   y:30,
//   opacity:0,
//   duration:0.75,
//   ease:'sineout',
//   stagger:0.1,
//   delay:5.15
// })
//     },appt)

//     return () => ctx.revert();
//   },[]);


  return <>
    <div ref={appt} >
      <SplashScreen />
     {/* <div className="white-wire">

        <NewNavbar scrollToPricing={scrollToPricing} scrollToPortfolio={scrollToPortfolio} scrollToContact={scrollToContact}/>
        <Trustpilot />
        <Heading />
        <Subheading />
        <Buttons name1={'Create Room'} name2={"See your progress"} scrollToPricing={scrollToPricing} />
        {
          !isMobile && <>
            <Poster />
            <Poster2/>
          </>
        }

        <Testimonials />

        <ReviewsBox />
      </div> */}
{/* 
      <Companies />
      <Timeline /> */}

      {/* <div className="white-wire">
        {isMobile && <>
          <Galleryheading />
          <Gallery />
          <Buttons name1={'See Plans'} name2={"Book a call"} scrollToPricing={scrollToPricing} />
        </>}

        {
          !isMobile && <>
            <div className="flex pt-32 pb-24 justify-between px-8">
              <div className="w-1/2 lex items-center" >
                <Gallery />
              </div>
              <div className="flex flex-col w-2/5 ">
                <Galleryheading />
                <Buttons name1={'See Plans'} name2={"Book a call"} scrollToPricing={scrollToPricing} />
              </div>
            </div>
          </>
        }

      </div> */}

      {/* <Portfolio portfolioRef={portfolioRef} /> */}
      {/* <div>

        <Pricing pricingRef={pricingRef} />
      </div> */}

      {/* <Footer contactRef={contactRef} />  */}
    </div>

  </>
}

