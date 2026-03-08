import React from "react";
import { FaJs, FaFileAlt, FaCss3 } from "react-icons/fa"; 
import { GrReactjs } from "react-icons/gr";

const FileIcon = ({ extension }) => {
  const iconStyle = { height: "18px", width: "18px", display: "block" };

  const iconMapper = {
    js: <FaJs color="#f7df1e" style={iconStyle} />,
    jsx: <GrReactjs color="#61dafb" style={iconStyle} />,
    css: <FaCss3 color="#3c99dc" style={iconStyle} />,
  };

  return (
    <>{iconMapper[extension] || <FaFileAlt color="#999" style={iconStyle} />}</>
  );
};

export default FileIcon;
