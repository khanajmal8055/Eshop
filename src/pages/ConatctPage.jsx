import React, { useContext, useState } from 'react'
import { CartDataContext } from '../context/CartContext'
import { AddressDataContext } from '../context/AddressContext'

const ConatctPage = () => {
  // const [quantity, setQuantity] = useState(1)
  // const {updateQuantity , getCartItems} = useContext(CartDataContext)

  const [form, setForm] = useState({fullname:'' , phoneno:'' , postalcode:'' , street:'', city:'' , state:'' , country:'' , isDefault:''})


  const {addAddress ,address ,viewAddress} = useContext(AddressDataContext)

  // viewAddress()

  console.log(address);
  

  const handleChange = (e) => {
      setForm({...form , [e.target.name] : e.target.value})
  }

  const handleSubmit = async(e)=> {
      e.preventDefault();
      try {
        addAddress(form)
      } 
      catch (error) {
        
      }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label className='block mb-1 font-medium text-gray-500'>Email</label>
        <input 
          type="text"
          placeholder='Full Name'
          name='fullname' 
          value={form.fullname}
          onChange={handleChange}
          required
          className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
        <label className='block mb-1 font-medium text-gray-500'>Email</label>
        <input 
          type="text"
          placeholder='Phone'
          name='phoneno' 
          value={form.phoneno}
          onChange={handleChange}
          required
          className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
        <label className='block mb-1 font-medium text-gray-500'>Email</label>
        <input 
          type="text"
          placeholder='Postal Code'
          name='postalcode' 
          value={form.postalcode}
          onChange={handleChange}
          required
          className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
        <label className='block mb-1 font-medium text-gray-500'>Email</label>
        <input 
          type="text"
          placeholder='Street'
          name='street' 
          value={form.street}
          onChange={handleChange}
          required
          className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
        <label className='block mb-1 font-medium text-gray-500'>Email</label>
        <input 
          type="text"
          placeholder='City'
          name='city' 
          value={form.city}
          onChange={handleChange}
          required
          className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
        <label className='block mb-1 font-medium text-gray-500'>Email</label>
        <input 
          type="text"
          placeholder='State'
          name='state' 
          value={form.state}
          onChange={handleChange}
          required
          className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
        <label className='block mb-1 font-medium text-gray-500'>Email</label>
        <input 
          type="text"
          placeholder='Country'
          name='country' 
          value={form.country}
          onChange={handleChange}
          required
          className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
        <button type='submit'>Add Address</button>
    </form>
    </>
    
    
  )
}

export default ConatctPage