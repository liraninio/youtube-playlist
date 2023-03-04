import '@testing-library/jest-dom/extend-expect';
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { PLACE_HODER, TestIds } from '../configuration/consts';
import { Video } from '../models/types';
import Playlist from '../youtube/Youtube-playlist';


describe('Playlist', () => {
    it('calls onDelete with correct argument when delete button is clicked', () => {
      const onDelete = jest.fn();
      const onAdd = jest.fn();
      const videoList : Video[] = [
        { id: "1", title: "Item 1", duration: "1:23", isPlaying: false },
        { id: "2", title: "Item 2", duration: "4:56", isPlaying: true },
        { id: "3", title: "Item 3", duration: "2:34", isPlaying: false },
      ];
  
      const props = {
        videoList,
        onVideoDelete: onDelete,
      };
      const { getByTestId } = render(<Playlist
        videoList={videoList}
        onSearch={onAdd}
        inputPlaceHolder={PLACE_HODER}
        searchBtnName="Add"
        onVideoDelete={onDelete}
        data-testid={TestIds.PLAYLIST}
      />);
      let tmp = `${TestIds.DELETE_BTN}}${videoList[1].id}`;
      const deleteBtn = screen.getByTestId(`${TestIds.DELETE_BTN}${videoList[1].id}`);
      fireEvent.click(deleteBtn);
      expect(onDelete).toHaveBeenCalledWith(videoList[1].id);
    });
  });