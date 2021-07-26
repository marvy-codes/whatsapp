import React from 'react';
import "./chat.css";
import { Avatar, IconButton } from "@materal-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@materal-ui/icons";

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div> 
        </div>
    )
}

export default Chat
