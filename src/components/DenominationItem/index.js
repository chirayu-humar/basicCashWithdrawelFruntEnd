// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, changeBalance} = props
  const {value, id} = details

  return (
    <li className="">
      <button
        id={id}
        onClick={changeBalance}
        type="button"
        className="outer"
        value={value}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
