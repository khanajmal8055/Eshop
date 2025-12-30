import React, { useContext, useEffect, useState } from 'react'
import axios from '../api/axiosInstance'
import { ProductDataContext } from '../context/ProductContext'
import { ShoppingCart } from 'lucide-react'
import { CartDataContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({prod}) => {
    // const {product} = useContext(ProductDataContext)

    const {addToCart} = useContext(CartDataContext)
    
    const [error, setError] = useState(true)
    const [count, setCount] = useState(0)

    const navigate = useNavigate()


    const handleNavigate = (id) => {
        navigate(`/product/${id}`)
    }
    
    
    

    
    
    

    
  return (
   <>
        {/* Updated Tailwind classes for mobile-friendly card */}
        {/* <div className='w-full max-w-xs sm:max-w-sm bg-gray-100 rounded-2xl p-4 space-y-3'>
            <div className='flex justify-center'>
                <img className='w-full h-48 object-cover rounded-xl' src='https://images.unsplash.com/photo-1639423188880-97607fbaa62e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" srcset="" />
            </div>
            <div className='space-y-1'>
                <h2 className='text-lg font-semibold text-gray-800 line-clamp-2'>dsdhgd</h2>
                <h3 className='text-base font-medium text-gray-700'>Price | Rs dgsdgg</h3>
            </div>
            <div className='bg-cyan-500 hover:bg-cyan-600 flex justify-center items-center rounded-xl py-3 px-2 gap-2 active:scale-95 cursor-pointer text-white text-sm font-semibold'>
                <span> <ShoppingCart className='w-4 h-4'/></span>
                <button className='cursor-pointer'>  Add To Cart</button>
            </div>
        </div> */}

        <div className='rounded-2xl border border-gray-200 p-4 shadow-sm space-y-4 bg-white'>
            <div onClick={() =>{
                handleNavigate(prod._id)
            } }>
                <div className='py-2'>
              <img className='w-full h-52 object-cover rounded-xl' src={prod.images[0].url} />
            </div>
            <div className='space-y-1 px-1'>
              <h3 className='text-lg font-semibold text-gray-800'>{prod.name}</h3>
              <p className='text-sm text-gray-600'>{prod.brand}</p>
            </div>
            </div>
            
            <div className='flex items-center justify-between px-1'>
              <span className='text-xl font-bold'>${prod.price}</span>
              <button className='bg-black text-white px-4 py-2 rounded-md text-sm font-semibold active:scale-95'
                onClick={()=> {
                    addToCart(prod._id)
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          
   </>
    
  )
}

export default ProductCard