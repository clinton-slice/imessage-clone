import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar-chat.css";

const SidebarChat = () => { 
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat_info">
                <h5>Name</h5>
                <p>Lase message ...</p>
                <small>time</small>
            
            </div>
        </div>
    );
};

export default SidebarChat;