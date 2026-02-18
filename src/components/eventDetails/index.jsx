import styles from "./styles.module.css";

function EventDetails() {
  return (
    <div className={styles.container}>
      <p>Event:</p>
      <h1 className={styles.event}>Scorpions</h1>
      <h4 className={styles.event}>European tour</h4>
      <p>Date:</p>
      <h3 className={styles.event}>2026-05-05</h3>
      <p>Venue:</p>
      <h3 className={styles.event}>LANXESS arena</h3>
    </div>
  );
}
export default EventDetails;
