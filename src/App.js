import "./App.css";
import { useState } from "react";
import Section from "./component/Section";
import FeedbackOptions from "./component/FeedbackOptions";
import Statistics from "./component/Statistics";
import Notification from "./component/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackBtn = { good, neutral, bad };

  const incrementFeedback = (btn) => {
    switch (btn) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <section className="app">
      <div className="container">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            buttons={Object.keys(feedbackBtn)}
            onLeaveFeedback={incrementFeedback}
          />
        </Section>

        <Section title={"Statistics"}>
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification text={"No feedback given"} />
          )}
        </Section>
      </div>
    </section>
  );
}
