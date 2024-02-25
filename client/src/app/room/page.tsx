'use client'
import React, { useEffect, useState } from 'react';
import Camera from  '../components/camera'
export default function Page() {
  const [selectedOption, setSelectedOption] = useState("BackEnd"); 
  const [name, setName] = useState("");
  useEffect(() => {
    //console.log("Selected option changed:", selectedOption);
  }, [selectedOption]);
  let score = 0;
const [question, setQuestion] = useState([]);
  const [camera,setCamera] = useState(false);
  const addproduct = async()=>{
    console.log(name,selectedOption);
    clearInput();
      const result = await fetch('http://localhost:8000/calculate-bert-score',{
        method: 'POST',
        body: JSON.stringify({
          "question": "what are react hooks?",
          "user_answer": "React Hooks are a feature introduced in React 16.8 that allows developers to use state and other React features in functional components. They enable developers to reuse stateful logic across components without writing a class. Hooks provide a more concise and readable way to write React components, making it easier to manage complex state and side effects in functional components.",
          "correct_answers": [
            "React Hooks are a feature introduced in React 16.8 that allows developers to use state and other React features in functional components. They enable developers to reuse stateful logic across components without writing a class. Hooks provide a more concise and readable way to write React components, making it easier to manage complex state and side effects in functional components.",
            "React Hooks are a set of functions that let developers “hook into” React state and lifecycle features from functional components. They enable the use of state and other React features without writing a class. With Hooks, developers can share logic between components, manage component state, and perform side effects like fetching data or subscribing to events.",
            "React Hooks are functions that let developers use state and other React features in functional components. They allow developers to reuse stateful logic across components without writing a class. Hooks provide a simpler and more intuitive way to manage component state and side effects, making it easier to build and maintain React applications.",
            "React Hooks are a new addition in React 16.8 that allow developers to use state and other React features in functional components. They provide a way to use stateful logic in components without writing a class. Hooks enable developers to create more modular and reusable components, improving code organization and reducing boilerplate.",
            "React Hooks are a set of functions provided by React that allow developers to use state and other React features in functional components. They allow developers to encapsulate stateful logic and side effects in reusable functions, promoting cleaner and more maintainable code in React applications."
          ]
        })
      });
       const data = await result.json();
       console.log(data, data.success);
       if(data.success===true ){
           console.log('succcessfully added the data');
           score += data.data.score;
       } 
       else {
           alert('failed to add the data');
       }
     }
     function clearInput() {
      // Get the input element by its ID
      setName("");
      setSelectedOption("");
  
   
    }

    const getAnswer = async()=>{
      console.log(name,selectedOption);
      clearInput();
        let result = await fetch(`http://localhost:8000/interview/${selectedOption}`,{
          method: 'GET',
        });
        result = await result.json();
        setQuestion(result.data);
          console.log(result.data);
        //  if(data.success===true ){
        //      console.log('succcessfully added the data');
             
        //  } 
        //  else {
        //      alert('failed to add the data');
        //  }
       }
  return (
    <>
    {!camera && <div className='white-wire items-center'>
      <div className='w-[80%] gradientblue m-6 rounded-md'>
      <div className='m-4 p-4 flex-col '>
        <div>
        <label className='font-semibold p-4' htmlFor="options">Select an option:</label>
        <select id="options" name="options" value={selectedOption} onChange ={(e)=>setSelectedOption(e.target.value)} className=" p-2 rounded-sm font-bold  input-field">
          <option className='p-2 rounded-sm' value="BackEnd">BackEnd</option>
          <option value="FrontEnd">FrontEnd</option>
          
        </select>
        </div>

      <div className='pl-10 mt-4' > <button className="btn p-2  bg-white rounded-md " onClick={getAnswer} > get question </button></div>
       </div>
      {/* <input type="text" value={name} onChange ={(e)=>setName(e.target.value)} placeholder="enter product name"   className="input-field"/>
      <button className="btn " onClick={addproduct} > Add Product</button> */}
      </div>
      <div className='pl-10 mt-4' > <button className="btn p-2  bg-white rounded-md " onClick={()=>setCamera(!camera)} > Let start  </button></div>
      

    </div>}

{camera && <Camera question={question}/>}
    </>

  )
}
