export class FinanceManager {
  constructor (transactions) {
    this.transactions = transactions
  }

  getTotalIncome () {
    let totalIncome = 0

    this.transactions.forEach(element => {
      if (element.type === 'income') {
        totalIncome += element.amount
      }
    })
    return totalIncome
  }

  getTotalExpenses () {
    let totalExpense = 0

    this.transactions.forEach(element => {
      if (element.type === 'expense') {
        totalExpense += element.amount
      }
    })
    return totalExpense
  }

  calculateCurrentBalance () {
    return this.getTotalIncome() - this.getTotalExpenses()
  }

  countTransactions () {
    return this.transactions.length
  }

  calculateSpendingByCategory (category) {
    // some method is like filter. it iterates over an array and returns true if
    // a value matches
    const hasCategory = this.transactions.some(t => t.category === category)

    if (!hasCategory) {
      throw new Error('Category not found!')
    }

    // returns all the categories that meet the condition
    const categories = this.transactions.filter(a => a.category === category)

    let total = 0
    categories.forEach(a => {
      total += a.amount
    })

    return total
  }
}
