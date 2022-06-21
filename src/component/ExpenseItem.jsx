import React, { useContext } from 'react'
import { Badge } from 'react-bootstrap'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../context/AppContext'
const ExpenseItem = ({id,name,cost}) => {

  const {dispatch} = useContext(AppContext);

  const handleDeleteExpense =()=>{
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    })
  }
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
     <h5>
      {name}
     </h5>
      <div>
        <Badge pill style={{marginRight: '15px'}} className="">
          £{cost}
         </Badge>
          <TiDelete onClick={handleDeleteExpense} style={{marginRight: '10px'}} size='1.5em'/>
      </div>
    </li>
  )
}

export default ExpenseItem