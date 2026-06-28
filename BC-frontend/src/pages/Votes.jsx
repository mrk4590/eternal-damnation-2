import { Link } from 'react-router-dom';
import styles from './Votes.module.css';

export default function Votes() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Votes</h1>

        <Link to="/" className={styles.backLink}>
          ← Home
        </Link>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Community Votes</h2>

        <div className={styles.emptyState}>
          <p>No votes available.</p>
          <span>
            Community polls and vote results will appear here.
          </span>
        </div>
      </div>
    </div>
  );
}