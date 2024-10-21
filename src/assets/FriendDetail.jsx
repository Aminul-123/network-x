import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'
import { useAllFriends } from './useAllFriends';

function FriendDetail() {
  const [personDetail, setPersonDetail] = useState(null);
  const [loading, setLoading] = useState(false)
  const friend = useAllFriends();
    const {id} = useParams();
  
    
    
    // experience is array of objects
    useEffect(function () {
       function getDetail () {
        try {
          setLoading(true)
          let detail =  friend.find((dataItem) =>  {
            return dataItem.id  == id
          })
          if (!detail) throw new Error ('data not found')
          
        //  console.log(detail)
          setLoading(false)
          setPersonDetail(detail);
        }
        catch (error) {
          console.log(error);
        }
      }
      getDetail();
    }, [id, friend , personDetail])
  return (
    <div className='detail-page'>
      <GoBackBtn />
      <div>
        {
          loading && <h1 className='text-[2rem]'>
            Loading....
          </h1>
        }

          <section>
            <div className='w-full flex flex-col items-center'>
              <img src={personDetail?.profileImg} alt="profile img" className='h-60 w-56 p-4' />
              <p className='text-[2rem]'>{personDetail?.name}</p>
              <span>{personDetail?.role} </span>
              <div className='w-full'>
                <p className=' text-[1.5rem]'>Experience</p>
                {personDetail?.experience.map((exp, id) => (
                  <div className='p-4 border w-full m-2 ' key={exp.position}>
                    <div className='text-[1.2rem] flex gap-2'>
                       <p>{id + 1}.</p>
                       <p>{exp.position} </p>

                    </div>
                    <span>{exp.companyName} </span>
                    <p>
                      from <span> {exp.from} </span> to <span>{exp.to} </span>
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p className='text-[1.5rem]'>Description</p>
                <p>{personDetail?.description} </p>
              </div>
            </div>
          </section>
      </div>
       </div>
  )
}

export default FriendDetail
// git push remains for tommorow