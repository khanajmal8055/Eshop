import React from 'react'

const CategoryCard = ({name , src}) => {
  return (
    <>
        {/* Category Component */}
      {/* Updated Tailwind classes to fit grid layout responsively */}
      <div className='py-4 space-y-3 text-center'>
        {/* Category Card inner components */}
        <div className='w-full'>
          <div className=''>
            <img className='w-full h-36 sm:h-44 object-cover rounded-xl shadow-sm' src={src}/>
          </div>
          <div className=''>
            <h1 className='text-lg sm:text-xl font-semibold'>{name}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryCard