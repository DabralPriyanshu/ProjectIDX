import express from "express";
import ENV from "./config/serverConfig.js";
import apiRoutes from "./routes/index.js";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";
const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`a user connected`);
});
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true }));
app.use("/api", apiRoutes);
app.get("/ping", (req, res) => {
  return res.json({ message: "pong" });
});

server.listen(ENV.PORT, () => {
  console.log(`Server is running on http://localhost:${ENV.PORT}`);
});
