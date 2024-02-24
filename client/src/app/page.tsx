'use client'
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import './globals.css'
import SplashScreen from "./components/splashscreen"; 
import NewNavbar from "./components/newnavbar"
import Heading from "./components/heading"
import Subheading from "./components/subheading"
import Buttons from "./components/buttons"
import Poster from "./components/poster"
import Poster2 from "./components/poster2"
import Testimonials from "./components/testimonials"
import ReviewsBox from "./components/reviewsbox"
import Footer from "./components/footer"
import Companies from "./components/companies"
import Timeline from "./components/timeline"
export default function Home() {
  const appt = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const pricingRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  return (

  <div ref={appt}  >
      <SplashScreen />
      <div className="white-wire">

<NewNavbar /> 

 <Heading />
<Subheading />
<Buttons name1={'Create Room'} name2={"See your progress"}  />
{
  !isMobile && <>
    <Poster />
    <Poster2/>
  </>
}

<Testimonials />

<ReviewsBox />
</div>

<Companies />
      <Timeline />


<Footer contactRef={contactRef} />
  </div>
  

  );
}
