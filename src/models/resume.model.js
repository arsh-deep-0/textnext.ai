import mongoose,{Schema} from "mongoose";

const resumeSchema = new Schema({
   owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
   },
   skills:[
    {
        type:String,
    }
   ],
   projects:[
    {
        type:String,
    }
   ],
           
},{timestamps:true});

export const Resume = mongoose.model("Resume",resumeSchema);