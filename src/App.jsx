import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./index.css";

import Landing from "./pages/Landing.jsx";
import Header from "./components/Header.jsx";
import Menu from './pages/Menu.jsx';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to={"/landing"} />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
    </>
  );
}

export default App;
