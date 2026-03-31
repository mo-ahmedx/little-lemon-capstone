import { useState, useReducer } from "react";
import BookingForm from "../components/BookingForm.jsx";
import { fetchAPI, submitAPI } from "../api.js";


  export const updateTimes = (state, action ) => {
        switch(action.type){
            case "UPDATE_TIMES":
                return fetchAPI(new Date (action.payload));
                
            default:
                return state;    
        }
  };

export default function BookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const initialTimes = () => {
    return fetchAPI(new Date())  //["17:00", "18:00"];
  }



  const [availableTimes, dispatch] = useReducer(updateTimes, [], initialTimes);

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
