import { useState, useEffect } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import TaxSummary from './components/TaxSummary'

function App() {
  const [expenses, setExpenses] = useState([])
  const [activeTab, setActiveTab] = useState('add')

  useEffect(() => {
    const savedExpenses = localStorage.getItem('dductly-expenses')
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('dductly-expenses', JSON.stringify(expenses))
  }, [expenses])

  const addExpense = (expense) => {
    const newExpense = {
      id: Date.now(),
      ...expense,
      date: new Date().toISOString().split('T')[0]
    }
    setExpenses([...expenses, newExpense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>dductly</h1>
        <p className="tagline">Track giving. Save money. Stress less.</p>
        <p className="mission">We help people effortlessly track donations and write-offs, turning everyday giving into real tax savings — making tax season simple, secure, and stress-free.</p>
      </header>

      <nav className="nav-tabs">
        <button 
          className={activeTab === 'add' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('add')}
        >
          Add Expense
        </button>
        <button 
          className={activeTab === 'list' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('list')}
        >
          View Expenses
        </button>
        <button 
          className={activeTab === 'summary' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('summary')}
        >
          Tax Summary
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'add' && (
          <ExpenseForm onAddExpense={addExpense} />
        )}
        {activeTab === 'list' && (
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        )}
        {activeTab === 'summary' && (
          <TaxSummary expenses={expenses} />
        )}
      </main>
    </div>
  )
}

export default App
