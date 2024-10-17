
import { BASE_URL } from "./getPostData"
export async function getAllFriends () {
    try {
        const res = await fetch (`${BASE_URL}/friends`);
        if (!res.ok)
             throw new Error ('There is a problem in getting the friends data');
        const data = await res.json()
        if (!data)
            throw new Error ('Data not found')
        return data;
    }
    catch (error) {
        console.log(error);
    }
}