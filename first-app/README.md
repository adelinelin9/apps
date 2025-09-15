# Dductly - Tax Deduction Tracking App

A modern, user-friendly tax deduction tracking application built with React and Vite. Dductly helps users track their tax-deductible expenses throughout the year and provides fair market value estimates for common deductible items.

## Features

### Core Functionality
- **Expense Tracking**: Add, view, and manage tax-deductible expenses
- **Smart Categorization**: Pre-defined categories for business and personal deductions
- **Local Storage**: Automatic saving of all data locally in your browser
- **Export Capability**: Export expense data to CSV for tax preparation

### Valuation Tools
- **Fair Market Value Estimator**: Built-in database of common donated items with condition-based pricing
- **Mileage Calculator**: Automatic calculation of business, medical, and charitable mileage deductions
- **Tax Savings Estimator**: Estimate potential tax savings based on current tax brackets

### User Interface
- **Mobile-First Design**: Responsive design that works on all devices
- **Intuitive Navigation**: Simple tab-based interface
- **Professional Styling**: Clean, modern design with professional color scheme

## Getting Started

### Installation
```bash
npm install --legacy-peer-deps
npm run dev
```

### Usage
1. **Add Expenses**: Use the "Add Expense" tab to record deductible expenses
2. **Use Valuation Tools**: Click on valuation helpers to estimate values for donated items or mileage
3. **Review Expenses**: View all tracked expenses in the "View Expenses" tab
4. **Generate Summary**: Check the "Tax Summary" tab for totals and export options

## Technical Implementation

### Architecture
- **Frontend**: React 19 with functional components and hooks
- **Build Tool**: Vite for fast development and building
- **State Management**: React useState with localStorage persistence
- **Styling**: Custom CSS with modern design patterns

### Key Components
- `ExpenseForm`: Form for adding new expenses with validation
- `ExpenseList`: Display and management of tracked expenses
- `TaxSummary`: Summary statistics and export functionality
- `ValuationHelper`: Interactive tools for estimating item values

### Valuation Engine
The app includes a comprehensive valuation engine with:
- Fair market values for clothing, household items, and electronics
- Current IRS mileage rates for business, medical, and charitable use
- Condition-based pricing (good, fair, poor)
- Tax bracket estimation tools

## Project Structure
```
src/
├── components/
│   ├── ExpenseForm.jsx
│   ├── ExpenseList.jsx
│   ├── TaxSummary.jsx
│   └── ValuationHelper.jsx
├── utils/
│   └── valuationEngine.js
├── App.jsx
├── App.css
└── main.jsx
```

## Future Enhancements
- Receipt photo capture and OCR
- Cloud synchronization
- Tax software integrations
- Advanced reporting features
- Multi-year tracking
- Audit protection tools

## Development

This project was bootstrapped with Vite and React. The application follows modern React patterns and includes:
- Functional components with hooks
- Local state management
- Responsive CSS design
- Modular component architecture

To contribute or extend functionality, focus on the modular component structure and the extensible valuation engine.
