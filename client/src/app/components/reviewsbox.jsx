import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useState } from "react";

function ReviewsBox() {
    const photos = ["happy.svg", "punjabi.svg", "woman.svg", "laptop-man.svg", "builder.svg"];

    const reviews = ["AI interview site rocks! It's like having a personal interview coach available 24/7. With each mock interview, I felt more confident and prepared",
        "The AI interview simulator helped me boost my confidence and ace my job interview",
        "Using the AI interview platform was the best decision I made for my career - highly recommend!",
        "I was impressed by how accurately the AI simulated real interview scenarios - it truly felt like the real deal.",
        "The AI mock interviews were so realistic and challenging - they helped me identify and improve my weak points before the real interview."];
    const clients = ["Sameer gupta", "Dalwinder Singh", "Luna Dasha ", "Jerry ", "Daneen Ahmed"];

    const businesses = ["UNIVERSAL KITCHENS", "RENOVATEXPERTS", "UNITRICK", "SPEEDSCALEZ", "REMOELRISE"];

    const roles = ["React Developer", "SDE", "Frontend Developer", " Angular Developer", " Software Engineer"];

    const [largeScreen, setLargeScreen] = useState(false);

    const [index, setIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState(photos[4]);
    const [reviewText, setreviewText] = useState(reviews[4]);
    const [clientName, setclientName] = useState(clients[4]);
    const [clientRole, setclientRole] = useState(roles[4]);
    const [clientBusiness, setclientBusiness] = useState(businesses[4]);

    useEffect(() => {
        let interval;
        
        const checkScreenSize = () => {
            setLargeScreen(window.innerWidth >= 1024); // Adjust the width as per your screen size requirement
        };

        const handleResize = () => {
            checkScreenSize(); // Check screen size on resize
        };

        checkScreenSize(); // Check screen size initially
        window.addEventListener('resize', handleResize);

        interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % photos.length);

            gsap.to('.review', {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    const currentIndex = index; // Capture the current index
                    setImageSrc(photos[currentIndex]);
                    setreviewText(reviews[currentIndex]);
                    setclientName(clients[currentIndex]);
                    setclientBusiness(businesses[currentIndex]);
                    setclientRole(roles[currentIndex]);

                    gsap.to('.review', {
                        delay: 0.5,
                        opacity: 1,
                        duration: 1,
                    });
                },
            });
        }, 5000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(interval);
        };
    }, [index, photos, reviews, clients, businesses, roles]);
    return <div className="start flex justify-center pb-8">
        <div className="  flex relative justify-center  pl-4  w-m md:w-t lg:w-lg lg:mt-0  ">
            <div className="z-10 relative flex flex-col gap-0 items-center justify-between w-m md:w-t lg:w-lg">
                <div className="flex justify-center h-12 w-full mt-14 md:mt-36 lg:mt-28">
                <p className="review   review-text w-2/3  text-center  text-sm crimson md:w-1/2 lg:text-base">{reviewText}</p>
                </div>
                <div className="flex justify-end gap-1 items-end w-full mb-8 mr-2 pr-10 md:mb-20 md:justify-between md:pr-16 lg:pr-32 lg:pl-20 lg:mb-8  ">
                    <div className="flex items-end gap-2">
                    <div className="review  flex items-center justify-center bg-white rounded-full h-16 w-16 review-photo bg-blue-voilet ">
                    <img className="w-full" src={imageSrc} alt="" />
                </div>
                <p className="review client-name w-32 text-sm  crimson  md:w-44">{clientName} <br /><span className="client-role encodesans text-xs " >{clientRole}</span></p>
                    </div>
              
                <p className="review client-business  text-xs w-24   ebgara blue-text  md:w-36">{clientBusiness}</p>
                </div>

                </div>

                <div className="absolute w-96p items-center flex justify-center">
                {largeScreen ? (
                    <img className="w-m md:w-t lg:w-lg " src="review-box-icons-lg.svg" alt="trustpilot reviews ratings" />
                ) : (
                    <img className="w-m md:w-t lg:w-lg" src="reviews-box.svg" alt="trustpilot reviews ratings" />
                )}
                </div>
               

           

        </div>

    </div>
}

export default ReviewsBox