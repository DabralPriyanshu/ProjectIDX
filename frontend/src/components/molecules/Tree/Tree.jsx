import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import FileIcon from "../../atoms/FileIcon/FileIcon";
const Tree = ({ fileFolderData }) => {
  const [visibility, setVisibility] = useState({});
  function toggleVisibility(name) {
    setVisibility({ ...visibility, [name]: !visibility[name] });
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
              fontSize: "16px",
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
          <div style={{ display: "flex" }}>
            <FileIcon extension={fileFolderData.name.split(".")[1]} />
            <p
              style={{
                paddingTop: "10px",
                fontSize: "16px",
                cursor: "pointer",
                marginLeft: "5px",
                color: "white",
              }}
            >
              {fileFolderData.name}
            </p>
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
