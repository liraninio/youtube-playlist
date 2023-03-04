import SearchBar from "../shared/search-bar";
import ListDividers from "../shared/list-dividers";
import CustomBox from "../shared/custom-box";
import { PlayListWrapper } from "../styles/playlist-styles";
import { PlayList } from "../models/types";
import { MAX_TITLE_LETTER_LENGTH } from "../configuration/consts";

const Playlist = (props: PlayList) => {
  return (
    <PlayListWrapper>
      <CustomBox>
        <SearchBar
          onSearch={props?.onSearch}
          placeholder={props?.inputPlaceHolder}
          searchBtnName={props?.searchBtnName}
        />
        {props?.videoList && (
          <ListDividers
            items={props?.videoList}
            maxTitleLen={MAX_TITLE_LETTER_LENGTH}
            onDelete={props.onVideoDelete}
          ></ListDividers>
        )}
      </CustomBox>
    </PlayListWrapper>
  );
};

export default Playlist;
