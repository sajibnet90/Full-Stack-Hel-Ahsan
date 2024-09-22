import { useState } from 'react';

// Button.js component
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

// StatisticLine.js component
// const StatisticLine = ({ text, value }) => (
//   <p>{text}: {value}</p>
// );

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);


const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Event handlers to update the state when feedback is given
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  // Calculate total feedback
  const total = good + neutral + bad;

  // Calculate average score: (good: +1, neutral: 0, bad: -1)
  const average = total > 0 ? (good - bad) / total : 0;

  // Calculate percentage of positive feedback (good)
  const positivePercentage = total > 0 ? (good / total) * 100 : 0;


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text={"Good"} />
      <Button onClick={handleNeutralClick} text={"Neutral"} />
      <Button onClick={handleBadClick} text="Bad" />

      <h1>Statistics</h1>
      {total === 0 ? (
        <p>No feedback given yet</p>
      ) : (
      <table>
        <tbody>
          <StatisticLine text={"Good"} value={good} />
          <StatisticLine text={"Neutral"} value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive" value={positivePercentage.toFixed(2) + '%'} />
          </tbody>
        </table>
        
      )}
    </div>
  );
};

export default App;
