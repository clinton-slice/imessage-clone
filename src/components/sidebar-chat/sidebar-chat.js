import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar-chat.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setChat } from "../../features/chatSlice";
// import { db } from "../../firebase";

const SidebarChat = ({id, chatName}) => { 
    const dispatch = useDispatch();
    // const [chatInfo, setChatInfo] = React.useState([]);
    
    // React.useEffect(() => {
    //   db.collection("chats")
    //     .doc(id)
    //     .collection("messages")
    //     .orderBy("timestamp", "desc")
    //     .onSnapshot(snapshot =>
    //       setChatInfo(
    //         snapshot.docs.map(doc => {
    //           return doc.data();
    //         })
    //       )
    //     );
    // }, [id]);
    
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
            <Avatar />
            <div className="sidebarChat_info">
                <h5>{chatName}</h5>
                {/* <p>{chatInfo[0]?.message}</p> */}
                <small>time</small>        
            </div>
        </div>
    );
};

SidebarChat.propTypes = {
    id: PropTypes.string,
    chatName: PropTypes.string
};

export default SidebarChat;
