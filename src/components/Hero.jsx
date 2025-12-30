import React from 'react'

const Hero = () => {
  return (
     /* Updated Tailwind classes for mobile-first responsive layout */
     <section className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        <div className='space-y-6 text-center lg:text-left'>
         <h1 className='text-3xl sm:text-4xl font-extrabold leading-tight'> Wear the Trend. Own the Moment</h1>
         <div className='max-w-xl mx-auto lg:mx-0'>
          <p className='text-base sm:text-lg font-medium text-gray-500'>Discover styles designed for comfort, confidence, and everyday life.</p>
         </div>
          <div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start'>
            <button className='w-full sm:w-auto bg-black cursor-pointer active:scale-95 text-white px-6 py-3 rounded-md text-sm sm:text-base font-semibold'>Shop Now</button>
            <button className='w-full sm:w-auto border border-gray-300 px-6 py-3 rounded-md text-sm sm:text-base font-semibold text-gray-800 active:scale-95'>View Lookbook</button>
          </div>
        </div>
        
        <div className='flex justify-center lg:justify-end'>
          <img className='w-full max-w-sm sm:max-w-md rounded-2xl object-cover' src="https://plus.unsplash.com/premium_photo-1680859126205-1c593bb4f9e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        
      </section>
  )
}

export default Hero