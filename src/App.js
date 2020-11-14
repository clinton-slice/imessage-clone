import React from "react";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import "./App.css";
import Imessage from "./components/imessage/IMessage";
import Login from "./components/login/login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? <Imessage/> : <Login/>}
    </div>
  );
}

export default App;
