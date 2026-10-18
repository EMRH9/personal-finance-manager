import { expect, test } from '@jest/globals'
import { FinanceManager } from '../src/services/FinanceManager.js'
import Transaction from '../src/models/Transaction.js'

const transactions = [
  new Transaction('Monthly salary', 3000, 'income', 'Salary'),
  new Transaction('Grocery shopping', 150, 'expense', 'Food'),
  new Transaction('Freelance work', 500, 'income', 'Freelance'),
  new Transaction('Internet bill', 50, 'expense', 'Utilities'),
  new Transaction('Bus ticket', 10, 'expense', 'Transport'),
  new Transaction('breakfast', 300, 'expense', 'Food')
]

const financeManager = new FinanceManager(transactions)

test('calculates total income', () => {
  expect(financeManager.getTotalIncome()).toBe(3500)
})

test('calculates total expense', () => {
  expect(financeManager.getTotalExpenses()).toBe(510)
})

test('calculates current balance', () => {
  expect(financeManager.calculateCurrentBalance()).toBe(2990)
})

test('counts transactions', () => {
  expect(financeManager.countTransactions()).toBe(6)
})

test('calculates spending by category', () => {
  expect(financeManager.calculateSpendingByCategory('Food')).toBe(450)
})
