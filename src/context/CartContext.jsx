import { createContext, useEffect, useState } from "react"
import axios from "../api/axiosInstance"

export const CartDataContext = createContext()

const CartContext = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [totalPrice , setTotalPrice] = useState(0)
    
    
    // console.log(cartItems);
    

    const addToCart = async (productId , quantity=1) => {
        try {
           const response = await axios.post('/cart/add-to-cart' , {productId , quantity})
           console.log(response.data.data.items);
           
        } 
        catch (error) {
            console.log(error , "Error while adding to cart");
            
        }
    }

    const updateQuantity = async(productId , quantity) =>{
        try {
            const response = await axios.post('/cart/update-cart' , {productId , quantity})
            // console.log(response.data.data.totalPrice);
            setTotalPrice(response.data.data.totalPrice)
            
        } 
        catch (error) {
            console.log(error);
            
        }
    }

    const getCartItems = async() => {
        try {
            const response = await axios.get('/cart/get-cart')
            // console.log(response.data.data.items);
            setCartItems(response.data.data.items)
            // console.log(response.data.data.totalPrice);
            setTotalPrice(response.data.data.totalPrice)
            
            
        } 
        catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getCartItems()

    },[cartItems])


    const removeFromCart = async(productId)=>{
        console.log(productId);
        
        try {
          const response = await axios.put(`/cart/remove-item/${productId}`)  
          console.log(response);
          
        } 
        catch (error) {
            console.log(error);
            alert("Something Went wron on removing cart item")
            
        }
    }

    const clearCart = async() => {
        try {
            await axios.delete('/cart/clear-cart')    
        } 
        catch (error) {
            alert('Error in clearing the cart')
        }
    }


    
    
  return (
    <CartDataContext.Provider value={{addToCart , updateQuantity, cartItems , setCartItems , getCartItems , removeFromCart, totalPrice , clearCart}}>
        {children}
    </CartDataContext.Provider>
  )
}

export default CartContext