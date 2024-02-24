import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./line"
import Timelinestopover from "./timelinestopover"
import Feature from "./feature";
import FeatureLg from "./featurelg";


function LinestopoverLg(props) {
    gsap.registerPlugin(ScrollTrigger);
    const apptl = useRef(null);

    useEffect(() => {

        let ctx = gsap.context(() => {

            gsap.to(".timelinestopover", {
                marginTop: '50rem',
                duration: 15,
                scrollTrigger: {
                    trigger: ".heads",
                    start: "top center-=40",
                    end: "bottom center-=96",
                    scrub: true,
                }
            }
            );

            gsap.to(".colorline", {
                height: '55rem',
                duration: 15,
                scrollTrigger: {
                    trigger: ".heads",
                    start: "top center",
                    end: "bottom center-=192",
                    scrub: true,
                }
            }
            );

            gsap.to('.tlcircle', {
                background: "rgba(255,255,255)",
                scrollTrigger: {
                    trigger: ".heads",
                    start: "top center-=32",
                    toggleClass: { targets: ".tlcircle", className: "glow" },
                    toggleActions: `restart reverse restart reverse`,
                }
            })

            gsap.to('.tlfeature', {
                opacity: 1,
                y:-55,
                scrollTrigger: {
                    trigger: ".heads",
                    start: "top center-=30",
                    toggleClass: { targets: ".tlcircle", className: "glow" },
                    toggleActions: `restart reverse restart reverse`,
                }
            })

            gsap.to('.tlfeature2', {
                opacity: 1,
                y:-55,
                scrollTrigger: {
                    trigger: ".heads",
                    start: "top center-=180",
                    toggleClass: { targets: ".tlcircle", className: "glow" },
                    toggleActions: `restart reverse restart reverse`,
                }
            })

            gsap.from('.funnel-piece', {

                opacity: 0,
                y: 35,
                stagger: 0.38,
                ease: 'sine.Out',
                scrollTrigger: {
                    trigger: ".heads",
                    start: "top center-=32",
                    toggleActions: "restart reverse restart reverse ",
                }
            })

            gsap.from('.step', {
                delay: 0.5,
                opacity: 0,
                y: 60,
                stagger: 0.2,
                ease: 'sine.Out',
                scrollTrigger: {
                    trigger: ".heads",
                    start: "top center-=32",
                    toggleActions: "restart reverse restart reverse ",
                }
            })

            
            gsap.from('.steps', {
                delay: 0.5,
                opacity: 0,
                y: 60,
                stagger: 0.2,
                ease: 'sine.Out',
                scrollTrigger: {
                    trigger: ".heads",
                    start: "top center-=32",
                    toggleActions: "restart reverse restart reverse ",
                }
            })


        }, apptl);



        return () => ctx.revert();

    }, [])

    return <>
        <div ref={apptl} className="flex pr-2 justify-center">

            <div className="w-1/3 gradientblue feature-h-lg rounded-md tlfeature mt-24 opacity-0">
                <div className="text-white text-2xl text-center mt-14 encodesans px-2">
                    {props.name}
                </div>

                {props.component}
            </div>
            <div className="w-1/6 flex justify-center">
                <div>
                    <Timelinestopover />
                    <Line />
                </div>

            </div>

            <div className="gradientblue  ml-4 tlfeature2 opacity-0  rounded-md feature-h-lgg w-1/3 mt-48 flex items-center">
                <FeatureLg {...props} />
            </div>


        </div>

    </>
}
export default LinestopoverLg