import styles from './Category.module.css';
import PropTypes from 'prop-types';

Category.propTypes = {
  category: PropTypes.string,
  score: PropTypes.number,
  icon: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

export default function Category({ category, score, icon, color, bgColor }) {
  return (
    <li className={styles.category} style={{ background: bgColor }}>
      <img src={icon} alt="" className="category__icon" />
      <p className={styles.category__name} style={{ color: color }}>
        {category}
      </p>
      <span className={styles.category__score}>
        <span className={styles.accentScore}>{score}</span> / 100
      </span>
    </li>
  );
}
