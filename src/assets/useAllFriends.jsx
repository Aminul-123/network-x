import { useEffect, useState } from "react";
import { getAllFriends } from "../services/getFriendsData";

export function useAllFriends () {
    const [friend, setFriend] = useState([]);

    useEffect(function () {
        async function fetchFriendList () {
            const list = await getAllFriends();
            setFriend(list);
           // console.log(list)
        }
        //infinite render has been prevented using friend.length
        fetchFriendList();
    }, [friend.length])

    return friend
}