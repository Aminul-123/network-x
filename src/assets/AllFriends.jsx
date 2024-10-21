import React, { useEffect, useState } from 'react'
import { getAllFriends } from '../services/getFriendsData';
import Friend from './Friend';
import GoBackBtn from './GoBackBtn';
import { useAllFriends } from './useAllFriends';

function AllFriends() {
   const friend = useAllFriends();


  return (
    <section className='detail-page'>
        <div className='flex gap-4 items-center'>
        <GoBackBtn />
        <p className='font-semibold'>NETWORK</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-3 h-[100%] 
        w-[100%]  '>

        {
            friend.map((friend) => (             
                    <Friend list = {friend} key={friend.id} />
                ))
        }
        </div>
    </section>
  )
}

export default AllFriends