import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./side-bar.css";
import SearchIcon from "@material-ui/icons/Search";
import { RateReviewOutlined } from "@material-ui/icons";
import SidebarChat from "../sidebar-chat/sidebar-chat";

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar className="sidebar_avatar"/>
                <div className="sidebar_input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
                <IconButton variant="outlined" className='sidebar_inputButton'>
                    <RateReviewOutlined/>
                </IconButton>
            </div>
            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    );
};

export default SideBar;