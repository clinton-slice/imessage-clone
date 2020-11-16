import { Avatar } from "@material-ui/core";
import React from "react";
import "./message.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Message = ({
    id, 
    contents: { timestamp, displayName, email, message, photo, uid},
}) => {
    const user = useSelector(selectUser);
    console.log(id, displayName, email, uid, new Date(timestamp?.toDate().toLocaleDateString()));
    return (
        <div className={`message ${user.email === email && "message_sender"}`}>
            <Avatar className='message_photo' src={photo}/>
            <p>{message}</p>
            <small>
                {new Date(timestamp?.toDate()).toLocaleDateString()}
            </small>
        </div>
    );
};  

Message.propTypes = {
    id: PropTypes.string,
    contents: PropTypes.object
};

export default Message;