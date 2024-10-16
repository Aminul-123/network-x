import React from 'react'
import { useDispatch } from 'react-redux'
import { showSavedItem } from '../slices/postSlice';

function GoBackBtn() {
    const dispatch = useDispatch();

    function handleSaved () {
        dispatch(showSavedItem());
    }

  return (
    <button className='p-2 bg-teal-500 rounded-lg border-none outline-none text-white font-bold'
    onClick={handleSaved}
    >
     <span className='text-[23px]'>&larr;</span>   Go back
    </button>
  )
}

export default GoBackBtn