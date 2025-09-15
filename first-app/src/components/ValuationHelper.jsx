import { useState } from 'react'
import { 
  estimateItemValue, 
  calculateMileageDeduction, 
  getAvailableCategories, 
  getAvailableItems 
} from '../utils/valuationEngine'

function ValuationHelper({ onValueEstimated }) {
  const [valuationType, setValuationType] = useState('')
  const [itemCategory, setItemCategory] = useState('')
  const [selectedItem, setSelectedItem] = useState('')
  const [condition, setCondition] = useState('fair')
  const [mileage, setMileage] = useState('')
  const [mileagePurpose, setMileagePurpose] = useState('business')

  const handleItemValuation = () => {
    if (!itemCategory || !selectedItem) return
    
    const value = estimateItemValue(itemCategory, selectedItem, condition)
    if (value) {
      onValueEstimated(value, `${selectedItem} (${condition} condition)`)
    }
  }

  const handleMileageValuation = () => {
    if (!mileage) return
    
    const value = calculateMileageDeduction(parseFloat(mileage), mileagePurpose)
    if (value) {
      onValueEstimated(value, `${mileage} miles - ${mileagePurpose} use`)
    }
  }

  if (!valuationType) {
    return (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '6px' }}>
        <h4>Need help estimating value?</h4>
        <p style={{ fontSize: '0.9rem', color: '#6c757d', marginBottom: '1rem' }}>
          Use our valuation tools to get fair market value estimates
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            type="button"
            className="btn" 
            style={{ background: '#e9ecef', color: '#495057' }}
            onClick={() => setValuationType('item')}
          >
            Donated Items
          </button>
          <button 
            type="button"
            className="btn" 
            style={{ background: '#e9ecef', color: '#495057' }}
            onClick={() => setValuationType('mileage')}
          >
            Mileage
          </button>
        </div>
      </div>
    )
  }

  if (valuationType === 'item') {
    return (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '6px' }}>
        <h4>Item Valuation</h4>
        
        <div style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
              Category
            </label>
            <select 
              value={itemCategory} 
              onChange={(e) => {
                setItemCategory(e.target.value)
                setSelectedItem('')
              }}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            >
              <option value="">Select category</option>
              {getAvailableCategories().map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {itemCategory && (
            <div>
              <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                Item
              </label>
              <select 
                value={selectedItem} 
                onChange={(e) => setSelectedItem(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
              >
                <option value="">Select item</option>
                {getAvailableItems(itemCategory).map(item => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
              Condition
            </label>
            <select 
              value={condition} 
              onChange={(e) => setCondition(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            >
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="poor">Poor</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            type="button"
            className="btn btn-primary"
            onClick={handleItemValuation}
            disabled={!itemCategory || !selectedItem}
          >
            Estimate Value
          </button>
          <button 
            type="button"
            className="btn" 
            style={{ background: '#6c757d', color: 'white' }}
            onClick={() => setValuationType('')}
          >
            Back
          </button>
        </div>
      </div>
    )
  }

  if (valuationType === 'mileage') {
    return (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '6px' }}>
        <h4>Mileage Deduction</h4>
        
        <div style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
              Miles Driven
            </label>
            <input 
              type="number"
              value={mileage} 
              onChange={(e) => setMileage(e.target.value)}
              placeholder="Enter miles"
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
              Purpose
            </label>
            <select 
              value={mileagePurpose} 
              onChange={(e) => setMileagePurpose(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            >
              <option value="business">Business ($0.67/mile)</option>
              <option value="medical">Medical ($0.21/mile)</option>
              <option value="charitable">Charitable ($0.14/mile)</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            type="button"
            className="btn btn-primary"
            onClick={handleMileageValuation}
            disabled={!mileage}
          >
            Calculate Deduction
          </button>
          <button 
            type="button"
            className="btn" 
            style={{ background: '#6c757d', color: 'white' }}
            onClick={() => setValuationType('')}
          >
            Back
          </button>
        </div>
      </div>
    )
  }

  return null
}

export default ValuationHelper