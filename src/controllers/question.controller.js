import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Company } from "../models/company.model.js";
import { Role } from "../models/role.model.js";
import { Question } from "../models/question.model.js";

const getRoles = asyncHandler(async(req,res)=>{
    const companyName = req.params.company;
    const company = await Company.findOne(companyName);

    if(!company){
        throw new ApiError(404,"No such company found")
    }

    const roles = await Role.find({company : company._id});

    console.log(roles)

    return res.
    status(201)
    .json(
        new ApiResponse(201,roles , "roles fetched sucessfully")
    )

})

const getQuestions = asyncHandler(async(req,res)=>{
    const companyName = req.params.company;
    const role= req.params.role;

    if(!companyName?.trim()){
        throw new ApiError('company name is missing')
    }

    if(!role?.trim()){
        throw new ApiError('job role is missing')
    }
    const company = await Company.findOne(companyName);

    if(!company){
        throw new ApiError(404,"No such company found")
    }

    const questions = await Question.find({
        companies: { $in: [company._id] },
        roles: { $in: [role._id] },
      }).populate('companies').populate('roles').exec();


      return res.
      status(201)
      .json(
          new ApiResponse(201,questions , "questions fetched sucessfully")
      )
})


export {getQuestions , getRoles}