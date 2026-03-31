import { submitAPI } from "../api";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./BookingForm.css";
import Restaurant from "../assets/restaurant.jpg";
export default function BookingForm({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  dispatch,
}) {
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    dispatch({ type: "UPDATE_TIMES", payload: newDate });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };

    const success = submitAPI(formData);

    if (success) {
      console.log(
        `Form Submitted with : ${date}, ${time}, ${guests}, ${occasion}`,
      );
      setDate("");
      setTime("");
      setOccasion("");
      setGuests("");

      alert("You successfully reserved a table!");
      navigate("/confirmed-booking");
      
    } else {
      alert("Opps something went wrong try again!");
    }
  };

  const inValidForm = !date || !time || !occasion || guests < 1;

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
          onChange={handleDateChange}
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
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
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
          <option value="" disabled hidden>
            Select an occasion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversy">Anniversy</option>
        </select>
        {/* FIXME: i don't have colors for disabled and enabled state  */}
        <button
          id="submit"
          type="submit"
          role="button"
          disabled={inValidForm}
          aria-disabled={inValidForm}
        >
          Make your reservation
        </button>
      </form>
    </>
  );
}
