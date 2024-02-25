import { Router } from "express";
import { generateQuestions } from "../controllers/question.controller.js";

const router = Router();

router.route('/interview/:type').get(generateQuestions)

export default router
