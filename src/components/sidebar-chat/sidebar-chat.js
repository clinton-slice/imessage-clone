import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar-chat.css";
import PropTypes from "prop-types";

const SidebarChat = ({chatName}) => { 
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h5>{chatName}</h5>
                <p>Lase message ...</p>
                <small>time</small>        
            </div>
        </div>
    );
};

SidebarChat.propTypes = {
    chatName: PropTypes.string
};

export default SidebarChat;
