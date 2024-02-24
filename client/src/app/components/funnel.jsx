function Funnel() {
    return <>
        <div className="w-full ">
            <div className=" flex my-16 items-start justify-center">
                <div className="w-40 flex flex-col items-center ml-2">
                    <img className="w-48 z-50 relative funnel-piece" src="sf1.svg" alt="" />
                    <img className="w-40  z-40 relative funnel funnel-piece " src="sf2.svg" alt="" />
                    <img className="w-32  z-30 relative funnel funnel-piece" src="sf3.svg" alt="" />
                    <img className="w-28  z-20 relative funnel funnel-piece" src="sf4.svg" alt="" />
                    <img className="w-20  z-10 relative funnel funnel-piece" src="sf5.svg" alt="" />
                    <img className="w-14   z-0 relative funnel funnel-piece translate-y-2" src="sf6.svg" alt="" />
                </div>
                <div className="steps-outer w-60 flex flex-col ">
                    <img className=" steps " src="e11.svg" alt="" />
                    <img className=" steps " src="e22.svg" alt="" />
                    <img className=" steps" src="e33.svg" alt="" />
                    <img className=" steps" src="e44.svg" alt="" />
                    <img className=" steps" src="e55.svg" alt="" />
                    <img className=" steps" src="e66.svg" alt="" />
                </div>
            </div>
        </div>



    </>
}

export default Funnel