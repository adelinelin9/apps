function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return (
      <div>
        <h2>Your Expenses</h2>
        <p style={{ textAlign: 'center', color: '#6c757d', marginTop: '3rem' }}>
          No expenses recorded yet. Add your first expense to get started!
        </p>
      </div>
    )
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div>
      <h2>Your Expenses ({expenses.length})</h2>
      <div className="expense-list">
        {sortedExpenses.map(expense => (
          <div key={expense.id} className="expense-item">
            <div className="expense-info">
              <div className="expense-amount">
                {formatCurrency(expense.amount)}
              </div>
              <div className="expense-category">
                {expense.category} • {expense.type}
              </div>
              <div className="expense-description">
                {expense.description}
              </div>
              <div style={{ color: '#6c757d', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                {new Date(expense.date).toLocaleDateString()}
              </div>
            </div>
            <button
              onClick={() => onDeleteExpense(expense.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpenseList