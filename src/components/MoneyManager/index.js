import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {optionId: 'INCOME', displayText: 'Income'},
  {optionId: 'EXPENSES', displayText: 'Expenses'},
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state
    const parsedAmount = parseInt(amountInput, 10)

    if (
      titleInput.trim() === '' ||
      amountInput.trim() === '' ||
      Number.isNaN(parsedAmount) ||
      parsedAmount <= 0
    ) {
      return
    }

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parsedAmount,
      type: typeInput,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteTransaction = id => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        item => item.id !== id,
      ),
    }))
  }

  render() {
    const {titleInput, amountInput, typeInput, transactionsList} = this.state

    const incomeAmount = transactionsList
      .filter(each => each.type === 'INCOME')
      .reduce((acc, cur) => acc + parseInt(cur.amount, 10), 0)

    const expensesAmount = transactionsList
      .filter(each => each.type === 'EXPENSES')
      .reduce((acc, cur) => acc + parseInt(cur.amount, 10), 0)

    const balanceAmount = incomeAmount - expensesAmount

    return (
      <div className="bg-container">
        <div className="money-mania">
          <div className="header-container">
            <h1 className="hi-user">Hi, Jyotsna</h1>
            <p className="welcome-text">
              Welcome back to your{' '}
              <span className="highlight">Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />

          <div className="transaction-section">
            <form className="form" onSubmit={this.onAddTransaction}>
              <h1 className="form-title">Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                type="text"
                placeholder="TITLE"
                value={titleInput}
                onChange={e => this.setState({titleInput: e.target.value})}
                className="input"
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                id="amount"
                type="text"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={e => this.setState({amountInput: e.target.value})}
                className="input"
              />
              <label htmlFor="type">Type</label>
              <select
                id="type"
                value={typeInput}
                onChange={e => this.setState({typeInput: e.target.value})}
                className="input"
              >
                {transactionTypeOptions.map(option => (
                  <option key={option.optionId} value={option.optionId}>
                    {option.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>

            <div className="history">
              <h1 className="history-title">History</h1>
              <div className="transaction-table">
                <div className="table-header">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                  <p>Action</p>
                </div>
                <ul className="transaction-ul">
                  {transactionsList.map(item => (
                    <TransactionItem
                      key={item.id}
                      details={item}
                      onDeleteTransaction={this.onDeleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
