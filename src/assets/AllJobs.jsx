import React, { useEffect, useState } from 'react'
import { getJobOverview } from '../services/getJobData'
import SingleJobs from './SingleJobs';
import GoBackBtn from './GoBackBtn';
import Loader from './Loader';
import { useSort } from './useSort';

function AllJobs() {
  const [jobData , setJobData] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [newJobData, setNewJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {handleSortByDate, handleSortByJobName, sortedList} = useSort(newJobData , setNewJobData)
    //fetch all jobs from an api
    // now api is created, next fetch the data
    useEffect(function () {
      async function fetchJobData () {
        try {
          setIsLoading(true);
          const data = await getJobOverview();
          //  console.log(data);
          setJobData(data)
          setIsLoading(false)
        }
        catch (error) {
          setIsLoading(false)
          console.log(error);
        }
      }
      fetchJobData()
    }, [])
    useEffect(function () {
      function pagination () {
        // const newData = jobData.slice(start, end)
        const newData = jobData.slice(start, end)
        // console.log(newData);
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
      <div className='flex items-center text-[1.2rem] gap-8 m-4'>
        <span className='text-yellow-600'>Filter/Sort</span>
        <button className='filter-btn'
        onClick={handleSortByDate}
        >By Date</button>
        <button className='filter-btn' onClick={handleSortByJobName}>By Job Name</button>
      </div>
      <div>
        {
          isLoading ? (
            <Loader dataName={'Job'} />
          ) : (

            newJobData.map((x) => (
              <SingleJobs jobs ={x} key={x.id} />
            ))
          )
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