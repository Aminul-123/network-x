import React from 'react'
import { useParams } from 'react-router-dom'

function FriendDetail() {
    const {id} = useParams();
  return (
    <div className='detail-page'>FriendDetail {id} </div>
  )
}

export default FriendDetail