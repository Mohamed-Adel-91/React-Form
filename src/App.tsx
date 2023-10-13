import { useState } from "react";
import ExpenseList from "./components/expense-tracker/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/ExpenseForm";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import categories from "./components/expense-tracker/middleware/categories";

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [expenses, setExpenses] = useState([
        {
            id: 1,
            description: "TV",
            amount: 30,
            category: "Entertainment",
        },
        {
            id: 2,
            description: "Entertainment",
            amount: 50,
            category: "Entertainment",
        },
        {
            id: 3,
            description: "Groceries",
            amount: 60,
            category: "Groceries",
        },
        {
            id: 4,
            description: "Utilities",
            amount: 130,
            category: "Utilities",
        },
    ]);

    const visibleExpenses = selectedCategory
        ? expenses.filter((e) => e.category == selectedCategory)
        : expenses;
    return (
        <div>
            <div className="mb-5">
                <ExpenseForm />
            </div>
            <div className="mb-3">
                <ExpenseFilter
                    onSelectCategory={(category) =>
                        setSelectedCategory(category)
                    }
                />
            </div>
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) =>
                    setExpenses(expenses.filter((e) => e.id !== id))
                }
            />
        </div>
    );
};

export default App;
