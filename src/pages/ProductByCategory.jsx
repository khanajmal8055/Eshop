import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axiosInstance'
import ProductCard from '../components/ProductCard'

const ProductByCategory = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(()=>{
        async function fetchProductByCategoryId() {
            try {
                const response = await axios.get(`/category/${id}/products`)
                // console.log(response.data.data);
                setProduct(response.data.data)
                
            } 
            catch (error) {
                console.log("error while fetching product by category" , error)    
            }
        }
        fetchProductByCategoryId()
    },[id])
  return (
    
    <div>
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur py-3">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button className="text-sm text-gray-600 hover:text-gray-900">← Back</button>
          <h1 className="text-xl sm:text-2xl font-serif text-gray-900">Product By Category</h1>
          <div className="w-14"></div>
        </nav>
      </header>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-2'>
            
            {product.map((prod)=>(
                <ProductCard prod={prod}/>
            ))}
         </div>
    </div>
  )
}

export default ProductByCategory