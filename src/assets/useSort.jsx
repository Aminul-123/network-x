import { useEffect, useState } from "react";

export function useSort (newJobData, setNewJobData) {
    const [sortByName , setSortByName ] = useState([]);
    const [sortByDate , setSortByDate ] = useState([]);
    
    function handleSortByDate () {
      const sortedJob = newJobData.sort(sortUsingDate);
      setSortByDate(sortedJob);
    }
    // useEffect(function () {})
    // This works fine , but the page does not get re render.
    function handleSortByJobName () {
      const sortedJob =  newJobData.sort(compareFn);
    //  console.log(sortedJob);
     // setNewJobData(sortedJob)
      setSortByName(sortedJob)
    }
    function compareFn (a, b) {
      if (a.jobName < b.jobName) {
        return -1;
      }
      if (a.jobName > b.jobName) {
        return 1;
      }
      return 0;
    }
   function sortUsingDate (a, b) {
    if (a.date_posted < b.date_posted) {
      return - 1;
    }
    if (a.date_posted > b.date_posted) {
      return 1;
    }
    return 0;
   }

   useEffect(function () {
    function sortType () {

     !sortByName.length  ? newJobData : !sortByName ? sortByDate : sortByName ;
      //  console.log(sortedList);
    }
    sortType()
   }, [sortByName, sortByDate])
   

    return {
        handleSortByDate, handleSortByJobName 
    }
}