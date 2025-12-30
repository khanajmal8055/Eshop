import React, { useContext } from 'react'
import { CartDataContext } from '../context/CartContext'

const OrderSummary = () => {
    const {cartItems} = useContext(CartDataContext)
  return (
    <section className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
      <div className="space-y-3 mb-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
              <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
              <p className="text-sm font-bold text-gray-900 mt-1">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          {/* <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span> */}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          {/* <span className="text-gray-900 font-medium">${shipping.toFixed(2)}</span> */}
        </div>
        <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-200">
          <span>Total</span>
          {/* <span>${total.toFixed(2)}</span> */}
        </div>
      </div>
    </section>
  )
}

export default OrderSummary