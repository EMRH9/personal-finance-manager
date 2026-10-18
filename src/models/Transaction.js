class Transaction {
  static nextId = 0
  constructor (description, amount, type, category) {
    if (amount < 0 || typeof amount !== 'number') {
      throw new Error('Amount must be a non-negative number')
    }

    ;(this.id = `T${String(Transaction.nextId++).padStart(3, '0')}`),
      (this.description = description),
      (this.amount = amount),
      (this.type = type),
      (this.category = category),
      (this.date = new Date())
  }
}

export default Transaction