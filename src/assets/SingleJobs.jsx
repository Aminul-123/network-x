import React from 'react'
import { Link } from 'react-router-dom'

function SingleJobs({jobs}) {
    // id ,jobName, date_posted, skills_required
    const {id, jobName, date_posted, skills_required} = jobs
  return (
    <Link  to={`/jobs/job-detail/${id}`} >
    <div className='   rounded-lg border m-[15px] border-gray-600 p-2 cursor-pointer
    hover:bg-blue-400 hover:border-white hover:text-white transition-all
    '>
        <div className='flex gap-4 items-center'>
            <span className='text-[1.5rem] hover:underline'>{jobName}</span>
            <span>{date_posted}</span>
        </div>
        <div className='flex  gap-1 lg:flex-row lg:gap-4 items-center'>
            <span className='text-[17px] font-semibold lg:font-normal lg:text-[1.2rem] '>Skills Required</span>
            {skills_required.map((skill, idx) => (
                <span key={idx} className='text-[13px] lg:text-[16px]'>{skill}</span>
            ))}
        </div>
        </div>
    </Link>
  )
}

export default SingleJobs