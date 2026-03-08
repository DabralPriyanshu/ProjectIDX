import express from "express";
import ENV from "./config/serverConfig.js";
import apiRoutes from "./routes/index.js";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";
import chokidar from "chokidar";
import path from "node:path";
import { handleEditorSocketEvents } from "./socketHandlers/editorHandler.js";
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

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
const editorNamespace = io.of("/editor");
editorNamespace.on("connection", (socket) => {
  console.log("editor event");

  //somehow we will get the projectId from frontend
  console.log(socket.handshake.query.projectId);
  // const queryParams = queryString.parse(socket.handshake.query);
  let projectId = socket.handshake.query.projectId;
  console.log("Project Id received after connection ", projectId);
  let watcher = null;
  if (projectId) {
    watcher = chokidar.watch(`./projects/${projectId}`, {
      ignored: (path) => {
        return path.includes("node_modules");
      },
      persistent: true, //keeps the watcher in running state till the time app is running
      awaitWriteFinish: { stabilityThreshold: 2000 }, //changes should persist for 2 sec
      ignoreInitial: true, //ignores the initial files in the directory
    });
    watcher.on("all", (e, path) => {
      console.log(e, path);
    });
  }
  handleEditorSocketEvents(socket);
  socket.on("disconnect", async () => {
    await watcher.close();
    console.log("editor disconnect");
  });
});

server.listen(ENV.PORT, () => {
  console.log(`Server is running on http://localhost:${ENV.PORT}`);
});
