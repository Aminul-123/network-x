
import {BASE_URL} from './getPostData'
 export async function getJobOverview () {
    try {
            const res = await fetch(`${BASE_URL}/jobs`);
            if (!res.ok)
                 throw new Error ('There was a problem in fetching job data');
            const data = await res.json();
            if (!data)
                 throw new Error ('Job data does not found')
            return data;
    }
    catch (err) {
        console.log(err)
    }
}