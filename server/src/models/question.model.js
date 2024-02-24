import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema(
  {
    questionStatement: {
      type: String,
      required: true,
      trim: true,
    },
    solution:[{
        type: String,
        required: true,
        trim: true,
    }],
    companies:[{
        type: Schema.Types.ObjectId,
        ref: "Company"
    }],
    keywords:[{
        type:String,
    }],
    roles:[{
        type: Schema.Types.ObjectId,
        ref: "Role"
    }]
  },
  { timestamps: true }
);

export const Question = mongoose.model("Question", questionSchema);
