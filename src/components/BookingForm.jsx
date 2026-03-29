import "./BookingForm.css";
import Restaurant from "../assets/restaurant.jpg";
export default function BookingForm() {
  return (
    <>
      <div className="reservation-header">
        <img src={Restaurant} alt="" />
        <h2>Reservation</h2>
        <h4>Find a table for any occasion</h4>
      </div>
      <form className="form">
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" className="date-icon" />

        <label htmlFor="res-time" >Choose time</label>
        <select id="res-time" className="time-icon">
          <option value="">17:00</option>
          <option value="">18:00</option>
          <option value="">19:00</option>
          <option value="">20:00</option>
          <option value="">21:00</option>
          <option value="">22:00</option>
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />

        <label htmlFor="occasion" id="occasion" >
          Occasion
        </label>
        <select name="" id="occasion" className="gift-icon">
          <option value="">Birthday</option>
          <option value="">Anniversy</option>
        </select>

        <input id="submit" type="submit" value="Make your reservation" />
      </form>
    </>
  );
}
