import { useState } from "react";
import "./BookingForm.css";
import Restaurant from "../assets/restaurant.jpg";
export default function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    setTime("");
    setOccasion("");
    setGuests("");
    console.log("Form Submitted!");
  };

  const inValidForm = () => {
    return !date || !time || !occasion || guests < 1;
  };

  return (
    <>
      <div className="reservation-header">
        <img src={Restaurant} alt="" />
        <h2>Reservation</h2>
        <h4>Find a table for any occasion</h4>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          className="date-icon"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          className="time-icon"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />

        <label htmlFor="occasion" id="occasion">
          Occasion
        </label>
        <select
          name=""
          id="occasion"
          className="gift-icon"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversy">Anniversy</option>
        </select>
        // FIXME: i don't have colors for disabled and enabled state 
        <button id="submit" type="submit" disabled={inValidForm()}>
          Make your reservation
        </button>
      </form>
    </>
  );
}
