import React from "react";
import { FaJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
const FileIcon = ({ extension }) => {
  return (
    <>
      {" "}
      {extension === "js" && (
        <FaJs color="yellow" style={{ height: "25px", width: "25px" }} />
      )}
      {extension === "jsx" && (
        <GrReactjs color="blue" style={{ height: "25px", width: "25px" }} />
      )}
    </>
  );
};

export default FileIcon;
