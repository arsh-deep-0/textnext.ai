import React from 'react'
import gsap from 'gsap'
import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import SocialMediaModal from './SocialMediaModal'
import Link from "next/link";
import { FaSquareFacebook } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);
import '../css/app.css';
import Wire from './wire';
let scrollToPricing = null;let scrollToPortfolio = null; let scrollToContact = null; 

function NewNavbar() {


    const [navbarVisible, setNavbarVisible] = useState(false);

    const hideNavbar = () => {

        gsap.fromTo('.navbar-modal-2-div-1', {
            opacity: 1,
            y: 0,
            height: 0,
        }, {
            y: -1 * window.innerHeight,
            opacity: 0,
            duration: 0.45,
        })

        gsap.fromTo('.navbar-modal-2-div-2', {
            opacity: 1,
            y: 0,

        }, {
            y: -1 * window.innerHeight,
            opacity: 0,
            duration: 0.60,
            onComplete: () => { setNavbarVisible(false); }
        })

        console.log('clicked');
    };

    const showNavbar = () => {
        setNavbarVisible(true);
        const animationTime = () => {
            gsap.fromTo('.navbar-modal-2', {
                // y: -1 * window.innerHeight,
                opacity: 0,


            }, {
                opacity: 1,
                y: 0,
                duration: 0,

            })
            gsap.fromTo('.navbar-modal-2-div-1', {
                y: -1 * window.innerHeight,
                height: 0,
                opacity: 0,


            }, {
                opacity: 1,
                y: 0,
                duration: 0.45,

            })
            gsap.fromTo('.navbar-modal-2-div-2', {
                y: -1 * window.innerHeight,
                opacity: 0,


            }, {
                opacity: 1,
                y: 0,
                duration: 0.60,


            })

        }
        setTimeout(animationTime, 0);


        console.log('clicked');
    };
     // Function to hide Navbar and scroll to Portfolio section
     const hideNavbarandscrollToPortfolio = () => {
        hideNavbar(); // First, hide the Navbar
        scrollToPortfolio(); // Then, scroll to the Portfolio section
    };

    // Function to hide Navbar and scroll to Pricing section
    const hideNavbarandscrollToPricing = () => {
        hideNavbar(); // First, hide the Navbar
        scrollToPricing(); // Then, scroll to the Pricing section
    };

    // Function to hide Navbar and scroll to Contact section
    const hideNavbarandscrollToContact = () => {
        hideNavbar(); // First, hide the Navbar
        scrollToContact(); // Then, scroll to the Contact section
    };

    const bookmeet = () => {
        window.open("https://calendly.com/arsh0/15min", "_blank");
      };

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        gsap.from('.navbar', {
            delay: 0.25,
            duration: 1,
            y: -25,
            opacity: 0,
            ease: 'sine.out',

        });

        ScrollTrigger.create({
            trigger: '.navbar',
            start: 'top top',
            endTrigger: '.footer', // Optional: Specify an element that ends pinning (e.g., a footer)

            toggleClass: { targets: ".navbar", className: "navbar-blue" },
            toggleActions: "restart reset restart reset",
            pin: '.navbar',
            scrub: true,

        })

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Call it initially
        window.addEventListener('resize', handleResize); // Listen for window resize events


        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the listener on unmount
        };

    }, []); // Empty dependency array ensures it runs once when the component mounts

    return (
        <>
            <div className='start  flex items-center justify-between px-4 py-6 mr-0 w-full'>
                <Link href='/'>  <div className='flex gap-1 items-center'>
                    <img src="logo.svg" alt="" />
                    <h1 className='text-black bodoni text-xl font-bold lg:text-2xl'><span className='blue-text'>Prep</span>Next</h1>
                </div>
                </Link>
              
                <div className='gap-12 hidden lg:flex mr-12'>
                    <Link href='/report'> <p className='gotu'>Progress</p> </Link>
                    {/* Portfoilio*/}
                    <Link href='/profile'><p className='gotu'>Profile</p></Link>
                    {/*Pricing */}
                    <Link href='/'> <p className='gotu'>Contact us</p></Link>
                   
                </div>
                <BiMenu className='flex md:hidden lg:hidden absolute right-8 mb-0 w-6 h-6' id='toggle-nav' onClick={showNavbar}>
                </BiMenu>

            </div>



            {navbarVisible && <div className="navbar-modal-2  opacity-0  text-center md:flex-row md:items-center md:justify-between  md:space-y-0  ">

                <div className='navbar-modal-2-div-1 min-h-full bg-blue-voilet px-5 w-1/2'>

                    <ImCross className='cross  ' id='cross' onClick={hideNavbar}></ImCross>
                    <nav className=" flex flex-col items-center justify-center text-white lg:space-y-0 lg:flex-row lg:items-center lg:justify-center lg:space-x-3 md:flex-row md:space-x-6 sm:flex-col sm:space-y-8">


                        <a className={`hoverable text-sm    dark:-400 `}>
                            <span className='new-nav font-frank text-xl'onClick={hideNavbarandscrollToPortfolio}>Portfolio</span>
                        </a>

                        <a className={`hoverable text-sm    dark:-400 `}>
                            <span className='new-nav font-frank text-xl' onClick={hideNavbarandscrollToPricing}>Pricing</span>
                        </a>

                        <a className={` text-sm    dark:-400 `}>
                            <span className='new-nav font-frank text-xl'onClick={hideNavbarandscrollToContact}>Contact Us</span>
                        </a>



                    </nav>


                </div>

                <div className='navbar-modal-2-div-2 py-8 px-2 bg-white flex-grow' >

                    <div className='flex gap-1 items-center justify-center'>
                        <img className='h-6' src="logo.svg" alt="" />
                        <h1 className='text-black bodoni text-center text-xl lg:text-2xl '><span className='blue-text'>Shine</span>Spots</h1>
                    </div>
                    <div className=" space-y-2 mt-0 gap-8 flex flex-col flex-wrap justify-center items-center">


                        <h1 className="text-black  font-semibold text-base jose">
                         Brightening 
 Housing  Enterprises
                        </h1>


                        <h4 className="font-medium  text-blue-500 -400 text-base antics">
                            <span className='text-black'>Contact Us</span>
                            <br />
                            business@shinespots.agency
                        </h4>

                        <div className='p-2 px-6 bg-blue-voilet rounded-md' onClick={bookmeet}>
                            <p className='text-white crimson text-lg'>Book appointment</p>
                        </div>

                        
                        {/* <h1 className="text-black  text-lg forum">
                            +1 437-998-8226 <br />+1 647-502-6701
                        </h1> */}
                        <h4 className="text-black  text-sm forum">
                         
                        </h4>

                    </div>

                </div>

            </div>}
        </>
    )
}

export default NewNavbar