import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./index.css";

import Landing from "./pages/Landing.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to={"/landing"} />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
    </>
  );
}

export default App;
