import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Companies() {
    gsap.registerPlugin(ScrollTrigger);
    const appcom = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Call it initially
        window.addEventListener('resize', handleResize); // Listen for window resize events



        let divElement = document.getElementById('scroller1');

        // Calculate and store the width of the div element
        let divWidth = divElement.offsetWidth;

        let gapWidth;

        if (isMobile) {
            gapWidth = 16
        } else {
            gapWidth = 64
        }

        gsap.fromTo('.scroller1', {
            x: 0
        },
            {
                x: -1 / 2 * divWidth - gapWidth,
                duration: 16,
                ease: 'linear',
                repeat: -1
            })

        gsap.fromTo('.scroller2', {

        },
            {
                x: -1 / 2 * divWidth - gapWidth,
                duration: 16,
                ease: 'linear',
                repeat: -1
            })

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the listener on unmount
        };
    }, []);
    return <div className="bg-black ">
        <div className="overflow-hidden bg-black scroller-container">

            <div ref={appcom} id='scroller1' className="bg-black h-14 flex items-center border-t  border-b bottom-1 border-white border mb-1  gap-8 lg:gap-32">

                <div className="flex items-center gap-8 lg:gap-32 ">
                    <img className="logo h-8 scroller1" src="company-1.svg" alt="" />
                    <img className="logo h-8 scroller1" src="company-2.svg" alt="" />
                    <img className="logo h-8 scroller1" src="company-3.svg" alt="" />
                    <img className="logo h-8 scroller1" src="company-4.svg" alt="" />
                    <img className="logo h-12 scroller1" src="company-5.svg" alt=""/>
                    <img className="logo h-8 scroller1" src="company-6.svg" alt="" />
                </div>

                <div className="flex items-center gap-8 lg:gap-32">
                    <img className="logo h-8 scroller2" src="company-1.svg" alt="" />
                    <img className="logo h-8 scroller2" src="company-2.svg" alt="" />
                    <img className="logo h-8 scroller2" src="company-3.svg" alt="" />
                    <img className="logo h-8 scroller2" src="company-4.svg" alt="" />
                    <img className="logo h-12 scroller2" src="company-5.svg" alt="" />
                    <img className="logo h-8 scroller2" src="company-6.svg" alt="" />
                </div>


            </div>

        </div>
    </div>
}

export default Companies