// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-details">
      <div className="money-card balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-img"
        />
        <div>
          <p className="money-label">Your Balance</p>
          <p data-testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="money-card income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-img"
        />
        <div>
          <p className="money-label">Your Income</p>
          <p data-testid="incomeAmount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="money-card expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-img"
        />
        <div>
          <p className="money-label">Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
