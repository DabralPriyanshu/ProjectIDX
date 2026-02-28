import React from "react";
import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";

const ProjectPlayground = () => {
  const { projectId } = useParams();
  return (
    <div>
      <h1>Project ID :{projectId}</h1>
      <EditorComponent />
    </div>
  );
};

export default ProjectPlayground;
