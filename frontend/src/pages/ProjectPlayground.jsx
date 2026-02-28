import React from "react";
import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import EditorButton from "../components/atoms/EditorButton/EditorButton";

const ProjectPlayground = () => {
  const { projectId } = useParams();
  return (
    <div>
      <h1>Project ID :{projectId}</h1>
      <EditorComponent />
      <EditorButton />
      <EditorButton isActive={true} />
    </div>
  );
};

export default ProjectPlayground;
