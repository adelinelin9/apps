# dductly - Tax Deduction Tracking App

**"Track giving. Save money. Stress less."**

## Mission Statement
We help people effortlessly track donations and write-offs, turning everyday giving into real tax savings — making tax season simple, secure, and stress-free.

## Overview
dductly is a modern, user-friendly tax deduction tracking application built with React and Vite. Our platform helps users track their tax-deductible expenses throughout the year and provides fair market value estimates for common deductible items, making tax preparation effortless and maximizing potential savings.

## Why dductly?

✨ **Effortless Tracking** - Simple, intuitive interface that makes expense tracking feel natural
💰 **Maximize Savings** - Built-in valuation tools help you claim every dollar you deserve
📱 **Always Available** - Works seamlessly across all devices with automatic data sync
🎯 **Tax-Ready** - Export directly to formats your tax preparer or software needs
🔒 **Secure & Private** - Your financial data stays on your device with local storage

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

### Live Demo
🚀 **[Try dductly Live](http://localhost:5173/)** (when running locally)

### Installation
```bash
cd apps/first-app
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
MSB341/
├── apps/
│   └── first-app/           # Main dductly application
│       ├── src/
│       │   ├── components/  # React components
│       │   ├── utils/       # Valuation engine
│       │   ├── App.jsx      # Main app component
│       │   └── App.css      # Styling
│       ├── package.json     # Dependencies
│       └── README.md        # Detailed technical docs
└── README.md               # This file
```

## Competitive Advantage

dductly directly competes with TurboTax's "It's Deductible" tool while offering:
- **Superior Mobile Experience**: Built mobile-first with modern React
- **Real-time Fair Market Values**: Up-to-date valuation database
- **AI-Ready Architecture**: Extensible for future ML features
- **Seamless Integration**: Easy export to all major tax software
- **User-Centric Design**: Intuitive interface requiring minimal learning

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

---

**Built with ❤️ to make tax season stress-free for everyone**