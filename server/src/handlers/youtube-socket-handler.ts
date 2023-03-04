import { Socket, Server } from "socket.io";
import { Video } from "../models/video";
export const sendMessage = (
  event: string,
  message: string,
  io: Server,
  socket: Socket | null,
  channel: string
) => {
  socket
    ? io.to(socket.id).emit(event, message)
    : io.to(channel).emit(event, message);
};
export const sendPlayList = (
  event: string,
  playList: Video[],
  io: Server,
  socket: Socket | null,
  channel: string
) => {
  socket
    ? io.to(socket.id).emit(event, playList)
    : io.to(channel).emit(event, playList);
};
