import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import EditorButton from "../components/atoms/EditorButton/EditorButton";
import TreeStructure from "../components/organisms/TreeStructure/TreeStructure";
import { useTreeStructureStore } from "../store/treeStructureStore";
import { useEditorSocketStore } from "../store/editorSocketStore";
import { io } from "socket.io-client";
const ProjectPlayground = () => {
  const { projectId: projectIdFromUrl } = useParams();
  const { setProjectId, projectId } = useTreeStructureStore();
  const { setEditorSocket } = useEditorSocketStore();

  useEffect(() => {
    if (projectIdFromUrl) {
      const editorSocketConn = io(`${import.meta.env.VITE_API_SOCKET}/editor`, {
        query: { projectId: projectIdFromUrl },
      });
      setEditorSocket(editorSocketConn);
    }
    setProjectId(projectIdFromUrl);
  }, [setProjectId, projectIdFromUrl, setEditorSocket]);

  return (
    <div style={styles.mainWrapper}>
      {projectId && (
        <aside style={styles.sidebar}>
          <div style={styles.sidebarHeader}>EXPLORER</div>
          <TreeStructure />
        </aside>
      )}

      <main style={styles.editorArea}>
        <EditorComponent />

        <div style={styles.buttonContainer}>
          <EditorButton />
          <EditorButton isActive={true} />
        </div>
      </main>
    </div>
  );
};

const styles = {
  mainWrapper: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#1e1e1e",
    overflow: "hidden",
  },
  sidebar: {
    backgroundColor: "#252526",
    minWidth: "250px",
    maxWidth: "400px",
    width: "20%",
    height: "100%",
    borderRight: "1px solid #333",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  sidebarHeader: {
    padding: "10px 20px",
    fontSize: "11px",
    fontWeight: "bold",
    color: "#858585",
    letterSpacing: "1px",
  },
  editorArea: {
    flex: 1,
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
    zIndex: 10,
  },
};
export default ProjectPlayground;
