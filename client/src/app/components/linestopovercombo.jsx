import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./line"
import Timelinestopover from "./timelinestopover"
import Feature from "./feature";

function Linestopover(props) {
    gsap.registerPlugin(ScrollTrigger);
    const apptl = useRef(null);

    useEffect(() => {

        let ctx = gsap.context(() => {

            gsap.to(".timelinestopover", {
                marginTop: '72rem',
                duration: 15,
                scrollTrigger: {
                    trigger: ".heads",
                    start: "top center-=40",
                    end: "bottom center+=96",
                    scrub: true,
                }
            }
            );

            gsap.to(".colorline", {
                height: '76rem',
                duration: 15,
                scrollTrigger: {
                    trigger: ".heads",
                    start: "top center",
                    end: "bottom center",
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
               
                scrollTrigger: {
                    trigger: ".heads",
                    start: "top center-=30",
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


        }, apptl);



        return () => ctx.revert();

    }, [])

    return <>
        <div ref={apptl} className="flex pr-2">
            <Timelinestopover />
            <Line />
            <div className="gradientblue w-95  ml-4 mb-8 rounded-md feature-h">
                <Feature {...props} />
            </div>

        </div>

    </>
}
export default Linestopover