import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GoBackBtn from './GoBackBtn';
import { BASE_URL } from '../services/getPostData';

function JobDetail() {
  const [singleJobDetail, setSingleJobDetail] = useState({})

  const arr = [1, 2, 3,4, 8, 37, 9]
    // single job detail from an api by selecting id
    const {id} = useParams();
    useEffect(function () {
      async function fetchJobDetail() {
        const res = await fetch(`${BASE_URL}/jobs/${id}`);
        const data = await res.json();
        console.log(data);
        setSingleJobDetail(data)

      }
      fetchJobDetail()
    }, [id])
    const skills  = singleJobDetail?.skills_required;
   // console.log(skills)

  return (
    <div className='detail-page bg-slate-200 rounded-lg p-4 flex flex-col items-center '>
      <GoBackBtn />
      <div>
        <div className='flex items-center gap-8'>
          <span className='text-[2rem]'>{singleJobDetail?.jobName} </span>
          <span className='italic'>{singleJobDetail?.date_posted} </span>
        </div>
        <div>
          <p className='text-[1.5rem]'>Skills Required</p>
          <div className='flex flex-col'>
            {
              skills?.map((item) => (
                <span key={item} className=' translate-x-8'>
                  {item}
                </span>
              ))
            }
          </div>
        </div>
        <div className='lg:w-[60%]'>
          <p className='text-[1.5rem]'>Short Description About the Job</p>
          <p>
            {singleJobDetail?.short_description}
          </p>
        </div>
        <div className='lg:w-[60%] '>
          <p className='text-[1.5rem]'>
            Full Details
          </p>
            <p>
              {singleJobDetail?.full_details}
            </p>
        </div>
          
      </div>
      <button className='italic p-2 border-none outline-none rounded-full bg-teal-950 w-24 text-white'>Apply</button>
      JobDetail - {id}

      
    </div>
  )
}

export default JobDetail