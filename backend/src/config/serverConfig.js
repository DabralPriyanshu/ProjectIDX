import dotenv from "dotenv";

dotenv.config({ quiet: true });
export default {
  PORT: process.env.PORT || 3001,
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173",
  REACT_PROJECT_COMMAND: process.env.REACT_PROJECT_COMMAND,
};
