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

    
    

    useEffect(()=>{
        async function hello(){
             const response = await axios.get('/users/view-profile')
             setUserData(response.data.data)
             setLogin(true)
            
        }

        hello()
        
    },[login])

    
    




   

    
    

    
    
  return (
    <UserDataContext.Provider value={{userData , login ,logout, setLogin , setLogout}}>
        {children}
    </UserDataContext.Provider>
  )
}

export default UserContext