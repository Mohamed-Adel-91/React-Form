import ExpenseList from "./components/expense-tracker/ExpenseList"
const expenses = [
  {
  id: 1,
  description: 'Groceries',
  amount: 10,
  category: 'Util',
},
{
  id: 2,
  description: 'Groceries',
  amount: 10,
  category: 'Util',
},
{
  id: 3,
  description: 'Groceries',
  amount: 10,
  category: 'Util',
},
{
  id: 4,
  description: 'Groceries',
  amount: 10,
  category: 'Util',
}
]
const App = () => {
  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={(id) => console.log('Deleted', id)}/>
    </div>
  )
}

export default App