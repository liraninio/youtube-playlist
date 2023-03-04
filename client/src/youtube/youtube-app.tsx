import Playlist from "./Youtube-playlist";
import YoutubeVideoPlayer from "./Youtube-video-player";
import useYoutubeSocket from "../hooks/useYoutubeSocket";
import { YoutubeAppWrapper } from "../styles/youtube-app-styles";
import BoxPlaceHolder from "../shared/box-place-holder";
import {
  PLACE_HODER,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
  NO_VIDEOS_MSG,
  APP_URL,
  TestIds,
} from "../configuration/consts";

const YoutubeApp = () => {
  const { videos, memoAddVideo, memoRemoveVideo} = useYoutubeSocket(APP_URL);


  return (
    <YoutubeAppWrapper>
      <Playlist
        videoList={videos}
        onSearch={memoAddVideo}
        inputPlaceHolder={PLACE_HODER}
        searchBtnName="Add"
        onVideoDelete={memoRemoveVideo}
        data-testid={TestIds.PLAYLIST}
      />

      {videos?.length ? (
        <YoutubeVideoPlayer
          onVideoEnd={memoRemoveVideo}
          videoId={videos[0].id}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          autoPlay={true}
          mute={false}
          showControls={false}
        />
      ) : (
        <BoxPlaceHolder
          text={NO_VIDEOS_MSG}
          style={{ width: `${VIDEO_WIDTH}px` }}
        ></BoxPlaceHolder>
      )}
    </YoutubeAppWrapper>
  );
};

export default YoutubeApp;
