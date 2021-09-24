import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import socketio from 'socket.io-client';

function App() {
  const adminUser = {
    id: "admin",
    pw: "q1w2e3!!"
  }

const [user, setUser] = useState({name:""});
const [error, setError] = useState("");

const Login = details => {
  console.log(details);

  if(details.name == adminUser.id && details.password == adminUser.pw){
    console.log("LOGGED IN");
    setUser({
      name:details.name,
      password:details.password
    });
  }else{
    console.log("Details differnet");
    setError("Wrong!!!!");
  }
}

const Logout = () =>{
  setUser({ name:""});
  console.log("Logout");
}

  return(
    <div className="App">
      {(user.name !="") ? (
        <div className="welcome">
          <h2>Welcom, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
