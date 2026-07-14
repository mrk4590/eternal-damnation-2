import { Link } from 'react-router-dom';
import styles from './Schedule.module.css';
import React, { useState } from 'react';
import Button from '../components/button';

export default function Schedule() {

  const [isOpen, setOpen] = React.useState(false);
  
  const handleClick = () => {
      setOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Schedule</h1>

        <Link to="/" className={styles.backLink}>
          ← Home
        </Link>
      </div>



    <div>
        <Button onClick={handleClick}>+ New Meeting</Button>

        {isOpen && (
          <div className={styles.card}>Pop-up for meeting input</div>
        )}
      </div>




    <div className={styles.card}>
        <h2 className={styles.sectionTitle}>+ New Meeting</h2>
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