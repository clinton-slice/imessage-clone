import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./redux/userSlice";
import Imessage from "./screens/imessage/IMessage";
import Login from "./components/login/login";
import { auth } from "./config/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  React.useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //user is logs in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
      } else {
        //user is logs out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {user ? <Imessage/> : <Login/>}
    </div>
  );
}

export default App;
