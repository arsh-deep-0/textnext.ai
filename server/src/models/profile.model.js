import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
    interviews:[{
        type: Schema.Types.ObjectId,
        ref: "Interview",
      }],
    strongAreas:[{
        type:String,
    }],
    weakAreas:[{
        type:String,
    }],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, { timestamps: true });

export const Profile = mongoose.model("Profile", profileSchema);
