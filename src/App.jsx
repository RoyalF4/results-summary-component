import Category from './components/Category/Category';
import Result from './components/Result/Result';
import styles from './App.module.css';
import data from './data.json';

export default function App() {
  console.log(data);

  return (
    <main className="main">
      <Result />
      <div className={styles.summary}>
        <h2 className={styles.summary__title}>Summary</h2>
        <ul className={styles.summary__categories}>
          {data.map((item, index) => (
            <Category
              key={index}
              category={item.category}
              score={item.score}
              icon={item.icon}
            />
          ))}
        </ul>
        <button className={styles.summary__continue}>Continue</button>
      </div>
    </main>
  );
}
