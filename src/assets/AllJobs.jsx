import React, { useEffect, useState } from 'react'
import { getJobOverview } from '../services/getJobData'
import SingleJobs from './SingleJobs';
import GoBackBtn from './GoBackBtn';

function AllJobs() {
  const [jobData , setJobData] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [newJobData, setNewJobData] = useState([]);
    //fetch all jobs from an api
    // now api is created, next fetch the data
    useEffect(function () {
      async function fetchJobData () {
        const data = await getJobOverview();
      //  console.log(data);
        setJobData(data)
      }
      fetchJobData()
    }, [])
    useEffect(function () {
      function pagination () {
        const newData = jobData.slice(start, end)
        console.log(newData);
        setNewJobData(newData);
      }
      pagination()
    }, [jobData, start, end])

    function handlePrev () {
      setStart((s) => s - 10);
      setEnd((e) => e - 10);

    }
    function handleNext () {
      setStart((s) => s + 10);
      setEnd((e) => e + 10)
    }
  return (
    <div className='detail-page bg-stone-200'>
      <GoBackBtn />
      <p className='text-[1.4rem] m-4'>All Available Jobs</p>
      <div className='flex items-center text-[1.3rem] gap-8 m-4'>
        <span className='italic'>Filter</span>
        <button className='filter-btn'>By Date</button>
        <button className='filter-btn'>By skill</button>
      </div>
      <div>
        {
            newJobData.map((x) => (
              <SingleJobs jobs ={x} key={x.id} />
            ))
        }
      </div>
      <div className='flex justify-center gap-8 px-8 m-4 '>
        <button onClick={handlePrev} 
         className='page-btn'
        disabled={start === 0}
        >
          Previous
        </button>
        <button onClick={handleNext}
        className={`page-btn `} 
        disabled={end === jobData.length + 1}
        >Next</button>
      </div>
    </div>
  )
}

export default AllJobs