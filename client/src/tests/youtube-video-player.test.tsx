import '@testing-library/jest-dom/extend-expect';
import {
  render,
} from "@testing-library/react";
import YoutubeVideoPlayer from '../youtube/Youtube-video-player';


describe('YoutubeVideoPlayer', () => {
    it('renders without crashing', () => {
      const props = {
        height: 360,
        width: 640,
        autoPlay: true,
        mute: false,
        showControls: true,
        onVideoEnd: jest.fn(),
        videoId: 'abcdefg',
      };
  
      render(<YoutubeVideoPlayer {...props} />);
    });
  });