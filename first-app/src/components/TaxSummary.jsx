function TaxSummary({ expenses }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const businessExpenses = expenses
    .filter(expense => expense.type === 'business')
    .reduce((sum, expense) => sum + expense.amount, 0)
  const personalExpenses = expenses
    .filter(expense => expense.type === 'personal')
    .reduce((sum, expense) => sum + expense.amount, 0)

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount
    return acc
  }, {})

  const estimatedTaxSavings = totalExpenses * 0.22

  const exportToCSV = () => {
    const csvContent = [
      ['Date', 'Description', 'Category', 'Type', 'Amount'],
      ...expenses.map(expense => [
        expense.date,
        expense.description,
        expense.category,
        expense.type,
        expense.amount
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `dductly-expenses-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div>
      <h2>Tax Summary</h2>
      
      <div className="summary-grid">
        <div className="summary-card">
          <h3>Total Deductions</h3>
          <div className="summary-amount">{formatCurrency(totalExpenses)}</div>
        </div>
        
        <div className="summary-card">
          <h3>Business Expenses</h3>
          <div className="summary-amount">{formatCurrency(businessExpenses)}</div>
        </div>
        
        <div className="summary-card">
          <h3>Personal Deductions</h3>
          <div className="summary-amount">{formatCurrency(personalExpenses)}</div>
        </div>
        
        <div className="summary-card">
          <h3>Est. Tax Savings</h3>
          <div className="summary-amount">{formatCurrency(estimatedTaxSavings)}</div>
          <small style={{ color: '#6c757d' }}>Assuming 22% tax bracket</small>
        </div>
      </div>

      {Object.keys(categoryTotals).length > 0 && (
        <div className="category-breakdown">
          <h3>Breakdown by Category</h3>
          {Object.entries(categoryTotals)
            .sort(([,a], [,b]) => b - a)
            .map(([category, amount]) => (
              <div key={category} className="category-item">
                <span>{category}</span>
                <span>{formatCurrency(amount)}</span>
              </div>
            ))}
        </div>
      )}

      {expenses.length > 0 && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button onClick={exportToCSV} className="btn btn-primary">
            Export to CSV
          </button>
        </div>
      )}

      {expenses.length === 0 && (
        <div style={{ textAlign: 'center', color: '#6c757d', marginTop: '3rem' }}>
          <p>No expenses to summarize yet.</p>
          <p>Start adding expenses to see your tax deduction summary!</p>
        </div>
      )}
    </div>
  )
}

export default TaxSummary