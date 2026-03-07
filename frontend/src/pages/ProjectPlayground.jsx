import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import EditorButton from "../components/atoms/EditorButton/EditorButton";
import TreeStructure from "../components/organisms/TreeStructure/TreeStructure";
import { useTreeStructureStore } from "../store/treeStructureStore";

const ProjectPlayground = () => {
  const { projectId: projectIdFromUrl } = useParams();
  const { setProjectId, projectId } = useTreeStructureStore();
  useEffect(() => {
    setProjectId(projectIdFromUrl);
  }, []);
  return (
    <div>
      <h1>Project ID :{projectIdFromUrl}</h1>
      {projectId && <TreeStructure />}
      <EditorComponent />
      <EditorButton />
      <EditorButton isActive={true} />
    </div>
  );
};

export default ProjectPlayground;
