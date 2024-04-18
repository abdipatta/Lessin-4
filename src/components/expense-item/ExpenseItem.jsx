import PropTypes from "prop-types";
import css from "./ExpenseItem.module.css";

export const ExpenseItem = ({ date, title, price }) => {
  return (
    <div className={css.ExpenseItemContainer}>
      <div className={css.ExpenseItemDate}> {date.toString()}</div>
      <div className={css.ExpenseItemTitle}> {title}</div>
      <div className={css.ExpenseItemPrice}> {price}</div>
    </div>
  );
};

ExpenseItem.propTypes = {
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string,
  price: PropTypes.number,
};
