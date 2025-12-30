import React, { useState } from 'react'
import OrderSummary from '../components/OrderSummary'
import AddressComponent from '../components/AddressComponent'
import CheckoutContext from '../context/CheckoutContext'
import OrderPlacedButton from '../components/OrderPlacedButton'
import PaymentMethod from '../components/PaymentMethod'

const CheckoutPage = () => {
    const [showAddForm, setShowAddForm] = useState(false)
  return (
    <CheckoutContext>
    <div className="min-h-screen bg-gray-50 pb-20 sm:pb-0">
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b py-6">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button className="text-sm text-gray-600 hover:text-gray-900">← Back</button>
          <h1 className="text-xl sm:text-2xl font-serif text-gray-900">Checkout</h1>
          <div className="w-14"></div>
        </nav>
      </header>
        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <AddressComponent />
            <PaymentMethod/>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <OrderSummary />
            <OrderPlacedButton/>
          </div>
        </div>
      </main>
    </div>
    </CheckoutContext>
  )
}

export default CheckoutPage