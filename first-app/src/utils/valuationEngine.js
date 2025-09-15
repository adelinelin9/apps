const FAIR_MARKET_VALUES = {
  'Clothing': {
    'Shirt': { good: 8, fair: 5, poor: 2 },
    'Pants': { good: 12, fair: 8, poor: 3 },
    'Suit': { good: 65, fair: 40, poor: 15 },
    'Dress': { good: 15, fair: 10, poor: 4 },
    'Shoes': { good: 20, fair: 12, poor: 5 },
    'Coat': { good: 30, fair: 20, poor: 8 },
    'Sweater': { good: 15, fair: 10, poor: 4 }
  },
  'Household Items': {
    'Television': { good: 150, fair: 100, poor: 40 },
    'Computer': { good: 400, fair: 250, poor: 100 },
    'Laptop': { good: 300, fair: 200, poor: 80 },
    'Furniture Set': { good: 300, fair: 200, poor: 75 },
    'Kitchen Appliances': { good: 100, fair: 65, poor: 25 },
    'Books': { good: 3, fair: 2, poor: 1 },
    'Dishes': { good: 15, fair: 10, poor: 4 }
  },
  'Electronics': {
    'Smartphone': { good: 200, fair: 120, poor: 50 },
    'Tablet': { good: 150, fair: 100, poor: 40 },
    'Camera': { good: 250, fair: 150, poor: 60 },
    'Gaming Console': { good: 200, fair: 130, poor: 50 },
    'Headphones': { good: 50, fair: 30, poor: 10 }
  }
}

const MILEAGE_RATES = {
  2024: {
    business: 0.67,
    medical: 0.21,
    charitable: 0.14
  },
  2023: {
    business: 0.655,
    medical: 0.22,
    charitable: 0.14
  }
}

export function estimateItemValue(category, item, condition = 'fair') {
  const categoryItems = FAIR_MARKET_VALUES[category]
  if (!categoryItems) return null
  
  const itemValues = categoryItems[item]
  if (!itemValues) return null
  
  return itemValues[condition] || itemValues.fair
}

export function calculateMileageDeduction(miles, purpose, year = 2024) {
  const rates = MILEAGE_RATES[year]
  if (!rates) return null
  
  const rate = rates[purpose]
  if (!rate) return null
  
  return miles * rate
}

export function getAvailableItems(category) {
  return Object.keys(FAIR_MARKET_VALUES[category] || {})
}

export function getAvailableCategories() {
  return Object.keys(FAIR_MARKET_VALUES)
}

export function estimateTaxSavings(deductionAmount, taxBracket = 0.22) {
  return deductionAmount * taxBracket
}

export function getHomeOfficeDeduction(officeSquareFeet, totalHomeSquareFeet, totalHomeExpenses) {
  const percentage = officeSquareFeet / totalHomeSquareFeet
  return totalHomeExpenses * percentage
}

export { FAIR_MARKET_VALUES, MILEAGE_RATES }