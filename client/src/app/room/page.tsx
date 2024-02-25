'use client'
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [selectedOption, setSelectedOption] = useState(""); 
  const [name, setName] = useState("");
  useEffect(() => {
    //console.log("Selected option changed:", selectedOption);
  }, [selectedOption]);
  let score = 0;
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
         console.log(result);
        //  if(data.success===true ){
        //      console.log('succcessfully added the data');
             
        //  } 
        //  else {
        //      alert('failed to add the data');
        //  }
       }
  return (
    <div>
      <div>
      
        <label htmlFor="options">Select an option:</label>
        <select id="options" name="options" value={selectedOption} onChange ={(e)=>setSelectedOption(e.target.value)} className="input-field">
          <option value="BackEnd">BackEnd</option>
          <option value="FrontEnd">FrontEnd</option>
          
        </select>

       <button className="btn " onClick={getAnswer} > get question </button>

      <input type="text" value={name} onChange ={(e)=>setName(e.target.value)} placeholder="enter product name"   className="input-field"/>
      <button className="btn " onClick={addproduct} > Add Product</button>
      </div>
    </div>
  )
}
