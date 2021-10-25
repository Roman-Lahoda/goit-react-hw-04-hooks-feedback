import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

function FeedbackOptions({ buttons, onLeaveFeedback }) {
  return (
    <div className={s.feedback__btns}>
      {buttons.map((btn) => {
        return (
          <button
            key={btn}
            className={`${s.btn} ${btn}`}
            onClick={() => onLeaveFeedback(btn)}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
