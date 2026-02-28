import express from "express";
import projectController from "../../controllers/projectController.js";
const projectRouter = express.Router();

projectRouter.get("/", projectController.createProject);

export default projectRouter;
