import { useState } from "react";
import { Button } from "../UI/Button/Button";
import { ExpenseForm } from "../expense-form/ExpenseForm";

const NewExpense = () => {
  const [showForm, setShowForm] = useState(false);

  const [counter, setCounter] = useState(0);

  function showFormHandler() {
    setShowForm((prevState) => !prevState);
  }
  function plusCounter() {
    setCounter((prevState) => prevState + 1);
  }
  function minusCounter() {
    setCounter((prevState) => prevState - 1);
  }

  const form=showForm ? (
    <ExpenseForm onShowForm={showFormHandler} />
  ) : (
    <Button text="Добавить новый расход" onClick={showFormHandler} />
  )
  return (
    <div>
      {form}

      <Button text="+" onClick={plusCounter} />
      <h1>{counter}</h1>
      <Button
        text="-"
        onClick={minusCounter}
      />
    </div>
  );
};

export default NewExpense;
