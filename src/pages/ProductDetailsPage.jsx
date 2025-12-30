import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../api/axiosInstance'

const ProductDetailsPage = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [selectedImages, setSelectedImages] = useState(0)
    const [images, setImages] = useState([])
    const navigate = useNavigate()    

    useEffect(() => {
        async function productDetails() {
           try {
            const response = await axios.get(`/products/single-product/${id}`)
            // console.log(response.data.data);
            setProduct(response.data.data)
            setImages(response.data.data.images)

            
           } 
           catch (error) {
            console.log(error , "Error while fecthing specific product data");
            
           } 
        }

        productDetails()
    },[])

    
    const handleBack = ()=>{
        navigate('/')
    }

    const  features = [
      "100% Organic Cotton",
      "Machine Washable",
      "Pre-shrunk Fabric",
      "Breathable Material",
      "Sustainable Production",
    ]

    images.map(() => {
        console.log("H");
        
    })
    
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
            <svg
                key={i}
                className={`w-4 h-4 ${i < fullStars ? "text-yellow-400 fill-current" : i === fullStars && hasHalfStar ? "text-yellow-400 fill-current opacity-50" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            ))}
        </div>
        );
    };
    
    
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur  py-5">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <button onClick={handleBack} className="text-sm text-gray-600 hover:text-gray-900">← Back</button>
          <h1 className="text-xl sm:text-2xl font-serif text-gray-900">Product Details</h1>
          <div className="w-20"></div>
        </nav>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-xl border border-gray-200 overflow-hidden">
              <img
                src={images[selectedImages]?.url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImages(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden ${
                    selectedImages === idx ? "border-gray-900" : "border-gray-200"
                  }`}
                >
                  <img src={img?.url} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
            <div className="space-y-6">
                <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{product.brand}</p>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{product.name}</h1>
                <div className="flex items-center gap-3">
                    {renderStars(product.ratings)}
                    <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
                <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                
                {/* <span className="px-2 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded">
                  {}% OFF
                </span> */}
              </div>
              <p className="text-base text-gray-600">{}</p>
            </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg text-sm font-semibold active:scale-95 hover:bg-gray-800">
                Add to Cart
              </button>
              <button className="flex-1 border-2 border-gray-900 text-gray-900 py-3 px-6 rounded-lg text-sm font-semibold active:scale-95 hover:bg-gray-50">
                Buy Now
              </button>
            </div>
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Free Shipping</p>
                  <p className="text-xs text-gray-600">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">30-Day Returns</p>
                  <p className="text-xs text-gray-600">Hassle-free return policy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Fast Delivery</p>
                  <p className="text-xs text-gray-600">Usually ships within 2-3 business days</p>
                </div>
              </div>
            </div>
        </div>
        <div className="mt-12 space-y-8">
          <section className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
            <p className="text-base text-gray-600 leading-relaxed">{product.description}</p>
          </section>

          <section className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-900 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        </div>
      </main>
      </div>
    </>
  )
}

export default ProductDetailsPage