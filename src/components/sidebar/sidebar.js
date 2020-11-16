import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./side-bar.css";
import SearchIcon from "@material-ui/icons/Search";
import { RateReviewOutlined } from "@material-ui/icons";
import SidebarChat from "../sidebar-chat/sidebar-chat";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import { auth, db } from "../../firebase";

const SideBar = () => {

    const user = useSelector(selectUser);
    const [chats, setChat] = React.useState([]);

    React.useEffect(() => {
        db.collection("chats").onSnapshot(snapshot =>
          setChat(
            snapshot.docs.map(doc => {
              return {
                id: doc.id,
                data: doc.data()
              };
            })
          )
        );
      }, []);
    
    // console.log(chats);

    const addChat = () => {
        const chatName = prompt("Please enter a chat name");
        if (chatName){
            db.collection("chats").add({
                chatName: chatName,
            });
        }
    };
    console.log(chats);
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar 
                    onClick={()=> auth.signOut()}
                    src={user.photo} 
                    className="sidebar_avatar"
                    
                />
                <div className="sidebar_input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
                <IconButton onClick={addChat} variant="outlined" className='sidebar_inputButton'>
                    <RateReviewOutlined />
                </IconButton>
            </div>
            <div className="sidebar_chats">
                {chats.map(({id, data: { chatName }}) => (
                     <SidebarChat key={id} chatName={chatName} id={id}/>
                ))}
            </div>
        </div>
    );
};

export default SideBar;