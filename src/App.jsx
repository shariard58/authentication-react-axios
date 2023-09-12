import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Inner from "./components/Inner/Inner";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inner" element={<Inner />} />
      </Routes>
      {/* <LogIn /> */}
    </BrowserRouter>
  );
}

export default App;
