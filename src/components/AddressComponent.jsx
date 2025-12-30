import React, { useContext, useState } from 'react'
import { AddressDataContext } from '../context/AddressContext'
import { CheckoutDataContext } from '../context/CheckoutContext'

const AddressComponent = () => {

    const {address , addAddress} = useContext(AddressDataContext)

    const [showAddForm, setShowAddForm] = useState(false)

    const [form, setForm] = useState({fullname:'' , phoneno:'' , postalcode:'' , street:'', city:'' , state:'' , country:'' , isDefault:''})

    const {selectedAddress , setSelectedAddress} = useContext(CheckoutDataContext)
    
    const handleSubmit = async(e)=> {
      e.preventDefault();
      try {
        addAddress(form)
      } 
      catch (error) {
        console.log(error);
        
      }
    }


    const handleChange = (e) => {
      setForm({...form , [e.target.name] : e.target.value})
    }

  return (
    <section className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6" >
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Delivery Address</h2>
            {!showAddForm && (
            <button
                onClick={() => setShowAddForm(true)}
                className="text-sm font-semibold text-gray-900 hover:text-gray-700"
            >
                + Add New
            </button>
            )}
        </div>

        {showAddForm ? (
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">Full Name</label>
                    <input 
                        

                        type="text"
                        placeholder='Full Name'
                        name='fullname' 
                        value={form.fullname}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">Phone Number</label>
                    <input 
                        type="text"
                        placeholder='Phone'
                        name='phoneno' 
                        value={form.phoneno}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"

                    />

                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">Street Address</label>
                    <input
                        type="text"
                        placeholder='Street Address'
                        name='street'
                        value={form.street}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                        required
                    />
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-1">City</label>
                        <input
                            type="text"
                            placeholder='City'
                            name='city'
                            value={form.city}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                            required
                        />
                    </div>
                    <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">State</label>
                    <input
                        type="text"
                        placeholder='State'
                        name='state'
                        value={form.state}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                        required
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">Country</label>
                    <input
                        type="text"
                        placeholder='Country'
                        name='country'
                        value={form.country}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                        required
                    />
                    </div>
                    
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">ZIP Code</label>
                    <input
                    type="text"
                    placeholder='ZIP CODE'
                    value={form.postalcode}
                    name='postalcode'
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                    required
                    />
                </div>
                <div className="flex gap-3">
                    <button
                    type="submit"
                    // onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-900 text-white py-2.5 rounded-lg text-sm font-semibold active:scale-95"
                    >
                    Save Address
                    </button>
                    <button
                        type='button'
                        onClick={()=>{
                            setForm({})
                            setShowAddForm(false)
                        }}
                        className="flex-1 border border-gray-300 text-gray-900 py-2.5 rounded-lg text-sm font-semibold active:scale-95"

                    >
                        Cancel
                    </button>
                </div>
            </form>
        ) : (
            <div className='space-y-3'>
                {address.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-sm text-gray-600 mb-4">No saved addresses</p>
                        <button
                            onClick={() => setShowAddForm(true)}
                            className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold active:scale-95"
                        >
                            Add Address
                        </button>
                    </div>
                ) : (
                    address.map((address) => (
                        <label
                            key={address._id}
                            className={`block p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                            selectedAddress === address._id
                                ? "border-gray-900 bg-gray-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                        >
                            <div className="flex items-start gap-3">
                            <input
                                type="radio"
                                name="address"
                                value={address.id}
                                checked={selectedAddress === address._id}
                                onChange={() => setSelectedAddress(address._id)}
                                className="mt-1"
                            />
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                <p className="text-sm font-semibold text-gray-900">{address.fullname}</p>
                                {/* {address.isDefault && (
                                    <span className="px-2 py-0.5 bg-gray-900 text-white text-xs font-semibold rounded">
                                    Default
                                    </span>
                                )} */}
                                </div>
                                <p className="text-sm text-gray-600">{address.phoneno}</p>
                                <p className="text-sm text-gray-600 mt-1">
                                {address.country}, {address.city}, {address.state} {address.postalcode}
                                </p>
                            </div>
                            </div>
                        </label>
                        
                    ))
                )}
            </div>
        )}

    </section>
  )
}

export default AddressComponent