import styles from './Bets.module.css';
import { Link } from 'react-router-dom';

export default function Bets() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Bets</h1>

        <Link to="/" className={styles.backLink}>
          ← Home
        </Link>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>My Bets</h2>

        <div className={styles.emptyState}>
          <p>No bets available.</p>
          <span>Your active and historical bets will appear here.</span>
        </div>
      </div>
    </div>
  );
}