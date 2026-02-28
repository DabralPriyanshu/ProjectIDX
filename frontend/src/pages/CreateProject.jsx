import React from "react";
import { useCreateProject } from "../mutations/useCreateProject";

const CreateProject = () => {
  const { createProjectMutation } = useCreateProject();
  async function handleCreateProject() {
    console.log("Going to trigger api");
    try {
      await createProjectMutation();
      console.log("Now we should redirect to editor");
    } catch (err) {
      console.log("Error creating project", err);
    }
  }
  return (
    <div>
      <h1>Create Project</h1>
      <button onClick={handleCreateProject}>Create Project</button>
    </div>
  );
};

export default CreateProject;
