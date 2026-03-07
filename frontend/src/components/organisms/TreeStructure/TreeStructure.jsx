import React, { useEffect } from "react";
import { useTreeStructureStore } from "../../../store/treeStructureStore";

const TreeStructure = () => {
  const { treeStructure, setTreeStructure } = useTreeStructureStore();

  useEffect(() => {
    if (treeStructure) {
      console.log(treeStructure);
    } else {
      setTreeStructure();
    }
  }, [setTreeStructure, treeStructure]);
  return <div>TreeStructure</div>;
};

export default TreeStructure;
