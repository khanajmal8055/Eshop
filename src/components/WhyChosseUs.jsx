import React from 'react'

const WhyChosseUs = () => {
  return (
    <>
      {/* Updated Tailwind classes for responsive grid layout */}
      <section className='max-w-6xl mx-auto px-4 sm:px-6 py-12'>
        <div className='flex justify-center items-center mb-10'>
          <h1 className='text-2xl sm:text-3xl font-serif'>Why Choose Us</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div>
            <img className='w-full h-64 sm:h-80 object-cover rounded-2xl shadow-sm' src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGh8ZW58MHx8MHx8fDA%3D"/>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div className='p-4 rounded-xl border border-gray-200 shadow-sm space-y-2 bg-white text-center'>
              <h1 className='text-lg font-semibold text-gray-800'>Quality You can Trust</h1>
              <p className='text-sm text-gray-600 leading-relaxed'>We use premium fabrics and careful craftsmanship to ensure long-lasting comfort and durability in every piece.</p>
            </div>
            <div className='p-4 rounded-xl border border-gray-200 shadow-sm space-y-2 bg-white text-center'>
              <h1 className='text-lg font-semibold text-gray-800'>Modern & Timeless Designs</h1>
              <p className='text-sm text-gray-600 leading-relaxed'>Our styles are thoughtfully designed to stay on trend while remaining versatile for everyday wear.</p>
            </div>
            <div className='p-4 rounded-xl border border-gray-200 shadow-sm space-y-2 bg-white text-center'>
              <h1 className='text-lg font-semibold text-gray-800'>Affordable Pricing</h1>
              <p className='text-sm text-gray-600 leading-relaxed'>Get premium fashion without the premium price. We keep our prices fair without compromising on quality.</p>
            </div>
            <div className='p-4 rounded-xl border border-gray-200 shadow-sm space-y-2 bg-white text-center'>
              <h1 className='text-lg font-semibold text-gray-800'>Easy Returns</h1>
              <p className='text-sm text-gray-600 leading-relaxed'>Shop with confidence — our hassle-free return and exchange process makes it stress-free.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChosseUs