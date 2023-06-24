import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import bookedData from "./db/db.json";
import { useState } from "react";

function App() {
  const [bookingdata, setBookingdata] = useState({ bookedData });
  const set = () => {
    setBookingdata(bookedData);
  };
  return (
    <>
      <Sidebar bookingdata={bookingdata} />
    </>
  );
}

export default App;
