import React from 'react';
import "./sidebarChat.css";
import {Avatar} from "@material-ui/core";

function SidebarChat() {
    return (
        <div className="sidebarChat"> 
        <Avatar />
        <div className="sidebarChat__info">
            <h2>name</h2>
            <p>realtime chat</p>
        </div>

        </div>
    )
}

export default SidebarChat