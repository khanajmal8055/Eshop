import React, { useContext, useEffect, useState } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import axios from '../api/axiosInstance.js'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'

const CollectionPage = () => {
    const {product} = useContext(ProductDataContext)

    const [category, setCategory] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        async function fetchCategory(){
            try {
                const response = await axios.get('/category/get-category')
                // console.log(response.data.data);
                setCategory(response.data.data)
            } 
            catch (error) {
                console.log(error ,"error while fetching data of category")
                alert("Category not fetched")
            }
            
            
        }
        fetchCategory()
    },[])

    const handleClick = (id) => {
        navigate(`/category/${id}`)
    }

    // const category = [
    //     {name : "Formal wear"},
    //     {name : "Ethnic wear"},
    //     {name : "Casual wear"},
    //     {name : "Party wear"},
    // ]
  return (
    <section className='w-full'>
        <div className='flex justify-center items-center py-4 bg-gray-400'>
            {category.map((cat ,idx) => (
                <div key={idx} className='flex justify-center gap-5 px-3 py-3 cursor-pointer'>
                    <h1 className='text-lg no-underline hover:underline' onClick={() => handleClick(cat._id)}>{cat.name}</h1>
                </div>
            ))}
            
            
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>
            {product.map((prod ,idx) => (
                 <ProductCard key={idx} prod={prod}/>
            ))}
            
           
             
        </div>
    </section>


  )
}

export default CollectionPage