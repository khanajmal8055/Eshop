import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import ProductCard from '../components/ProductCard';

const FeatureSection = () => {
  const {product} = useContext(ProductDataContext)
  console.log(product);
  
  return (
    /* Updated Tailwind classes for responsive layout */
    <section className='mx-auto max-w-6xl px-4 sm:px-6 py-12'>
      <div className='flex justify-center items-center mb-8'>
        <h1 className='text-3xl font-serif'>Featured Products</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {product.map((prod,idx)=>(
          
         <ProductCard key={idx} prod={prod}/>
        ))}
        
      </div>
    </section>
  )
}

export default FeatureSection