import mongoose, { Schema } from "mongoose";

const interviewSchema = new Schema(
  {
    candidate: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      default: "none",
    },
    score:{
      type: Number,
      required:true,
      default:0,
    },
    isSelected:{
        type:Boolean,
        required:true,
    },
    date:{
        type:String,
    },
    duration:{
        type:Number,
    }


  },
  { timestamps: true }
);

export const Interview = mongoose.model("Interview", interviewSchema);
