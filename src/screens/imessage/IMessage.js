import React from "react";
import Chat from "../../components/chat/chat";
import SideBar from "../../components/sidebar/sidebar";
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