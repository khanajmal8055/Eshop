import { createContext,  useEffect, useState } from 'react'
import axios from '../api/axiosInstance'

export const UserDataContext = createContext()

const UserContext = ({children}) => {
    const [userData, setUserData] = useState([])
    const [login, setLogin] = useState(false)
    const[logout , setLogout] = useState(true)

    

    // const getUserData = async()=>{
    //     try {
    //         const response = await axios.get('/users/view-profile')
    //         console.log(response.data.data);
    //         setUserData(response.data.data)
            
            
    //     } 
    //     catch (error) {
    //         console.error(error)
    //     }
    // }

    
    const getProfile = async()=>{
      try {
        const response = await axios.get('/users/view-profile')
        setUserData(response.data.data);
        setLogin(true)
      } 
      catch (error) {
        console.log(error);
        
      }
    }

    useEffect(()=>{
        getProfile()
    },[login])

    
    




   

    
    

    
    
  return (
    <UserDataContext.Provider value={{userData , login ,logout, setLogin , setLogout , setUserData}}>
        {children}
    </UserDataContext.Provider>
  )
}

export default UserContext