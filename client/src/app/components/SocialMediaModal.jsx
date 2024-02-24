import { FaInstagram } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';



export default function SocialMediaModal() {

    useEffect(() => {
        gsap.from('.sm-modal', {
            delay: 3,
            x: -100,
            duration: 1.5,
            opacity: 0,
            ease: 'sine.out',

        })

    }, [])
    return <>
        {
            <div className="hoverable sm-modal  dark rounded-md h-10 w-32 gap-2 absolute bottom-14 sm:bottom-10 lg:bottom-16 left-0 lg:left-5 flex flex-row items-center justify-center">
                <a href="https://www.instagram.com/universal_custom_kitchens" target="_blank" rel="noopener noreferrer">
                 <FaInstagram style={{color:'white'}}></FaInstagram>
                </a>
                <FaSquareFacebook style={{color:'white'}} />
            </div>
        }
    </>
}