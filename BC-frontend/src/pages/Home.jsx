import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Book Club</h1>
        <p className={styles.subtitle}>
          Select a page to continue
        </p>

        <nav className={styles.nav}>
          <Link to="/bets" className={styles.link}>
            Bets
          </Link>

          <Link to="/votes" className={styles.link}>
            Votes
          </Link>

          <Link to="/schedule" className={styles.link}>
            Schedule
          </Link>

          <Link to="/profile" className={styles.link}>
            Profile
          </Link>
        </nav>
      </div>
    </div>
  );
}