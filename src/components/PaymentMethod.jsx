import React, { useContext } from 'react'
import { CheckoutDataContext } from '../context/CheckoutContext';

const PaymentMethod = () => {

    const {paymentMethod , setPaymentMethod} = useContext(CheckoutDataContext)

    const paymentMethods = [
      { id: "COD", name: "Cash on Delivery", icon: "💵", description: "Pay when you receive" },
      { id: "CARD", name: "Credit/Debit Card", icon: "💳", description: "Visa, Mastercard, Amex" },
      { id: "UPI", name: "UPI", icon: "📱", description: "PhonePe, GPay, Paytm" },
      { id: "WALLET", name: "Wallet", icon: "👛", description: "Paytm, PhonePe Wallet" },
    ];

  return (
    <section className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className={`block p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                PaymentMethod === method.id
                  ? "border-gray-900 bg-gray-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={() => setPaymentMethod(method.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{method.icon}</span>
                    <p className="text-sm font-semibold text-gray-900">{method.name}</p>
                  </div>
                  <p className="text-xs text-gray-600">{method.description}</p>
                </div>
              </div>
            </label>
          ))}
        </div>
      </section>
    );
  
}

export default PaymentMethod