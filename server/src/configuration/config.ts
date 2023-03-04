export const CHANNEL = "youtube-playlist";
export const AUTORIZED_URL = "http://localhost:3000";
export const PLAYLIST_LOCK = "playlist-lock";
export enum SocketEvent {
    CONNECT = 'connect',
    CONNECT_ERROR = 'connect_error',
    PLAYLIST = 'playlist',
    ADD_SUCCESS = 'addSuccess',
    ADD_FAILURE = 'addFailure',
    REMOVE = 'remove',
    ADD = 'add',
    PLAYLIST_ACTION = 'playlistAction',
    DISCONNECT = 'disconnect',
    CONNECTION = 'connection'
  }