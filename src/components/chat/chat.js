import { IconButton } from "@material-ui/core";
import { MicNone } from "@material-ui/icons";
import React from "react";
import "./chat.css";
const Chat = () => {
    const [input, setInput] = React.useState("");
    const sendMessage = (event) => {
        event.preventDefault();
        //Firebase magic goes here
        setInput("");
    };
    return (
        <div className="chat">
            {/* <Chat Header/> */}
            <div className="chat_header">
                <h4>To: <span className="chat_name">Name</span></h4>
                <strong>Details</strong>
            </div>
            {/* <Chat Body/> */}
            <div className="chat_messages">
                <h2>Message</h2>
            </div>
            {/* <Chat Input/> */}
            <div className="chat_input">
                <form action="">
                    <input 
                        placeholder="iMessage" 
                        value={input} 
                        onChange={(e)=> setInput(e.target.value)} 
                        type="text"
                    />
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton className="chat_mic">
                    <MicNone/>
                </IconButton>
            </div>

        </div>
    );
};

export default Chat;