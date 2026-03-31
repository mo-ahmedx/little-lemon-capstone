import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./index.css";

import Landing from "./pages/Landing.jsx";
import Header from "./components/Header.jsx";
import Menu from './pages/Menu.jsx';
import BookingPage from "./pages/BookingPage.jsx";
import ConfirmedBooking from "./pages/ConfirmedBooking.jsx";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to={"/landing"} />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
    </Routes>
    </>
  );
}

export default App;
