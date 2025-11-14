import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([
    {
      username: "",
      password: "",
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"signup"} element={<Signup user={user} setUser={setUser}/>} />
          <Route path={"*"} element={<Login user={user}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
