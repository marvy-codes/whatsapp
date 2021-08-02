import React from "react";
import './App.css';
import Chat from "./chat.js";
import Sidebar from "./sidebar.js";
import Pusher from 'pusher-js'

function App() {

  useEffect(() => {
    const pusher = new Pusher('fc05cdd3f53432f79111', {
      cluster: 'mt1'
    });
    const channel = pusher.subscribe('messages');
      channel.bind('inserted', function(data) {
        alert(JSON.stringify(data))
    })
  }, [ ]);

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
