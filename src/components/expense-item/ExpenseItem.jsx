import PropTypes from "prop-types";

export const ExpenseItem=({date,title,price})=>{
<div>
<div> {date.toISOString()}</div>
<div> {title}</div>
<div> {price}</div>
</div>
}

ExpenseItem.propType={
    date: PropTypes.instanceOf(Date),
    title:PropTypes.string,
    price:PropTypes.number,
}