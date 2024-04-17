import { Expenses } from "./components/expenses/Expenses";

const expenses = [
  {
    id: 1,
    title: "Шаурма",
    price: 94.12,
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
      {/*form*/}
      {/*expense*/}
      <Expenses data={expensesData }/>
    </div>
  );
}

export default App;
