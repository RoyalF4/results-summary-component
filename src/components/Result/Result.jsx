import styles from './Result.module.css';

export default function Result() {
  return (
    <div className={styles.result}>
      <h2 className={styles.result__title}>Your Result</h2>
      <div className={styles.result__score}>
        76
        <span className={styles.accentScore}>of 100</span>
      </div>
      <span className={styles.result__grade}>Great</span>
      <p className={styles.result__stats}>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
