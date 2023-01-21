import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { Server } from "socket.io";
import http from "http";

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_PROD_URL,
  })
);
app.use(express.json());
app.use(routes);

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: process.env.CLIENT_PROD_URL,
  },
});

io.on("connection", (socket) => {
  console.log(`Usuário conectado no socket ${socket.id}`);
});

serverHttp.listen(process.env.PORT || 3333, () => {
  console.log("http server running");
});

export { io };
