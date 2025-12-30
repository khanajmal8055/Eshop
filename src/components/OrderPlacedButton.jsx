import React, { useContext } from 'react'
import { CheckoutDataContext } from '../context/CheckoutContext'

const OrderPlacedButton = () => {
    const {selectedAddress , setSelectedAddress , paymentMethod , setPaymentMethod , placeOrder , isPlacingOrder} = useContext(CheckoutDataContext)
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 sm:p-6 sm:static sm:border-0 sm:p-0">
      <button
        onClick={()=>{
            placeOrder()
        }}
        disabled={!selectedAddress || !paymentMethod || isPlacingOrder}
        className={`w-full py-3.5 rounded-lg text-sm font-semibold active:scale-95 ${
          selectedAddress && paymentMethod
            ? "bg-gray-900 text-white hover:bg-gray-800"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Place Order
      </button>
      {(!selectedAddress || !paymentMethod) && (
        <p className="text-xs text-gray-600 text-center mt-2">
          {!selectedAddress && !paymentMethod
            ? "Please select delivery address and payment method"
            : !selectedAddress
            ? "Please select a delivery address"
            : "Please select a payment method"}
        </p>
      )}
    </div>
  )
}

export default OrderPlacedButton