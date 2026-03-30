import { useState, useReducer } from "react";
import BookingForm from "../components/BookingForm.jsx";
export default function BookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const updateTime = (state, action ) => {
        switch(action.type){
            case "UPDATE_TIMES":
                return initialTimes;
            default:
                return state;    
        }
  };

  const [availableTimes, dispatch] = useReducer(updateTime, initialTimes);

  return (
    <>
      <BookingForm 
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        occasion={occasion}
        setOccasion={setOccasion}
        guests={guests}
        setGuests={setGuests}
        availableTimes={availableTimes}
        dispatch={dispatch}
      
      />
    </>
  );
}
