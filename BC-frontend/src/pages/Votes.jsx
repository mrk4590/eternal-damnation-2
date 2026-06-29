import { Link } from 'react-router-dom';
import styles from './Votes.module.css';

export default function Votes() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nominations & Voting</h1>

        <Link to="/" className={styles.backLink}>
          ← Home
        </Link>
      </div>

      <div className={styles.pageBody}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>Final Results</div>

          <div className={styles.card}>
            <div className={styles.emptyState}>
              <p>Some results</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.sectionTitle}>Bonus Votes</div>

          <div className={styles.emptyState}>
            <p>1 vote</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.sectionTitle}>Nominations</div>

          <div className={styles.emptyState}>
            <p>Morning Star</p>
            <p>Morning Star</p>
          </div>
        </div>
      </div>
      {/* <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Community Votes</h2>

        <div className={styles.emptyState}>
          <p>No votes available.</p>
          <span>
            Community polls and vote results will appear here.
          </span>
        </div>
      </div> */}
    </div>
  );
}