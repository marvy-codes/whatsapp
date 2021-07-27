import React from 'react';
import "./chat.css";
import {Avatar, IconButton} from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

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
                        <MoreVert />
                    </IconButton>
                </div>
            </div> 
            <div className="chat__body">

                <p className="chat__message">
                    <span className="chat__name">sonny</span>
                    Hi, how are you today
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span> 
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">sonny</span>
                    Hi, how are you today
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span> 
                </p>
                 
            </div> 

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a message" type="text" />
                    <button type="submit">
                        send message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Chat
