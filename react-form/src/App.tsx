import React, { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/expenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { set } from "react-hook-form";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 10, category: "household" },
    { id: 2, description: "protein", amount: 41, category: "health" },
    { id: 3, description: "pre-workout", amount: 2, category: "gym" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const deleteHandler = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) => {
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
            console.log(expenses);
          }}
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={deleteHandler}
      ></ExpenseList>
      <Form></Form>
    </div>
  );
}

export default App;
