import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import FileIcon from "../../atoms/FileIcon/FileIcon";
import { useEditorSocketStore } from "../../../store/editorSocketStore";
const Tree = ({ fileFolderData }) => {
  const [visibility, setVisibility] = useState({});
  const { editorSocket } = useEditorSocketStore();
  function toggleVisibility(name) {
    setVisibility({ ...visibility, [name]: !visibility[name] });
  }
  function computeExtension(fileFolderData) {
    const names = fileFolderData.name.split(".");
    return names[names.length - 1];
  }
  function handleClick(fileFolderData) {
    console.log("Clicked on ", fileFolderData);
    if (editorSocket) {
      editorSocket.emit("readFile", {
        pathToFileOrFolder: fileFolderData.path,
      });
    } else {
      console.log("no connection");
    }
  }
  return (
    fileFolderData && (
      <div style={{ padding: "15px", color: "white" }}>
        {fileFolderData.children ? (
          <button
            onClick={() => toggleVisibility(fileFolderData.name)}
            style={{
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "white",
              backgroundColor: "transparent",
              paddingTop: "15px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {visibility[fileFolderData.name] ? (
              <IoIosArrowDown />
            ) : (
              <IoIosArrowForward />
            )}
            {fileFolderData.name}
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "4px 0",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "8px",
              }}
            >
              <FileIcon extension={computeExtension(fileFolderData)} />
            </div>

            <span
              onClick={() => handleClick(fileFolderData)}
              style={{
                fontSize: "14px",
                color: "white",
                lineHeight: "1",
              }}
            >
              {fileFolderData.name}
            </span>
          </div>
        )}
        {visibility[fileFolderData.name] &&
          fileFolderData.children &&
          fileFolderData.children.map((child) => (
            <Tree fileFolderData={child} key={child.name} />
          ))}
      </div>
    )
  );
};

export default Tree;
