export const NO_VIDEOS_MSG = "No videos to show";
export const PLACE_HODER = "Enter video id";
export const VIDEO_WIDTH = "800";
export const VIDEO_HEIGHT = "500";
export const APP_URL = "http://localhost:4000";
export const MAX_TITLE_LETTER_LENGTH = 20;
export const RECONNECT_TIMEOUT = 5000;

export enum TestIds {
  SEARCH_BAR = "search-bar",
  PLAYLIST = "playlist",
  DELETE_BTN = "delete-btn-"

}
export enum SocketEvent {
    CONNECT = 'connect',
    CONNECT_ERROR = 'connect_error',
    PLAYLIST = 'playlist',
    ADD_SUCCESS = 'addSuccess',
    ADD_FAILURE = 'addFailure',
    REMOVE = 'remove',
    ADD = 'add',
    PLAYLIST_ACTION = 'playlistAction'
  }
