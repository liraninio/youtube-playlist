import { useEffect, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { Video, UseSocketResult } from '../models/types';
import { APP_URL } from '../configuration/consts';
import {SocketEvent,RECONNECT_TIMEOUT} from '../configuration/consts';

const useYoutubeSocket = (url: string = APP_URL): UseSocketResult => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);

  const handleSocketEvents = (socket:Socket) =>{
    socket.on(SocketEvent.CONNECT, () => console.log(`Connected to ${url}`));

    socket.on(SocketEvent.CONNECT_ERROR, () => {
      console.log('Connection error. Reconnecting in 5 seconds...');
      setTimeout(() => socket.connect(), RECONNECT_TIMEOUT);
    });

    socket.on(SocketEvent.PLAYLIST, (newVideos: Video[]) => {
      console.log(`Received new playlist: ${JSON.stringify(newVideos)}`);
      setVideos(newVideos);
    });
    // can add message to user on success
    socket.on(SocketEvent.ADD_SUCCESS, () => console.log('Video added successfully'));
    // can add message to user on failure
    socket.on(SocketEvent.ADD_FAILURE, () => console.log('Failed to add video'));
  }

  useEffect(() => {

    if (!socket) {
      const newSocket: Socket = io(url);
      handleSocketEvents(newSocket);
      setSocket(newSocket);
    }

    // disconnect the socket when the component unmounts
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket, url]);

  const memoAddVideo = useCallback((videoId: string) => {
    if (socket) {
      socket.emit(SocketEvent.PLAYLIST_ACTION, { action: SocketEvent.ADD, videoId });
    }
  }, [socket]);

  const memoRemoveVideo = useCallback((id?: string) => {
    console.log(`delete - ${id}`);
    if (socket) {
      socket.emit(SocketEvent.PLAYLIST_ACTION, { action: SocketEvent.REMOVE, videoId: id ?? videos[0]?.id });
    }
  }, [socket, videos]);

  return { socket: socket as Socket, videos, memoAddVideo, memoRemoveVideo };
};

export default useYoutubeSocket;
