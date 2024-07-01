import React from 'react'

function RightSideBar() {
  return (
<>
<section className="max-h-[60%] w-[24%] p-3 hidden lg:block fixed right-4 top-24 ml-4 border border-gray-300 shadow-lg rounded-md">
    <article>
      <h1 className='font-bold text-[1.4rem] '>Linkedin News</h1>

      <div>
          <h2 className='text-[1.3rem] text-gray-600'>Top Stories</h2>

        <div className='mt-3'>
          <p className='text-[1.1rem] cursor-pointer hover:underline '><span className='font-bold'>#</span>Smaller cities go big on realty</p>
          <div className='flex gap-2'>
             <p>3h ago</p>
              <span>.</span>
              <p>2295 readers</p>
          </div>
         </div>
         <hr />

         <div className='mt-3'>
          <p className='text-[1.1rem] cursor-pointer hover:underline'> <span className='font-bold'>#</span>Insurance firms boost hiring</p>
          <div className='flex gap-2'>
             <p>2h ago</p>
              <span>.</span>
              <p>1145 readers</p>
          </div>
         </div>
         <hr />

         <div className='mt-3'>
          <p className='text-[1.1rem] cursor-pointer hover:underline'><span className='font-bold'>#</span>Tackling Indias cybersecurity cities</p>
          <div className='flex gap-2'>
             <p>4h ago</p>
              <span>.</span>
              <p>720 readers</p>
          </div>
         </div>
         <hr />

      </div>
      
    </article>
</section>
</>
  )
}

export default RightSideBar