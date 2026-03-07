import React, { useEffect } from "react";
import { useTreeStructureStore } from "../../../store/treeStructureStore";
import Tree from "../../molecules/Tree/Tree";

const TreeStructure = () => {
  const { treeStructure, setTreeStructure } = useTreeStructureStore();

  useEffect(() => {
    if (treeStructure) {
      console.log(treeStructure);
    } else {
      setTreeStructure();
    }
  }, [setTreeStructure, treeStructure]);
  return (
    <div>
      <Tree fileFolderData={treeStructure} />
    </div>
  );
};

export default TreeStructure;
