import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useActiveFileTabStore } from "../../../store/activeFileTabStore";
const EditorComponent = () => {
  const [editorState, setEditorState] = useState({ theme: null });
  const { editorSocket } = useEditorSocketStore();
  const { activeFileTab, setActiveFileTab } = useActiveFileTabStore();

  function handleEditorTheme(editor, monaco) {
    monaco.editor.defineTheme(`dracula`, editorState.theme);
    monaco.editor.setTheme(`dracula`);
  }
  if (editorSocket) {
    editorSocket.on("readFileSuccess", (data) => {
      console.log("Read file success data ", data);
      setActiveFileTab(data.path, data.value);
    });
  }
  useEffect(() => {
    async function downloadTheme() {
      const response = await fetch("/Dracula.json");
      const data = await response.json();

      setEditorState((prev) => {
        return { ...prev, theme: data };
      });
    }
    downloadTheme();
  }, []);
  return (
    <div>
      {editorState.theme && (
        <Editor
          height={"100vh"}
          width={"100%"}
          defaultLanguage={undefined}
          value={
            activeFileTab?.value
              ? activeFileTab?.value
              : "//Welcome to the playground"
          }
          options={{ fontSize: 18, fontFamily: "monospace" }}
          onMount={handleEditorTheme}
        />
      )}
    </div>
  );
};

export default EditorComponent;
