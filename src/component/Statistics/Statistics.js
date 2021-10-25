import s from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p className={`${s.good} ${s.stat}`}>Good: {good}</p>
      <p className={`${s.neutral} ${s.stat}`}>Neutral: {neutral}</p>
      <p className={`${s.bad} ${s.stat}`}>Bad: {bad}</p>
      <p className={s.total}>Total: {total}</p>
      <p className={s.positive}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
