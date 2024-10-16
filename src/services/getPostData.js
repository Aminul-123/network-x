
const BASE_URL = 'http://localhost:8000';
export async function getPost () {
    try {

        const res = await fetch(`${BASE_URL}/post`);
        if (!res.ok) throw new Error('data not found');
        const data = await res.json();
        if (!data.length) throw new Error ('post data not found');
        return data;
    }
    catch (error) {
        console.log('There is an error fetching postdata', error);
    }
}
export async function createPost (newPost) {
    //here new post is an object containing all the fields required in post api.
    try {
        const res = await fetch (`${BASE_URL}/post`, {
            method : 'POST',
            body : JSON.stringify(newPost),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        const data =  await res.json()
        console.log(data)
    }
    catch(error) {
        console.log(error)
    }
}
export async function deletePost (id) {
    try {
      const res = await fetch(`${BASE_URL}/post/${id}`, {
            method : 'DELETE'
        })
    if (!res.ok) throw new Error ('There is an error in deleting post');
    }
    catch (err) {
        console.log(err)
    }
}

// THIS IS AN INCOMPLETE PROJECT, I LEAVE THIS PROJECT FOR LATER. WHEN I GAIN MASTERY IN BACKEND WITH NODE JS , I WILL COMPLETE THIS PROJECT. THIS IS TOO MUCH JUST FETCHING FROM A FAKE API AND THEN NOT ABLE TO PERFORM CRUD AS IT SHOUD BE DONE IN A NICER WAY.