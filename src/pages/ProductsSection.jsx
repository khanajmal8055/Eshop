import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductDataContext } from '../context/ProductContext'

const ProductsSection = () => {
    const [product] = useContext(ProductDataContext)
    console.log(product);
    
  return (
    <>
        <section className='w-full   px-6'>
            <div className='flex justify-center items-center py-3 '>
                <h2 className='text-2xl font-bold'>Our Products</h2>
            </div>
            <div className='flex flex-wrap  items-center gap-12 py-16 '>
                {product.map((prod, idx)=> (
                    <ProductCard key={idx} prod={prod}/>
                ))}
                
            </div>
            
        </section>
    </>

  )
}

export default ProductsSection