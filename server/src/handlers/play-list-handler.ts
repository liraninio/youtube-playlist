import { getYouTubeVideoById } from "../controllers/youtube-api";
import { sendMessage, sendPlayList } from "./youtube-socket-handler";
import { Video } from "../models/video";
import { YoutubeAction } from "../models/types";
import AsyncLock from "async-lock";
import { CHANNEL, SocketEvent,PLAYLIST_LOCK } from "../configuration/config.js";
import { Server, Socket } from "socket.io";

const playlistLock = new AsyncLock();
let playlist: Video[] = [];

const addToPlaylist = async (newVideo: Video) => {
    try {
      await playlistLock.acquire(PLAYLIST_LOCK, async () => {
        if (!playlist.some((video) => video.id === newVideo.id)) {
          playlist.push(newVideo);
          return true; // Song was added successfully
        } else {
          return false; // Song already exists in playlist
        }
      });
    } catch (err) {
      console.error('Error acquiring lock:', err);
      return false;
    }
  };

const handleAddAction = async function (
  videoId: string,
  io: Server,
  socket: Socket
) {
  try {
    const newSong = await getYouTubeVideoById(videoId);
    const result = await addToPlaylist(newSong);
    console.log(`result - ${result}`);
    sendMessage(
      result ? SocketEvent.ADD_SUCCESS : SocketEvent.ADD_FAILURE,
      `Video ${newSong.title}`,
      io,
      socket,
      ""
    );
  } catch (e) {
    sendMessage(SocketEvent.ADD_FAILURE, `Video - ${videoId}`, io, socket, "");
  }
};

const handleRemoveAction = async function (videoId: string) {
  removeFromPlayList(videoId);
};
const removeFromPlayList = async (videoId: string) => {
  await playlistLock.acquire(PLAYLIST_LOCK, async () => {
    playlist = playlist.filter((video) => video.id !== videoId);
  });
};
export const sendPlaylist = (io: Server) => {
  console.log(playlist);
  sendPlayList(SocketEvent.PLAYLIST, playlist, io, null, CHANNEL);
};

export const handlePlaylistAction = async function (
  data: YoutubeAction,
  io: Server,
  socket: Socket
) {
  console.log(data);
  if (!socket || !socket.connected) {
    console.log(`Socket is disconnected, cannot emit event`);
    return;
  }

  switch (data.action) {
    case SocketEvent.ADD:
      await handleAddAction(data.videoId, io, socket);
      break;
    case SocketEvent.REMOVE:
      await handleRemoveAction(data.videoId);
      break;
    default:
      console.log(`Unknown action: ${data.action}`);
  }

  sendPlaylist(io);
};
