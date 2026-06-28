import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';

export default function Profile() {
  const [username, setUsername] = useState('Loading...');

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => setUsername(data.ip))
      .catch(() => setUsername('Unknown User'));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Profile</h1>

        <Link to="/" className={styles.backLink}>
          ← Home
        </Link>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Account Information</h2>

        <div className={styles.profileContent}>
          <div className={styles.avatar}>
            <span>{username[0] ?? 'U'}</span>
          </div>

          <div className={styles.details}>
            <p>
              <strong>Username:</strong> {username + "👀 I know your IP..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}