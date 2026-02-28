import util from "node:util";
import child_process, { exec } from "node:child_process";
import fs from "node:fs/promises";
import uuid4 from "uuid4";
import ENV from "../config/serverConfig.js";

//the exec function takes callback the util module helps to convert callback into promise
//exec function help to run any terminal cmd
const execPromisified = util.promisify(child_process.exec);
const createProject = async (req, res) => {
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

  return res.json({ message: "Project created", data: projectId });
};

export default {
  createProject,
};
