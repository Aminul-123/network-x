import React from 'react'

function Setting() {
    //TOMMOROW WE WILL BE WORKING ON SAVE POST BTN , POST WILL BE SAVED IN REDUX STORE POST=[],
    // LATER ON WE WILL SHOW UP THESE POST WHEN IN MY ITEMS BTN IS CLICKED.
  return (

    <div className='relative right-40'>

    <div className='w-40 p-2 bg-gray-100 border border-grey-700 shadow-md shadow-gray-500 absolute '>
        <ul>

           <li className='list-style'>Save Post</li>
           <li className='list-style'>Repost</li>
           <li  className='list-style'>Delete Post</li>
        </ul>
    </div>
    </div>
  )
}

export default Setting