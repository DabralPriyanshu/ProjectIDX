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
  }, [setProjectId, projectIdFromUrl]);

  return (
    <div style={styles.mainWrapper}>
      {/* 1. Sidebar (Tree Structure) */}
      {projectId && (
        <aside style={styles.sidebar}>
          <div style={styles.sidebarHeader}>EXPLORER</div>
          <TreeStructure />
        </aside>
      )}

      {/* 2. Editor Area (Main Content) */}
      <main style={styles.editorArea}>
        {/* Monaco Editor iske andar flex: 1 lega */}
        <EditorComponent />

        {/* Buttons Floating or Bottom */}
        <div style={styles.buttonContainer}>
          <EditorButton />
          <EditorButton isActive={true} />
        </div>
      </main>
    </div>
  );
};

// --- Professional CSS-in-JS ---
const styles = {
  mainWrapper: {
    display: "flex",
    height: "100vh", // Pura screen cover karega
    width: "100vw",
    backgroundColor: "#1e1e1e", // Editor dark theme background
    overflow: "hidden", // Main page scroll nahi hona chahiye
  },
  sidebar: {
    backgroundColor: "#252526", // VS Code sidebar color
    minWidth: "250px",
    maxWidth: "400px",
    width: "20%",
    height: "100%",
    borderRight: "1px solid #333",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto", // Sirf sidebar scroll hoga
  },
  sidebarHeader: {
    padding: "10px 20px",
    fontSize: "11px",
    fontWeight: "bold",
    color: "#858585",
    letterSpacing: "1px",
  },
  editorArea: {
    flex: 1, // Ye sabse important hai! Bachi hui width ye lega
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#1e1e1e",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    display: "flex",
    gap: "10px",
    zIndex: 10, // Editor ke upar dikhega
  },
};
export default ProjectPlayground;
