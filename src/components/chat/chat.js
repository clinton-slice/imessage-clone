import { IconButton } from "@material-ui/core";
import { MicNone } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectchatId, selectchatName } from "../../features/chatSlice";
import { db } from "../../firebase";
import Message from "../message/message";
import firebase from "firebase";
import { selectUser } from "../../features/userSlice";
import "./chat.css";

const Chat = () => {
    const chatName = useSelector(selectchatName);
    const chatId =  useSelector(selectchatId);
    const user = useSelector(selectUser);

    const [input, setInput] = React.useState("");
    const [messages, setMessages] = React.useState([]);

    useEffect(() => {
        if (chatId) {
          db.collection("chats")
            .doc(chatId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot(snapshot =>
              setMessages(
                snapshot.docs.map(doc => {
                  return {
                    id: doc.id,
                    data: doc.data()
                  };
                })
              )
            );
        }
      }, [chatId]);


      const sendMessage = e => {
        e.preventDefault();
        if (input) {
          db.collection("chats")
            .doc(chatId)
            .collection("messages")
            .add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              message: input,
              uid: user.uid,
              photo: user.photo,
              email: user.email,
              displayName: user.displayName
            });
          setInput("");
        //   ref.current.scrollTo(0, ref.current.scrollHeight + 100);
        }
      };
    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To: <span className="chat_name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat_messages">
                {messages.map(({id, data})=>(
                    <Message key={id} contents={data}/>
                ))}
            </div>
            <div className="chat_input">
                <form>
                    <input 
                        placeholder="Send Message" 
                        value={input} 
                        onChange={(e)=> setInput(e.target.value)} 
                        type="text"
                    />
                    <button type="submit" onClick={sendMessage}>
                        Send Message
                    </button>
                </form>
                <IconButton className="chat_mic">
                    <MicNone/>
                </IconButton>
            </div>

        </div>
    );
};

export default Chat;