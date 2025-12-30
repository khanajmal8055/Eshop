// import { useComposedRefs } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { CartDataContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';

const CartPage = () => {

    const {cartItems , removeFromCart , updateQuantity , totalPrice , clearCart} = useContext(CartDataContext)
    // console.log(cartItems[0].productId._id);

    // const [quantity, setQuantity] = useState(1)

    const shipping = totalPrice > 0 ? 9.99 : 0;
    const tax = totalPrice * 0.08;
    const total = totalPrice + shipping + tax;


    const handleDecreaseQuantity = (productId , quantity) => {
        if(quantity > 1){
            quantity = quantity-1
            updateQuantity(productId , quantity)
        }
        else{
            alert('Cannot decrease the quantity ... you can remove the item')
        }
    }

    const handleIncreaseQuantiy = (productId , quantity)=>{
        quantity = quantity+1;
        updateQuantity(productId,quantity)
    }

    const navigate = useNavigate()
    
    const handleNavigate = () => {
        navigate('/checkout')
    }
  
    
    const EmptyCart = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center space-y-4">
      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
      <p className="text-base text-gray-600 max-w-sm">Add items to your cart to continue shopping.</p>
      <button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-semibold active:scale-95">
        Continue Shopping
      </button>
    </div>
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Shopping Cart</h1>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          <EmptyCart />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="text-sm text-gray-600">{cartItems.length} {cartItems.length === 1 ? "item" : "items"}</span>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <article key={item.id} className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-32 h-32 sm:h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1 space-y-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => {
                            handleDecreaseQuantity(item.productId?._id , item.quantity)
                          }}
                          className="px-3 py-2 text-gray-700 hover:bg-gray-100 active:scale-95"
                          aria-label="Decrease quantity"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="px-4 py-2 text-sm font-semibold text-gray-900 min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => {
                            handleIncreaseQuantiy(item.productId?._id , item.quantity)
                          }}
                          className="px-3 py-2 text-gray-700 hover:bg-gray-100 active:scale-95"
                          aria-label="Increase quantity"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                      <button
                        onClick={()=>{
                            removeFromCart(item.productId?._id)
                        }}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium active:scale-95"
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-24 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
              <div className="space-y-3 pt-2 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-medium">${totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className="text-gray-900 font-medium">${shipping}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax</span>
                  <span className="text-gray-900 font-medium">${tax}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
              <button
                onClick={handleNavigate}
                className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-semibold active:scale-95 hover:bg-gray-800">
                Proceed to Checkout
              </button>
              <button className="w-full border border-gray-300 text-gray-900 py-3 rounded-lg text-sm font-semibold active:scale-95 hover:bg-gray-50">
                Continue Shopping
              </button>

              <button onClick={() => {
                clearCart()
              }} className="w-full border border-gray-300 text-gray-900 py-3 rounded-lg text-sm font-semibold active:scale-95 hover:bg-gray-50">
                Clear Cart
              </button>
             

            </div>
          </aside>
        </div>
      </main>
    </div>
    
  )
}

export default CartPage