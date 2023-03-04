import express from "express";
import http from "http";
import { Server } from "socket.io";
import {
  handlePlaylistAction,
  sendPlaylist,
} from "./handlers/play-list-handler";
import {
  AUTORIZED_URL,
  CHANNEL,
  SocketEvent
}from  "./configuration/config";
const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: AUTORIZED_URL,
  },
});

io.on(SocketEvent.CONNECTION, (socket) => {
  console.log(`Client connected: ${socket.id}`);
  socket.join(CHANNEL);
  sendPlaylist(io);
  socket.on(SocketEvent.PLAYLIST_ACTION, (data) => {
    console.log(socket.id);
    handlePlaylistAction(data, io, socket);
  });

  socket.on(SocketEvent.DISCONNECT, (reason) => {
    console.log(`Client disconnected: ${socket.id}, reason: ${reason}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
