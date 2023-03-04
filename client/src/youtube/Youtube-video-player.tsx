import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import {YoutubeVideoPlayerProps} from '../models/types';



const YoutubeVideoPlayer: React.FC<YoutubeVideoPlayerProps> = ({
    height,
    width,
    autoPlay,
    mute,
    showControls,
    onVideoEnd,
    videoId,
}) => {
    const opts: YouTubeProps['opts'] = {
        height,
        width,
        playerVars: {
            autoplay: autoPlay ? 1 : 0,
            mute: mute ? 1 : 0,
            controls: showControls ? 1 : 0,
        },
    };

    return <YouTube onEnd={onVideoEnd} videoId={videoId} opts={opts} />;
};

export default YoutubeVideoPlayer;