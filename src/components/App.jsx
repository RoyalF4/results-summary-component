import Category from './Category';

export default function App() {
  return (
    <main className="main">
      <div className="result">
        <h2 className="result__title">Your Result</h2>
        <div className="result__score">
          76 <span className="accent-score">of 100</span>
        </div>
        <span className="result__grade">Great</span>
        <p className="result__stats">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="summary">
        <h2 className="summary__title">Summary</h2>
        <ul className="summary__categories">
          <Category />
        </ul>
        <button className="summary__continue">Continue</button>
      </div>
    </main>
  );
}
