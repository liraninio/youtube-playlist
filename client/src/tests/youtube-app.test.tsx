import '@testing-library/jest-dom/extend-expect';
import {
  render,
  screen,
} from "@testing-library/react";
import { NO_VIDEOS_MSG } from '../configuration/consts';
import YoutubeApp from '../youtube/youtube-app';


describe("YoutubeApp", () => {
    test("displays no videos message when there are no videos", () => {
      // Render the component with an empty video list
      render(<YoutubeApp />);
  
      // Get the no videos message and check that it is displayed
      const noVideosMessage = screen.getByText(NO_VIDEOS_MSG);
      expect(noVideosMessage).toBeInTheDocument();
    });
  });