import React from 'react'
import Header from './Header'
import LeftSideBar from './LeftSideBar'
import Feed from './Feed'
import RightSideBar from './RightSideBar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import AllFriends from './AllFriends'

function Home() {
  const openNetwork = useSelector((state) => state?.network?.openNetwork);
  return (
   <>
   <div className='bg-gray-100' >
   <Header/>
   <main className='flex flex-col lg:flex-row mt-4'>
         <LeftSideBar/>
        
           {/* <Feed/> */}
          <Outlet />
{/*          
              <RightSideBar/> */}
          
   </main>
   </div>
  
  

   </>
  )
}

export default Home