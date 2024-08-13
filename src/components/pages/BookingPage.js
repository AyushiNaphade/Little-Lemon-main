import Heading from "../sections/reservePages/Heading";
import ReservationForm from "../sections/reservePages/BookingForm";
import { useState } from "react";
import { fetchAPI } from "../../bookingsAPI";
export default function BookingPage() {


  const output = fetchAPI(new Date());

  const [availableTimes, setAvailableTimes] = useState(output);
  function updateTimes(date) {
    setAvailableTimes(fetchAPI(date));
  
  }
  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={updateTimes} />
      <br/>
    </>
  );
}
