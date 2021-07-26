import React from "react";
import './App.css';
import Chat from "./chat.js";
import Sidebar from "./sidebar.js";

function App() {
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
