import  { CSSProperties, ReactNode } from 'react';
import { Socket } from 'socket.io-client';

export type PlayList = {
  videoList: Video[];
  searchBtnName: string;
  inputPlaceHolder: string;
  onSearch: (query: string) => void;
  onVideoDelete: () => void;
};

export type Video = {
  id: string;
  title: string;
  duration: string;
  isPlaying: boolean;
};

export type BoxPlaceHolderProps = {
  style: CSSProperties;
  text: string;
}

export type CustomBoxProps = {
  children: ReactNode;
}
export type ListDividersProps = {
  items: Video[];
  maxTitleLen: number;
  onDelete: (id : string ) => void;
}
export type YoutubeVideoPlayerProps = {
  height: string | number;
  width: string | number;
  autoPlay: boolean;
  mute: boolean;
  showControls: boolean;
  onVideoEnd: () => void;
  videoId: string;
}
export type UseSocketResult = {
  socket: Socket;
  videos: Video[];
  memoAddVideo: (videoId: string) => void;
  memoRemoveVideo: (id?: string) => void;
};
