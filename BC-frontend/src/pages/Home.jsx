import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const sections = [
  { to: '/schedule', title: 'Schedule', color: '#5B3A52' },
  { to: '/votes', title: 'Votes', color: '#A9822F' },
  { to: '/bets', title: 'Bets', color: '#2F4A3B' },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.headerNav}>
          <span className={styles.brandMark}>Book Club</span>
          <nav className={styles.navLinks}>
            {sections.map((section) => (
              <Link key={section.to} to={section.to} className={styles.navLink}>
                {section.title}
              </Link>
            ))}
          </nav>
        </div>

        <span className={styles.groupTitle}>Eternal Damnation</span>

        <Link to="/profile" className={styles.profileBox}>
          <div className={styles.avatar}>TD</div>
          <div className={styles.profileText}>
            <span className={styles.profileName}>The Damned</span>
            <span className={styles.profileMeta}>Not signed in</span>
          </div>
        </Link>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.sections}>
          {sections.map((section) => (
            <section key={section.to} className={styles.section}>
              <Link
                to={section.to}
                className={styles.tab}
                style={{ background: section.color }}
              >
                {section.title}
              </Link>

              <div className={styles.preview}>
                <span className={styles.previewLabel}>Preview when you guys are done</span>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
