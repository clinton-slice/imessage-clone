import { Avatar } from "@material-ui/core";
import React from "react";
import "./message.css";
import PropTypes from "prop-types";

const Message = ({
    id, 
    contents: { timestamp, displayName, email, message, photo, uid},
}) => {
    console.log(id, displayName, email, uid);
    return (
        <div className="message">
            <Avatar src={photo}/>
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