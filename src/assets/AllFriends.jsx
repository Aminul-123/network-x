import React, { useEffect, useState } from 'react'
import { getAllFriends } from '../services/getFriendsData';
import Friend from './Friend';
import GoBackBtn from './GoBackBtn';

function AllFriends() {
    const [friend, setFriend] = useState([]);

    useEffect(function () {
        async function fetchFriendList () {
            const list = await getAllFriends();
            setFriend(list);
            console.log(list)
        }
        //infinite render has been prevented using friend.length
        fetchFriendList();
    }, [friend.length])


  return (
    <section className='detail-page'>
        <div className='flex gap-4 items-center'>
        <GoBackBtn />
        <p className='font-semibold'>NETWORK</p>
        </div>
        <div className='grid grid-cols-4 gap-3 h-[100%] 
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