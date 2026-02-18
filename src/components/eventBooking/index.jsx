import styles from "./styles.module.css";
import { useState } from "react";
import EventDetails from "../eventDetails";
import SeatSelector from "../seatSelector";

function EventBooking() {
  return (
    <div className={styles.container}>
      <EventDetails />
    </div>
  );
}
export default EventBooking;
