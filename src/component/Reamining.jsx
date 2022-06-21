import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Reamining = () => {
const {expenses, budget}= useContext(AppContext);

const totalExpenses = expenses.reduce((total,item)=>{
  return ( total + item.cost)
},0)

const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'

  return (
    <div className={`alert ${alertType}`}>
      <span>Reamining: £ {budget - totalExpenses }</span>
    </div>
  )
}

export default Reamining