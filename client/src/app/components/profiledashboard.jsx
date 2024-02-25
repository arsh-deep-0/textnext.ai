import React from "react";
import Image from "next/image";
import "../../app/globals.css";
import Chart from 'chart.js/auto';

(async function() {
  const data = [
    { day: 1 , count: 10 },
    { day: 3, count: 15 },
    { day: 5, count: 21 },
    { day: 6, count: 25 },
    { day: 8, count: 22 },
    { day: 9, count: 30 },
    { day: 11, count: 28 },
    { day: 15, count: 37 },
    { day: 16, count: 42 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            label: 'Marks in Interview',
            data: data.map(row => row.count),
            backgroundColor:'#0094FF',
            borderColor:'#0094FF',
            borderJoinStyle:'round',
            pointHoverBackgroundColor:'orange',
            pointHoverRadius:10,
            
           
            
          }
        ]
      },
     
      
      
    }
  );
})();

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
                <h2 className="font-bold text-xl text-white encodesans">
                  Luffy_the_monkey
                </h2>
                <p className="text-white text-sm encodesans"> Joined at feb 31 2024</p>
              </div>
            </div>
            <div className="m-4 flex justify-evenly">
              <div className="flex-col font p-4 border-r-4 border-[#afb7e266] hover:scale-105 duration-300 ">
                <p className="font-semibold text-[#EFEFEF] encodesans">Total Interviews</p>
                <h1 className=" font-bold text-3xl text-[#F5F5F5] encodesans">13</h1>
              </div>
              <div className="flex-col font p-4 border-r-4 border-[#afb7e266] hover:scale-105 duration-300 ">
                <p className="font-semibold text-[#EFEFEF] encodesans">Successful Interview</p>
                <h1 className=" font-bold text-3xl text-[#F5F5F5] encodesans">7</h1>
              </div>
              <div className="flex-col font p-4    hover:scale-105 duration-300 ">
                <p className="font-semibold text-[#EFEFEF] encodesans">
                  Total Duration(Hrs)
                </p>
                <h1 className=" font-bold text-3xl text-[#F5F5F5] encodesans">59</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md mt-8 flex p-2 gradientblue grid grid-cols-3 gap-4">
          <div className="col-span-1 bg-blue-100 rounded-md p-[15px]">
            <div className="mb-2">
              <h1 className="text-[#0094FF] font-bold text-xl hover:scale-105 duration-300 encodesans ">
                Strong Area 🥇
              </h1>
              <div className="text-[#0094FF] text-sm text-left font-medium">
                <ul className="bg-custom-image ">
                  <li className="p-1  m-0 encodesans">OOPS concept</li>
                  <li className="p-1  m-0 encodesans">DSA</li>
                  <li className="p-1  m-0 encodesans">React.js</li>
                 
                  
                </ul>
               
              </div>
            </div>
            <div className="mb-2">
              <h1 className="text-[#0094FF] font-bold text-xl hover:scale-105 duration-300 encodesans ">
                Average Area 🥈
              </h1>
              <div className="text-[#0094FF] text-sm  text-left font-medium">
                <ul className="bg-custom-image">
                  <li className="p-1  m-0 encodesans">DSA</li>
                  <li className="p-1  m-0 encodesans">DBMS</li>
                  <li className="p-1  m-0 encodesans">Backend</li>
                </ul>
              </div>
            </div>
            <div className="">
              <h1 className="text-[#0094FF] font-bold text-xl hover:scale-105 duration-300 encodesans">
                Weak Area 🥉
              </h1>
              <div className="text-[#0094FF] text-sm  text-left font-medium ">
                <ul className="bg-custom-image">
                  <li className="p-1 m-0  encodesans">Operating System</li>
                  <li className="p-1  m-0  encodesans">Tailwind</li>
                  <li className="p-1 m-0 encodesans">NodeJs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-blue-100 rounded-md p-[10px]">
          <canvas id="acquisitions"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
