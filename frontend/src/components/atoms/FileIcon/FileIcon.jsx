import React from "react";
import {
  FaJs,
  FaFileAlt,
  FaCss3,
  FaHtml5,
  FaGitAlt,
  FaMarkdown,
} from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { VscJson, VscSettingsGear } from "react-icons/vsc"; // JSON aur Config ke liye badiya icons

const FileIcon = ({ extension }) => {
  const iconStyle = { height: "18px", width: "18px", display: "block" };

  const iconMapper = {
    js: <FaJs color="#f7df1e" style={iconStyle} />,
    jsx: <GrReactjs color="#61dafb" style={iconStyle} />,
    css: <FaCss3 color="#3c99dc" style={iconStyle} />,
    // Naye icons yahan hain:
    html: <FaHtml5 color="#e34f26" style={iconStyle} />,
    json: <VscJson color="#cbcb41" style={iconStyle} />,
    gitignore: <FaGitAlt color="#f05032" style={iconStyle} />,
    md: <FaMarkdown color="#083fa1" style={iconStyle} />,
    config: <VscSettingsGear color="#666" style={iconStyle} />, // package.json ya config ke liye
  };

  return (
    <>{iconMapper[extension] || <FaFileAlt color="#999" style={iconStyle} />}</>
  );
};

export default FileIcon;
