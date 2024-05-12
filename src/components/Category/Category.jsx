import styles from './Category.module.css';

export default function Category() {
  return (
    <li className={styles.category}>
      <img src="/images/icon-reaction.svg" alt="" className="category__icon" />
      <p className={styles.category__name}>Reaction</p>
      <span className={styles.category__score}>
        <span className={styles.accentScore}>80</span> / 100
      </span>
    </li>
  );
}
