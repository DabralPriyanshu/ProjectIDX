import React from "react";
import { useParams } from "react-router-dom";

const ProjectPlayground = () => {
  const { projectId } = useParams();
  return (
    <div>
      <h1>Project ID :{projectId}</h1>
    </div>
  );
};

export default ProjectPlayground;
