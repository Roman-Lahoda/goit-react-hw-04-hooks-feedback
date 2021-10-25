import s from "./Notification.module.css";
import PropTypes from "prop-types";

function Notification({ text }) {
  return <p className={s.text}>{text}</p>;
}

Notification.propTypes = {
  text: PropTypes.string,
};

export default Notification;
