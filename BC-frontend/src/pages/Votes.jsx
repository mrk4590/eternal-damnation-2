import { Link } from 'react-router-dom';
import styles from './Votes.module.css';

function ResultDisplay() {
  // Given or gotten from the database
  // I'm sure there's a better way to be doing this
  const resultItems = []

  for (let i = 0; i < 2; i++) {
    resultItems.push(<Result />)
  }

  const listItems = resultItems.map(item =>
    <li key={item}>
      {item}
    </li>
  )

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>Final Results</div>

      <ul style={{listStyleType: 'none'}}>
        {listItems}
      </ul>
    </div>
  )
}

function Result() {
  // Database stuff to get a result here,
  // or this could be given in the constructor ig
  let result = 'Some result'
  return (
    <div className={styles.card}>
      <div className={styles.emptyState}>
        <p>{result}</p>
      </div>
    </div>
  )
}

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
        <ResultDisplay />

        {/*This should probably be its own function*/}
        <div className={styles.card} style={{alignSelf: "flex-start"}}>
          <div className={styles.sectionTitle}>Bonus Votes</div>

          <div className={styles.emptyState}>
            <p>{"2 vote :)"}</p> {/*some db stuff to get these votes*/}
          </div>
        </div>
      </div>
    </div>
  );
}