"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FeedBack from "../feedback/page";
// import AudioMotionAnalyzer from "audiomotion-analyzer";

const container = document.getElementById("container");
const audioSource = document.getElementById("audio");
// const audioMotion = new AudioMotionAnalyzer(container, { source: audioSource });

const Camera = ({question}) => {
    let index =0;
    const [score,setScore] = useState(0);
    const [report,setReport] = useState(false);
    function timer(seconds, callback) {
        // Validate the callback function
        if (typeof callback !== 'function') {
            throw new TypeError('Callback must be a function');
        }
    
        // Validate the delay
        if (typeof seconds !== 'number' || seconds < 0) {
            throw new TypeError('Seconds must be a non-negative number');
        }
    
        const milliseconds = seconds * 1000;
    
        // Create a timeout to execute the callback after the specified time
        setTimeout(callback, milliseconds);
    }
    
 useEffect(()=>{
    console.log(score);
 },[score,setScore])
    async function handleSubmit(){
        const result = await fetch('http://localhost:8000/calculate-bert-score',{
            method: 'POST',
            body: JSON.stringify({
              "question": `${question[index].statement}`,
              "user_answer": `${intervieeText}`,
              "correct_answers":`${question[index].solution}`
            })
          });
           const data = await result.json();
           console.log(data, data.success);
           if(data.success===true ){
               console.log('succcessfully added the data');
               setScore(score+data.data.score);
               index++;
               if(index===question.length) 
               setInterviewText(question[index].statement);
           } 
           else {
               alert('failed to add the data');
           }
        
    }
  const [interviewText, setInterviewText] = useState(
  question[0].statement);
  const [intervieeText, setIntervieeText] = useState("");

  const videoRef = useRef(null);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startVideo();

    // Cleanup function to stop the video stream when the component unmounts
    return () => {
      const video = videoRef.current;

      if (video) {
        const stream = video.srcObject;

        if (stream) {
          const tracks = stream.getTracks();

          tracks.forEach((track) => {
            track.stop();
          });

          video.srcObject = null;
        }
      }
    };
  }, []);

  return (
    <>
{!report && <div className="white-wire h-dvh mx-auto">
    <h1 className="absolute top-10 left-10 font-bold text-3xl">
    Live Interview:
    </h1>
    <div className="flex items-center gap-2 justify-center h-dvh border-blue-500 mx-auto">
    <div className="flex gap-2 h-[50%] w-full">
        <div className="flex gap-2 border-red-4 ml-4">
        <video
            ref={videoRef}
            className="rounded-lg border-4"
            height={502}
            width={333}
            autoPlay
            playsInline
            />
        <Image
            src="/whatsapp.jpeg"
            className="border-4 rounded-lg"
            alt="photo"
            height={202}
            width={333}
            />
        </div>
        <div className="flex gap-2 flex-col h-full rounded-lg">
        <div className="gradientblue h-[50%] text-white font-semibold p-2 w-[650px] rounded-lg">
            Interviewer-
            <div className="p-2 overflow-hidden">
            <p className="text-xs">{interviewText}</p>
            </div>
        </div>
        <div className="gradientblue h-[50%] text-white font-semibold p-2 w-[650px] rounded-lg">
            Interviewee-
            <div className="p-2 text-wrap w-full">
            <textarea
                className="text-xs text-black overflow-hidden rounded-lg h-[100px] w-[98%] "
                value={intervieeText}
                onChange={(e) => setIntervieeText(e.target.value)}
                ></textarea>
            </div>
        </div>
        </div>
    </div>
    </div>
    <button className="text-white gradientblue p-2 rounded-lg" onClick={()=>handleSubmit()}>Submit</button>
</div>}
{report && <FeedBack/>}
                </>
  );
};

export default Camera;