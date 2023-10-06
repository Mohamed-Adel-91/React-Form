import { useState } from "react"
import ExpenseList from "./components/expense-tracker/ExpenseList"

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Groceries',
      amount: 30,
      category: 'Util',
    },
    {
      id: 2,
      description: 'Groceries',
      amount: 50,
      category: 'Util',
    },
    {
      id: 3,
      description: 'Groceries',
      amount: 60,
      category: 'Util',
    },
    {
      id: 4,
      description: 'Groceries',
      amount: 130,
      category: 'Util',
    },
    ]);
  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
    </div>
  )
}

export default App