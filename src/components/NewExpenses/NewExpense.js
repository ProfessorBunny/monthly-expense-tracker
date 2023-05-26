import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const newExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpensesItem(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseForm={saveExpenseDataHandler} />
    </div>
  );
};

export default newExpense;
