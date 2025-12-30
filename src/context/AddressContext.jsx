import React, { createContext , useEffect, useState } from 'react'
import axios from '../api/axiosInstance'


export const AddressDataContext = createContext()





const AddressContext = ({children}) => {
    const [address, setAddress] = useState([])

    const addAddress = async(form)=> {
        console.log(form);
        
        try {
            const response = await axios.post('/users/address/add-address' , form)
            console.log(response);
            // setAddress(response.data.data)
            
        } 
        catch (error) {
            console.log(error , "ADDRESS CONTEXT");
            
        }
    }

    const viewAddress = async() => {
        try {
            const response = await axios.get('users/address/view-address')
            // console.log(response.data.data);
            setAddress(response.data.data)
            
        } 
        catch (error) {
            console.log(error);
                
        }
    }

    useEffect(() =>{
        viewAddress()
    },[address])
  return (
    <AddressDataContext.Provider value={{addAddress , address , viewAddress}}>
        {children}
    </AddressDataContext.Provider>
  )
}

export default AddressContext