import fs from "node:fs/promises";
import path from "node:path";
import uuid4 from "uuid4";
import ENV from "../config/serverConfig.js";
import { execPromisified } from "../utils/execUtility.js";
import directoryTree from "directory-tree";
const createProject = async () => {
  //   steps
  //   1 create a unique id and then inside the projects folder create anew folder with that id
  const projectId = uuid4();
  console.log("Project ID: ", projectId);

  // Now create a folder with that id
  await fs.mkdir(`./projects/${projectId}`);

  //now execute command inside that folder
  const response = await execPromisified(ENV.REACT_PROJECT_COMMAND, {
    cwd: `./projects/${projectId}`,
  });
  return projectId;
};

const getProjectTree = async (projectId) => {
  const projectPath = path.resolve(`./projects/${projectId}`); //it return the actual path
  const tree = directoryTree(projectPath);
  return tree;
};

export default {
  createProject,
  getProjectTree,
};
