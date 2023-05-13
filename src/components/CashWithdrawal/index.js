// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  changeBalance = event => {
    const {balance} = this.state

    this.setState(prevState => ({
      balance: prevState.balance - event.target.value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="inner">
          <div className="first">
            <h1 style={{color: `#d4d2db`}}>sarah Williums</h1>
          </div>
          <div className="second">
            <div>
              <p style={{color: `#382f5a`}}>Your Balance</p>
            </div>
            <div>
              <p style={{color: `#d4d2db`}}>{balance}</p>
              <p style={{color: `#382f5a`}}>in Rupees</p>
            </div>
          </div>
          <div className="third">
            <p style={{color: `#d4d2db`}}>Withdraw</p>
            <p style={{color: `#382f5a`}}>CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="fourth">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                details={eachItem}
                changeBalance={this.changeBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
