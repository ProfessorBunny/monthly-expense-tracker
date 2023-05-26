import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2022);
  const yearSelectionHandler = (Selectedyear) => {
    setFilteredYear(Selectedyear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return filteredYear === expense.date.getFullYear().toString();
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onSelectingYear={yearSelectionHandler}
          year={filteredYear}
        />
        <ExpensesChart filteredExpenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
