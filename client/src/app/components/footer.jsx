function Footer({contactRef}) {
    //                                                                   Seamless Interviews, Endless Potential: Let AI Lead the Way
    return <>
        <div ref={contactRef} className="bg-[#352f42] pt-8 pb-2 px-4  text-white lg:px-72 lg:pt-16">
            <h2 className="encodesans text-2xl text-center font-bold">Seamless Interviews <span className="blue-text font-extrabold">Endless Potential</span> Let AI Lead the Way </h2>

            <div className='flex flex-col gap-1 justify-center my-8 mb-12'>
            <div className="flex gap-2 justify-center mt-2 items-center">
                    <img src="logo.svg" alt="" />
                    <h1 className='bodoni text-2xl text-center lg:text-3xl'><span className='blue-text'>Prep</span>Next</h1>
                </div>
                <h2  className="text-lg jose text-center" > Elevate Your Interviews with AI Insights</h2>
             
              
            </div>

            <hr className="forum my-2 mx-2 border-dotted" />

            <div className="flex justify-between  forum px-2">
                <h3>info@prepnext.ai</h3>
                <h3>+91-628-395-9927</h3>
            </div>

            <div className="flex justify-between my-2 text-sm forum px-2">
                <div className="flex flex-col">
                    <h3>Ongoing Projects</h3>
                    <h3>About</h3>
                    <h3>Contact Us</h3>
                </div>
                <div className="flex flex-col text-end">
                    <h3>Get started</h3>
                    <h3>Terms & Conditions</h3>
                    <h3>Privacy Policy</h3>
                </div>

            </div>
            <div className="text-center forum mt-4 my-4">
                <p>@2023 all rights reserved </p>
              
            </div>
        </div>
    </>
}
export default Footer