import React from "react";
import Image from "next/image";
import "../../app/globals.css";
export default function profiledashboard() {
  return (
    <div className="  flex items-center justify-center mt-8 ">
      <div className="w-[85%]   flex-col ">
        <div className=" gradientblue rounded-md p-[10px] border-white border-solid border-2 shadow-md">
          <div className="bg-[#19191946] rounded-md  flex p-2 justify-evenly ">
            <div className="flex">
              <div className="circularFrame m-4 hover:scale-105 duration-300">
                <Image
                  src="/Profilepic.jpg"
                  alt=""
                  height={300}
                  width={300}
                  className="circularImage"
                />
              </div>

              <div className="m-4 hover:scale-105 duration-300   p-2 ">
                <h2 className="font-bold text-xl text-white">
                  Luffy_the_monkey
                </h2>
                <p className="text-white text-sm"> joined at feb 31 2024</p>
              </div>
            </div>
            <div className="m-4 flex justify-evenly">
              <div className="flex-col font p-4 border-r-4 border-[#afb7e266] hover:scale-105 duration-300 ">
                <p className="font-semibold text-[#EFEFEF]">No. of Interview</p>
                <h1 className=" font-bold text-3xl text-[#F5F5F5]">13</h1>
              </div>
              <div className="flex-col font p-4 border-r-4 border-[#afb7e266] hover:scale-105 duration-300 ">
                <p className="font-semibold text-[#EFEFEF]">Clear Interview</p>
                <h1 className=" font-bold text-3xl text-[#F5F5F5]">7</h1>
              </div>
              <div className="flex-col font p-4    hover:scale-105 duration-300 ">
                <p className="font-semibold text-[#EFEFEF]">
                  Total time(in hrs)
                </p>
                <h1 className=" font-bold text-3xl text-[#F5F5F5]">59</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md mt-8 flex p-2 gradientblue grid grid-cols-3 gap-4">
          <div className="col-span-1 bg-blue-100 rounded-md p-[15px]">
            <div className="hover:scale-105 duration-300">
              <h1 className="text-[#0094FF] font-bold text-2xl ">
                Strong Area 💪
              </h1>
              <div className="text-[#0094FF]  text-left font-semibold">
                <ul className="bg-custom-image pl-2">
                  <li className="p-2 mb-2">OOPS concept</li>
                  <li className="p-2 mb-2">DSA</li>
                  <li className="p-2 mb-2">React.js</li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-[#0094FF] font-bold text-2xl ">
                Average Area 👍
              </h1>
              <div className="text-[#0094FF]  text-left font-semibold">
                <ul className="bg-custom-image">
                  <li className="p-2 mb-2">OOPS concept</li>
                  <li className="p-2 mb-2">DSA</li>
                  <li className="p-2 mb-2">React.js</li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-[#0094FF] font-bold text-2xl ">
                Weak Area 😔
              </h1>
              <div className="text-[#0094FF]  text-left font-semibold">
                <ul className="bg-custom-image">
                  <li className="p-2 mb-2">OOPS concept</li>
                  <li className="p-2 mb-2">DSA</li>
                  <li className="p-2 mb-2">React.js</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-blue-100 rounded-md p-[10px]">
            <h1 className="text-red-400 font-bold">Weak Area</h1>
            <div className="text-white font-semibold">
              <ul>
                <li>Operating System</li>
                <li>DBMS</li>
                <li>Backend</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
