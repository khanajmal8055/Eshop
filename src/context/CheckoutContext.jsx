import React, { createContext, useState } from 'react'
import axios from '../api/axiosInstance'

export const CheckoutDataContext = createContext()

const CheckoutContext = ({children}) => {
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [paymentMethod, setPaymentMethod] = useState(null)
    const [isPlacingOrder, setIsPlacingOrder] = useState(false)

    const placeOrder = async() => {
        if(!selectedAddress || !paymentMethod) return;

        setIsPlacingOrder(true)

        const payload = {
            shippingAddress : selectedAddress,
            paymentMethod
        }

        console.log("ORDER PAYLOAD" , payload);
        
        try {
            const response = await axios.post('/order/create-order' , payload)
            console.log(response);
            
        } 
        catch (error) {
            console.log(error , "Order not placed due to some technical problem");
            
        }

        setTimeout(() => {
            setIsPlacingOrder(false);
            alert("Order Placed Successfully")
        },1000)
    }
  return (
    <CheckoutDataContext.Provider value={{selectedAddress , setSelectedAddress , paymentMethod , setPaymentMethod , placeOrder , isPlacingOrder}}>
        {children}
    </CheckoutDataContext.Provider>
  )
}

export default CheckoutContext