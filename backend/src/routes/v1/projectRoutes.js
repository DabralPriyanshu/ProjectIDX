import express from "express";
import projectController from "../../controllers/projectController.js";
const projectRouter = express.Router();

projectRouter.post("/", projectController.createProject);

export default projectRouter;
