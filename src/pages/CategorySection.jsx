import React from 'react'
import CategoryCard from '../components/CategoryCard'

const CategorySection = () => {
  return (
    <>
        {/* Updated Tailwind classes for responsive grid and spacing */}
        <section className='max-w-6xl mx-auto px-4 sm:px-6 py-10'>
            <div className='flex justify-center items-center mb-8'>
                
                <h1 className='text-3xl sm:text-4xl font-serif text-center'> Explore Our Collections</h1>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8'>
            <CategoryCard name={'Casual Wear'} src={'https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzdWFsJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'}/>
            <CategoryCard name={'Formal Wear'} src={'https://images.unsplash.com/photo-1667716492187-9b0c2af7a635?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGZvcm1hbCUyMHdlYXIlMjBzaG9wfGVufDB8fDB8fHww'}/>
            <CategoryCard name={'Party Wear'} src={'https://images.unsplash.com/photo-1723016347027-39d37df73f18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBhcnR5JTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D'}/>
            <CategoryCard name={'Ethnic Wear'} src={'https://images.unsplash.com/photo-1555529669-2269763671c0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
            </div>

            <div className='flex justify-center items-center mt-10 '>
                <div className='max-w-3xl text-center'>
                    <h2 className='text-base sm:text-lg font-serif text-gray-500 leading-relaxed'>Browse through our curated categories and find styles that elevate your wardrobe with ease.</h2>
                </div>
                
            </div>
            


            

      </section>
    </>
  )
}

export default CategorySection