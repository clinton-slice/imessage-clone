import React from "react";
import Chat from "../chat/chat";
import SideBar from "../sidebar/sidebar";
import "./imessage.css";

const Imessage = () => {    
    return (
        <div className='imessage'>
            <SideBar/>
            <Chat/>
        </div>
    );
};

export default Imessage;