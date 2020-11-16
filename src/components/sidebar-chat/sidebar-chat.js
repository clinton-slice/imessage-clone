import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar-chat.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setChat } from "../../features/chatSlice";
import { db } from "../../firebase";
import * as timeago from "timeago.js";

const SidebarChat = ({id, chatName}) => { 
    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = React.useState([]);
    
    React.useEffect(() => {
      db.collection("chats")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot =>
          setChatInfo(
            snapshot.docs.map(doc => {
              return doc.data();
            })
          )
        );
    }, [id]);
    
    const openChat = () => {
        dispatch(
            setChat({
                chatId: id,
                chatName: chatName
            })
        );
    };
    return (
        <div className="sidebarChat" onClick={openChat}>
            <Avatar src={chatInfo[0]?.photo}/>
            <div className="sidebarChat_info">
                <h4>{chatName}</h4>
                <p>{chatInfo[0]?.message}</p>
                <small>
                    {timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()))}    
                </small>        
            </div>
        </div>
    );
};

SidebarChat.propTypes = {
    id: PropTypes.string,
    chatName: PropTypes.string
};

export default SidebarChat;
