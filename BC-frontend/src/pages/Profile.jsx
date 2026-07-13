import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';

export default function Profile() {
  // const [username, setUsername] = useState('Loading...');

  // useEffect(() => {
  //   fetch('https://api.ipify.org?format=json')
  //     .then((res) => res.json())
  //     .then((data) => setUsername(data.ip))
  //     .catch(() => setUsername('Unknown User'));
  // }, []);

  const username = "SuperEpicGamer6769"

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Profile</h1>

        <Link to="/" className={styles.backLink}>
          ← Home
        </Link>
      </div>

      <div className={styles.card}>
        <div className={styles.profileContent}>
          <div className={styles.avatar}>
            <span>{username[0] ?? 'U'}</span>
          </div>

          <div className={styles.details}>
            <p>
              <strong>Username:</strong> {username}
            </p>
            <p>
              This is my witty catchphrase.
            </p>
          </div>
        </div>
      </div>


      {/* potential widgets:
            bets won
            points earned
            bet winrate
            chosen nominations
            participation count
            current wallet

            user review stuff (maybe not widgets):
              favorite books
              favorite genres
              average rating

          also include in here the leaderboard of course.
       */}
      <div className={styles.widgetContainer}>
        <div className={styles.widget}>
          <h1 className={styles.widgetTitle}>Bets Won</h1>
          <p className={styles.widgetContent}>
            more than you
          </p>
        </div>
        <div className={styles.widget}>
          <h1 className={styles.widgetTitle}>Chosen Nominations</h1>
          <p className={styles.widgetContent}>
            more than you
          </p>
        </div>
        <div className={styles.widget}>
          <h1 className={styles.widgetTitle}>Favorite Book</h1>
          <p className={styles.widgetContent}>
            more than you
          </p>
        </div>
        <div className={styles.widget}>
          <h1 className={styles.widgetTitle}>Another Cool Statistic</h1>
          <p className={styles.widgetContent}>
            more than you
          </p>
        </div>
      </div>
    </div>
  );
}