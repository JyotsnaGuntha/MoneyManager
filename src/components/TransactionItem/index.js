import './index.css'

const TransactionItem = props => {
  const {details, onDeleteTransaction} = props
  const {id, title, amount, type} = details

  return (
    <li className="transaction-row">
      <p className="table-cell">{title}</p>
      <p className="table-cell">Rs {amount}</p>
      <p className="table-cell">{type === 'INCOME' ? 'Income' : 'Expenses'}</p>
      <div className="table-cell">
        <button
          type="button"
          data-testid="delete"
          className="delete-btn"
          onClick={() => onDeleteTransaction(id)}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
