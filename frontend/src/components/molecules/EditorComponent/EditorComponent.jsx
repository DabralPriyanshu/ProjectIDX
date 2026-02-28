import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
const EditorComponent = () => {
  const [editorState, setEditorState] = useState({ theme: null });

  function handleEditorTheme(editor, monaco) {
    monaco.editor.defineTheme(`dracula`, editorState.theme);
    monaco.editor.setTheme(`dracula`);
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
          height={"80vh"}
          width={"100%"}
          defaultLanguage="javascript"
          defaultValue="//Welcome to the playground"
          options={{ fontSize: 18, fontFamily: "monospace" }}
          onMount={handleEditorTheme}
        />
      )}
    </div>
  );
};

export default EditorComponent;
