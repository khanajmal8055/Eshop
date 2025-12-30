import { useContext, useState , useEffect } from 'react'

import { ShoppingCart, User , Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from "../api/axiosInstance"


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const {userData , login ,setLogin , logout , setLogout} = useContext(UserDataContext)
  // const [logout, setLogout] = useState(false)

  console.log(login);
  const userName = userData.fullname;
  const intialName = userName?.charAt(0)
  console.log(intialName);



  const handleLogout = async() => {
      setLogin(false)
    try {
      await axios.post('/users/logout')
      setLogout(true)
    } 
    catch (error) {
      console.error(error)  
    }
    
  }

  console.log(logout);
  

  
  
  
  
  
  
  

  return (
    <>
    {/* Updated Tailwind classes for responsive spacing/alignment */}
    <header className='sticky top-0 z-50 bg-white/95 backdrop-blur '>
        <nav className='mx-auto max-w-6xl px-4 py-3 flex items-center justify-between'>
        <h2 className='text-xl sm:text-2xl font-bold text-gray-800'>Eshop</h2>
        <div className='hidden md:flex items-center gap-10 text-gray-800 font-semibold'>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          {/* <Link to={'/contact'}>Contact</Link> */}
          <Link className='' to={'/collection'}>Collections</Link>
          <Link to={'/my-orders'}>My Orders</Link>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-3 text-gray-600'>
            <Link to='/cart'>
              <ShoppingCart className='cursor-pointer active:scale-95' />
            </Link>
             
            {login && (
            <div className='rounded-full bg-black text-white font-bold cursor-pointer h-10 w-10 inline-flex justify-center items-center'><p>{intialName}</p></div> 

            )}

            {logout && (
              <Link to='/login'>
                <User className='cursor-pointer active:scale-95' />
              </Link>
            )}
            
            
            
                
          
          </div>

          <div className=' flex items-center md:hidden'>
            <button className='p-2 rounded hover:bg-gray-100' onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? "" : <Menu/>}
            </button>
          </div>
          <div>
            <button onClick={() => {
              handleLogout()
            }}>Logout</button>
          </div>
        </div>
        

         {mobileMenu && (
          <div className='md:hidden bg-white border-t border-gray-200 shadow-lg flex flex-col transition-all duration-200 ease-out'>
            <div className='px-4 py-3 space-y-3 text-gray-800 font-medium flex flex-col'>
              <Link to={'/'} onClick={()=>setMobileMenu(!mobileMenu)}>Home</Link>
              <Link to={'/about'} onClick={()=>setMobileMenu(!mobileMenu)}>About</Link>
              <Link to={'/contact'} onClick={()=>setMobileMenu(!mobileMenu)}>Contact</Link>
              <Link to={'categories'} onClick={()=>setMobileMenu(!mobileMenu)}>Categories</Link>
            </div>
          </div>
        )}

        
        
      </nav>
     
    </header>
      
    </>
  )
}

export default Navbar