import { Expenses } from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

const expensesData = [
  {
    id: 1,
    title: "Шаурма",
    price: 94,
    date: new Date(),
  },
  {
    id: 2,
    title: "Ноутбук",
    price: 799,
    date: new Date(),
  },
  {
    id: 3,
    title: "Айфон",
    price: 294,
    date: new Date(),
  },
  {
    id: 4,
    title: "Ужин",
    price: 450,
    date: new Date(),
  },
];

function App() {
  return (
    <div>
      <NewExpense />
      <Expenses data={expensesData} />
    </div>
  );
}

export default App;
