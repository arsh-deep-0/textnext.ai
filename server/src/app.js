import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { spawn } from "child_process";
import { ApiResponse } from "./utils/ApiResponse.js";
//import bodyParser from 'body-parser';
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
//app.use(bodyParser.urlencoded({extended:false}));

app.post("/calculate-bert-score", (req, res) => {
  let data = req.body;

  console.log(data);

  
  // Spawn a Python subprocess
  const pythonProcess = spawn("python", [
    "bert.py",
    data.question,
    data.user_answer,
    JSON.stringify(data.correct_answers)
    
  ]); //,
console.log(JSON.stringify(data.correct_answers));
  

  // Collect the output from the Python subprocess
  let result ="";
  pythonProcess.stdout.on("data", (data) => {
    console.log("data", data.toString());
    result += data;
  });

  pythonProcess.stderr.on("data", (error) => {
    console.log("error", error.toString());
  });

  console.log("result", result);
  // When the subprocess exits, send the result back in the response
  pythonProcess.on("close", (code) => {
    //const score = JSON.parse(result)?.score;
    //res.json({ 'score': score });
    console.log("process exited with code " + code);
    return res
    .status(201)
    .json(new ApiResponse(201, result, "bert score"));
  });

  
});

//routes import
//import userRouter from './routes/user.routes.js'

//routes declaration

//app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register

export { app };
