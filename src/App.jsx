
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import {Link, Route, Routes} from 'react-router-dom'
import ProductCard from './components/ProductCard'
import ProductsSection from './pages/ProductsSection'
import { Car, Home } from 'lucide-react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ConatctPage from './pages/ConatctPage'
import Footer from './components/Footer'
import CategorySection from './pages/CategorySection'
import FeatureSection from './pages/FeatureSection'
import PreviewEshopPage from './pages/Preview'
import LoginPage from './pages/LoginPage'
import Register from './pages/RegisterPage'
import CollectionPage from './pages/CollectionPage'
import ProductByCategory from './pages/ProductByCategory'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPreview from './pages/Preview'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderPage from './pages/OrderPage'
import { OrderDetailsPage } from './pages/OrderDetailsPage'

const App = () => {
  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='grow'>
        <Routes>

        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>

         <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<CartPreview/>} />
          <Route path='/contact' element={<ConatctPage/>}/>
          <Route path='/collection' element={<CollectionPage/>}/>
          <Route path='/category/:id' element={<ProductByCategory/>}/>
          <Route path='/product/:id' element={<ProductDetailsPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/my-orders' element={<OrderPage/>}/>
          <Route path='/order/:id' element={<OrderDetailsPage/>}/>

        </Routes>
      </main>
      
      <Footer/>
    </div>

    {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
         
          
    </div> */}

      

    

    
      
      
    
      

      
    

     
      
      
      
    </>
  )
}

export default App