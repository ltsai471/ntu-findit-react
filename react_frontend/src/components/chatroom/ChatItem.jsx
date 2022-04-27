import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ChatItem(props) {
    const chat = props.chat;

    return (
        <ListItemButton
            data-id={"test" + props.index}
            // selected={selectedIndex === 2}
            onClick={props.changeChatroom}
        // onClick={(event) => handleListItemClick(event, 2)}
        // onChange={event => handleListItemClick(event.target)}
        >
            <ListItemAvatar>
                <Avatar alt={chat.target} src={chat.photo} />
            </ListItemAvatar>
            <ListItemText
                primary={chat.caseName}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {chat.msgList[chat.msgList.length - 1].sendAccount}
                        </Typography>
                        {": " + chat.msgList[chat.msgList.length - 1].context}
                    </React.Fragment>
                }
            />
        </ListItemButton>
    );

}