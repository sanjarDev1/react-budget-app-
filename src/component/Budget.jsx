import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';

const Budget = () => {
  const {budget,dispatch}= useContext(AppContext)
	const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
		setIsEditing(true);
	};

  const handleSaveClick =val=>{
    dispatch({
      type: 'SET_BUDGET',
      payload: val,
    })
		setIsEditing(false);

  }

  
  return (
    <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
        {isEditing ?
          <EditBudget handleSaveClick={handleSaveClick} budget={budget}/>
          :
          <ViewBudget handleEditClick={handleEditClick} budget={budget}/>
        }

    </div>
  )
}

export default Budget