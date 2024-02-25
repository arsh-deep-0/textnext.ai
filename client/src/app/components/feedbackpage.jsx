import React from 'react'
import "../../app/globals.css";
import { BarChart } from 'reaviz';
import {PieChart,PieArcSeries} from 'reaviz';
const data = [
  { key: 'POSITIVE', data: 70 },
  { key: 'NEGATIVE', data: 30 }
];
export default function feedbackpage() {

  return (
    <div className='gradientblue  flex justify-center '>
        <div className='w-[85%] white-wire m-4 rounded-md'>
            <div className='encodesans m-4 font-bold '>
                <h1 className='text-center'>
                    Feedback for last Interview !!
                </h1>
            </div>
            <div className='encodesans flex  m-4 font-bold justify-around  justify-between'>
                <div>
                <h1 className='m-2'    >
                    Company Name: Google
                </h1>
                <h1 className='m-2' > 
                    Job Role: Software Engineer
                </h1>
                </div>
                <div>
                <h1 className='m-2' >
                    Overall Score : 80/100
                </h1>
                <h1 className='m-2' >
                    Outcome:<span className='text-green-500'> Pass ✅</span>
                </h1>
                </div>
               
                  </div>
                  <div className='flex justify-around'>
                  <div className='m-4 '>
                    <h1 className='text-center'>Confidence meter</h1>
                <PieChart width={350} height={250} data={data} series={<PieArcSeries cornerRadius={4}
                 padAngle={0.02} padRadius={200} doughnut={true} colorScheme="cybertron" />} />
                  </div>
                  <div className='m-4 ml-16'>
                    <h1 className='text-center'>Another meter</h1>
                <PieChart width={350} height={250} 
                data={[
  { key: 'POSITIVE', data: 65 },
  { key: 'NEGATIVE', data: 35 }
]} 
series={<PieArcSeries cornerRadius={4}
                 padAngle={0.02} padRadius={200} doughnut={true} colorScheme="cybertron" />} />
                  </div>
                  </div>
        </div>
    </div>
  )
}

