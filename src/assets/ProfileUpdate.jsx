import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProfile } from '../slices/postSlice';

function ProfileUpdate({setShowUpdateModal}) {
    const [name, setName] = useState('')
    const [img, setImg] = useState('');
    const dispatch = useDispatch();
    function handleSubmit (e) {
        e.preventDefault();
        dispatch(updateProfile(name, img))
        setShowUpdateModal(false);
    }
  return (

    <div className=' relative right-6'>
        <form className='bg-white w-60 absolute p-2 border shadow-lg shadow-teal-950 text-[15px] '
        onSubmit={handleSubmit}
        >
            <div>
                <label htmlFor="name" >Update name</label>
                <input type="text" placeholder='name' id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='my-2' />
            </div>
            <div>
                <label htmlFor="img">Profile Image</label>
                <input type="text" id='img'
                value={img}
                placeholder='paste img link here'
                onChange={(e) => setImg(e.target.value)}
                className='my-2' />
            </div>
            <button className='text-white font-bold bg-teal-500 p-2 rounded-full border-none outline-none'>Update</button>
        </form>
    </div>
  )
}

export default ProfileUpdate