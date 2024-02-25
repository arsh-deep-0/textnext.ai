import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Company } from "../models/company.model.js";
import { Role } from "../models/role.model.js";
import { Question } from "../models/question.model.js";

const getRoles = asyncHandler(async (req, res) => {
  const companyName = req.params.company;
  const company = await Company.findOne(companyName);

  if (!company) {
    throw new ApiError(404, "No such company found");
  }

  const roles = await Role.find({ company: company._id });

  console.log(roles);

  return res
    .status(201)
    .json(new ApiResponse(201, roles, "roles fetched sucessfully"));
});

const getQuestions = asyncHandler(async (req, res) => {
  const companyName = req.params.company;
  const role = req.params.role;

  if (!companyName?.trim()) {
    throw new ApiError("company name is missing");
  }

  if (!role?.trim()) {
    throw new ApiError("job role is missing");
  }
  const company = await Company.findOne(companyName);

  if (!company) {
    throw new ApiError(404, "No such company found");
  }

  const questions = await Question.find({
    companies: { $in: [company._id] },
    roles: { $in: [role._id] },
  })
    .populate("companies")
    .populate("roles")
    .exec();

  return res
    .status(201)
    .json(new ApiResponse(201, questions, "questions fetched sucessfully"));
});

const generateQuestions = async (req, res) => {
    try {
      const interviewType = req.params.type;
      console.log('type:' + interviewType)
  
      const query = {
        roles: { $in: [interviewType] }, // Check for the role within the array
      };
  
      // Await the result of the query execution
      const questionArray = await Question.find(query);
  
      return res
        .status(200)
        .json({ status: 200, data: questionArray, message: "Questions fetched successfully" });
    } catch (error) {
      console.error("Error generating questions:", error);
      return res.status(500).json({ status: 500, message: "Internal server error" });
    }
  };
  



export { getQuestions, getRoles ,generateQuestions};
