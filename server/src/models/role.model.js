import mongoose, { Schema } from "mongoose";

const roleSchema = new Schema({
    postName:{
        type:String,
        required:true,
    },
    company:{
        type: Schema.Types.ObjectId,
        ref: "Company"
    }
}, { timestamps: true });

export const Role = mongoose.model("Role", roleSchema);
