import projectService from "../services/projectService.js";

const createProject = async (req, res) => {
  const projectId = await projectService.createProject();
  return res
    .status(201)
    .json({ message: "Project created", data: projectId, success: true });
};

const getProjectTree = async (req, res) => {
  const tree = await projectService.getProjectTree(req.params.projectId);
  return res.status(200).json({
    message: "Successfully fetched the tree",
    data: tree,
    success: true,
  });
};

export default {
  createProject,
  getProjectTree,
};
