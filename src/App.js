import "./App.css";
import api from "./api/axios-config";
import { useState, useEffect } from "react";
import Layout from "./component/Layout";
import Home from "./component/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [messages, setMessages] = useState();

  const getMessages = async () => {
    try {
      const response = await api.get("/datainput/messages");

      setMessages(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMessages();
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home messages={messages} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
