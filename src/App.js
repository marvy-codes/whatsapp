import React, { useEffect, useState } from "react";
import './App.css';
import Chat from "./chat.js";
import Sidebar from "./sidebar.js";
import Pusher from 'pusher-js';
import axios from "./axios.js";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(res => {
        setMessages(res.data);
      })
  }, []);

  useEffect(() => {
    const pusher = new Pusher('fc05cdd3f53432f79111', {
      cluster: 'mt1'
    });
    const channel = pusher.subscribe('messages');
      channel.bind('inserted', function(data) {
        alert(JSON.stringify(data));
        setMessages([...messages, newMessages]);
    })
  }, [ ]);

  console.log(message);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
