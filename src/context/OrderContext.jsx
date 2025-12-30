import React, { createContext, useEffect, useState } from 'react'
import axios from '../api/axiosInstance'

export const OrderDataContext = createContext()

const OrderContext = ({children}) => {
    const [orders, setOrders] = useState([])
    const [orderDetails , setOrderDetails] = useState([])
    
    const getAllOrderDetails = async()=>{
        try {
            const response = await axios.get('/order/get-all-orders')
            
            setOrders(response.data.data)
            
        } 
        catch (error) {
            console.log(error);
            
        }
    }

    const orderDetailsById = async(id)=>{
        try {
            const response = await axios.get(`/order/get-order/${id}`)
            console.log(response);
            setOrderDetails(response.data.data)
            
        } 
        catch (error) {
           console.log(error);
            
        }
    }

    useEffect(()=>{
        getAllOrderDetails()
    },[])
  return (
    <OrderDataContext.Provider value={{orders , orderDetailsById,orderDetails}}>
        {children}
    </OrderDataContext.Provider>
  )
}

export default OrderContext