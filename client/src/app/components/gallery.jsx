import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Gallery() {
    gsap.registerPlugin(ScrollTrigger);
  

    useEffect(() => {
        gsap.from(".gallery-container", {
           
            
            // scale:0,
            x:300,
            
            ease: 'sine.out',
            scrollTrigger: {
                trigger: ".gallery-container",
                start: "top center+=400",
                end:"top center+=300",
                scrub: 1,
                 toggleActions: "restart none restart none ",
              
            }
        })


        gsap.from(".kitchen", {
           
            
            scale:0,
            
            stagger: 0.075,
            ease: 'sine.out',
            scrollTrigger: {
                trigger: ".gallery-container",
                start: "top center+=290",
                end:"top center+=80",
                scrub: 2,
                 toggleActions: "restart none restart none ",
              
            }
        }
        );
    },[]);

    return <div className="justify-center  flex w-full overflow-hidden ">
        <div className="flex gallery-container items-center justify-center overflow-hidden ">
            <div className="w-1/12 ">
                <img className="kitchen  ml-2 lg:h-96" src="side handle.svg" alt="" />
            </div>
            <div className="flex flex-col w-11/12">
                <div className="flex  ">
                    <img className="kitchen h-12 lg:ml-4 lg:h-16" src="Heading-gallery.svg" alt="" />
                </div>
                <div className=" flex ">
                    <div className="w-main">
                        <img className="kitchen w-full" src="main-kitchen.svg" alt="" />
                    </div>
                    <div className=" w-desc ">
                        <img className="kitchen w-full" src="gallery-description.svg" alt="" />
                    </div>
                </div>
                <div className="kitchen-container flex w-full">
                    <div className="w-1/4">
                        <img className="kitchen w-full" src="kitchen-1.svg" alt="" />
                    </div>
                    <div className="w-1/4">
                        <img className="kitchen w-full" src="kitchen-2.svg" alt="" />
                    </div>
                    <div className="w-1/4">
                        <img className="kitchen w-full" src="kitchen-3.svg" alt="" />
                    </div>
                    <div className="w-1/4">
                        <img className="kitchen w-full" src="kitchen-4.svg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    </div>

}

export default Gallery