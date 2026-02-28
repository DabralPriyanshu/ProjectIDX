import express from "express";
import ENV from "./config/serverConfig.js";
import apiRoutes from "./routes/index.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/api", apiRoutes);
app.get("/ping", (req, res) => {
  return res.json({ message: "pong" });
});

app.listen(ENV.PORT, () => {
  console.log(`Server is running on http://localhost:${ENV.PORT}`);
});
