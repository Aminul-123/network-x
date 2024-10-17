import React from 'react'
import { useNavigate } from 'react-router-dom'

function GoBackBtn() {
  const navigate = useNavigate();
  //  const dispatch = useDispatch();

    // function handleSaved () {
    //     dispatch(showSavedItem());
    // }

  return (
    <button className='p-2 bg-teal-500 rounded-lg border-none outline-none text-white font-bold'
   onClick={() => navigate(-1)}
    >
     <span className='text-[23px]'>&larr;</span>   Go back
    </button>
  )
}

export default GoBackBtn