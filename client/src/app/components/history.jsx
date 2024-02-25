import React from 'react'
const data = [
    {
      "id": 1,
      "company": "Microsoft",
      "JobRole": "SWE",
      "scoreGet" : 60,
      "ourOfScore" : 100,

    },
    {
      "id": 2,
      "company": "Flipkart",
      "JobRole": "Software Developer",
      "scoreGet" : 85,
      "ourOfScore" : 100,

    },
    {
      "id": 3,
      "company": "Google",
      "JobRole": "Software Engineer",
      "scoreGet" : 70,
      "ourOfScore" : 100,

    },
    {
      "id": 4,
      "company": "OYO",
      "JobRole": "SDE",
      "scoreGet" :90 ,
      "ourOfScore" : 100,

    },
    
    {
      "id": 5,
      "company": "Facebook",
      "JobRole": "SWE",
      "scoreGet" : 40,
      "ourOfScore" : 100,

    },
    {
      "id": 6,
      "company": "Myntra",
      "JobRole": "React Developer",
      "scoreGet" : 55,
      "ourOfScore" : 100,

    },
  ]
export default function history() {

  return (
    <div className=' '>
        <div className='flex encodesans justify-evenly p-3 font-medium text-[#0094ff] bg-white rounded-md mb-4 '> 
            <h2>Company</h2>
            <h2>Job Role</h2>
            <h2>Score(100)</h2>
            <h2>more...</h2>
        </div>
        <div className='flex-col mt-2  h-[300px] overflow-scroll hidekar'>
        {data.map((ele) => (
    <ul className='bg-white w-[100%]  bg-custom-image p-3 rounded-md mb-[5px] hidekar' key={ele.id}>
        <li className='flex  p-0 m-0  items-center encodesans grid grid-cols-4  mx-4'>
            <h2 className='col-span-1 ml-2'>{ele.company}</h2>
            <h2 className='col-span-1 '>{ele.JobRole}</h2>
            <h2 className='col-span-1 '>{ele.scoreGet}</h2>
            <button className='col-span-1 relative gradientblue p-1 mx-4 mr-8  rounded-md text-white transition-transform duration-300 hover:translate-x-4'>
                <h2>View Report</h2>
            </button>
        </li>
    </ul>
))}

          {/* <ul className='bg-white w-[100%] bg-custom-image p-3 rounded-md mb-[5px]'>
            <li  className='flex justify-evenly p-0 m-0  items-center encodesans'>
            <h2 >Amazon</h2>
            <h2>SDE</h2>
            <h2>90</h2>
            <button className=' relative gradientblue p-1 px-3 rounded-md text-white transition-transform duration-300 hover:translate-x-4  '><h2>View Report</h2></button>
            </li>
          </ul> */}

         
        </div>
    </div>
  )
}
