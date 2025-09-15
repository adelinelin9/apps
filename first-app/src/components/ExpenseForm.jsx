import { useState } from 'react'
import ValuationHelper from './ValuationHelper'

const EXPENSE_CATEGORIES = [
  'Business Meals',
  'Office Supplies',
  'Travel',
  'Professional Services',
  'Education & Training',
  'Charitable Donations',
  'Medical Expenses',
  'Home Office',
  'Vehicle Expenses',
  'Insurance',
  'Other'
]

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
    type: 'business'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleValueEstimated = (amount, description) => {
    setFormData({
      ...formData,
      amount: amount.toFixed(2),
      description: description
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.description || !formData.amount || !formData.category) {
      alert('Please fill in all required fields')
      return
    }

    onAddExpense({
      ...formData,
      amount: parseFloat(formData.amount)
    })

    setFormData({
      description: '',
      amount: '',
      category: '',
      type: 'business'
    })
  }

  return (
    <div>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter expense description"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount *</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
            step="0.01"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {EXPENSE_CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="type">Expense Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="business">Business</option>
            <option value="personal">Personal/Itemized</option>
          </select>
        </div>

        <ValuationHelper onValueEstimated={handleValueEstimated} />

        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  )
}

export default ExpenseForm