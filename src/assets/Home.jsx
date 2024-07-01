import React from 'react'
import Header from './Header'
import LeftSideBar from './LeftSideBar'
import Feed from './Feed'
import RightSideBar from './RightSideBar'

function Home() {
  return (
   <>
   <div className='bg-gray-100' >
   <Header/>
   <main className='flex flex-col lg:flex-row mt-4'>
         <LeftSideBar/>
         <Feed/>
        <RightSideBar/>
   </main>
   </div>
  
  

   </>
  )
}

export default Home