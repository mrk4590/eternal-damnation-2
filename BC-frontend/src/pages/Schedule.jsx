import { Link } from 'react-router-dom';
import styles from './Schedule.module.css';

export default function Schedule() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Schedule</h1>

        <Link to="/" className={styles.backLink}>
          ← Home
        </Link>
      </div>


      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Upcoming Events</h2>

        <div className={styles.emptyState}>
          <p>No scheduled events available.</p>
          <span>Upcoming events and book schedules will appear here.</span>
        </div>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Past Events</h2>

        <div className={styles.emptyState}>
          <p>No previous events available.</p>
          <span>Past events will appear here.</span>
        </div>
      </div>

    </div>
  );
}