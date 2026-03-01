import express from "express";
import projectController from "../../controllers/projectController.js";
const projectRouter = express.Router();

projectRouter.post("/", projectController.createProject);
projectRouter.get("/:projectId/tree", projectController.getProjectTree);

export default projectRouter;
