import React, {use, useState} from 'react'
import axios from '../api/axiosInstance.js'
import { useNavigate , Link } from 'react-router-dom';
import {motion} from 'framer-motion'




const Register = () => {
    const [form , setForm] = useState({username:'' , email:'' , password:'' , fullname:''});
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    const handleChange = (e)=> {
        setForm({...form , [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/users/register' , form)
            navigate("/login")
            setMessage('Registration successfull now you can login!')
        } catch (error) {
            setMessage(error.response?.data?.message || 'Failed to register')
        }
    }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white'>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md" 
        >
            <h2 className='text-3xl font-bold text-center text-indigo-600 mb-6'>Create Account ✨</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className='block mb-1 font-medium text-gray-500'>Username</label>
                    <input 
                    type="text"
                    placeholder='User Name'
                    name='username' 
                    value={form.username}
                    onChange={handleChange}
                    required
                    className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    />
                </div>
                
                <div>
                    <label className='block mb-1 font-medium text-gray-500'>Email</label>
                    <input 
                    type="text"
                    placeholder='Email'
                    name='email' 
                    value={form.email}
                    onChange={handleChange}
                    required
                    className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    />
                </div>
                
                <div>
                    <label className='block mb-1 font-medium text-gray-500'>Password</label>
                    <input 
                    type="text"
                    placeholder='Password'
                    name='password' 
                    value={form.password}
                    onChange={handleChange}
                    required
                    className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    
                    />
                    
                </div>
                
                <div>
                    <label className='block mb-1 font-medium text-gray-500'>Full Name</label>
                    <input 
                    type="text"
                    placeholder='Full-Name'
                    name='fullname' 
                    value={form.fullname}
                    onChange={handleChange}
                    required
                    className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    />
                </div>

                {message && <p className='text-red-500 text-sm'>{message}</p>}


                <button type='sumbit' className='w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-900 transition'>
                    Register
                </button>
            </form>

            <p className='text-center text-gray-500'>
                Already have an Account..{" "}
                <Link to='/login' className='text-indigo-500 font-medium hover:underline'>
                    Login
                </Link>
            </p>
        </motion.div>
    </div>
  )
}

export default Register