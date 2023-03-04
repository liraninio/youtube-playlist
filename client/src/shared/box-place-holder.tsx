import CustomBox from './custom-box';
import {BoxPlaceHolderProps} from '../models/types';


const BoxPlaceHolder = (props: BoxPlaceHolderProps) => {
  return (
    <div style={props.style}>
      <CustomBox>
        <div>{props.text}</div>
      </CustomBox>
    </div>
  );
};

export default BoxPlaceHolder;
