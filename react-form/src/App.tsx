import ExpenseList from "./components/expense-tracker/ExpenseList"
const expenses = [
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