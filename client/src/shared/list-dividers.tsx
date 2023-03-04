import React from 'react';
import {Tooltip, ListItemText, List, ListItem, ListItemIcon, Divider} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { truncateText } from '../sharedHandlers/text-handler';
import { ListDividersProps } from '../models/types';
import {ListStyle,ItemRightTxtStyle} from '../styles/list-styles';
import { TestIds } from '../configuration/consts';





export default function ListDividers(props: ListDividersProps): JSX.Element {

  return (
    <List sx={ListStyle} component="nav" >
    {props.items.map(item => {
      return (
        <React.Fragment key={item.id}>
          <Tooltip title={item.title} arrow>
            <ListItem role="listItem" button selected={item.isPlaying}>
              <ListItemText primary={truncateText(item.title, props.maxTitleLen)} />
              <ListItemText primary={item.duration} sx={ItemRightTxtStyle} />
              <ListItemIcon data-testid={`${TestIds.DELETE_BTN}${item.id}`} onClick={() => props.onDelete(item.id)}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          <Divider />
        </React.Fragment>
      );
    })}
  </List>
  );
}
