
export async function getPost () {
    const res = await fetch(`http://localhost:8000/post`);
    const data = await res.json();
    return data;
}

// THIS IS AN INCOMPLETE PROJECT, I LEAVE THIS PROJECT FOR LATER. WHEN I GAIN MASTERY IN BACKEND WITH NODE JS , I WILL COMPLETE THIS PROJECT. THIS IS TOO MUCH JUST FETCHING FROM A FAKE API AND THEN NOT ABLE TO PERFORM CRUD AS IT SHOUD BE DONE IN A NICER WAY.