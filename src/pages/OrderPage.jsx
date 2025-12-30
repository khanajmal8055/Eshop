import React, { useContext } from 'react'
import { OrderDataContext } from '../context/OrderContext'
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
    const {orders} = useContext(OrderDataContext)

    console.log(orders);
    
    
    
    const getStatusColor = (status) => {
        switch (status) {
        case "DELIVERED":
            return "bg-green-100 text-green-700";
        case "SHIPPED":
            return "bg-blue-100 text-blue-700";
        case "PLACED":
            return "bg-yellow-100 text-yellow-700";
        default:
            return "bg-gray-100 text-gray-700";
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    };

    const navigate = useNavigate()


    const handleNavigate = (id) => {
        navigate(`/order/${id}`)
    }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur py-3 ">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button className="text-sm text-gray-600 hover:text-gray-900">← Back</button>
          <h1 className="text-xl sm:text-2xl font-serif text-gray-900">My Orders</h1>
          <div className="w-14"></div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">No orders yet</h2>
            <p className="text-base text-gray-600 max-w-sm">Start shopping to see your orders here.</p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-semibold active:scale-95">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <article key={order.id} className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-lg font-bold text-gray-900">Order {order.id}</h2>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.orderStatus)}`}>
                        {order.orderStatus}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Placed on {formatDate(order.createdAt)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">${order.finalAmount}</p>
                    <p className="text-xs text-gray-600">{order.items.length} {order.items.length === 1 ? "item" : "items"}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base font-semibold text-gray-900 truncate">{item.name}</p>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">Quantity: {item.quantity}</p>
                        <p className="text-sm sm:text-base font-bold text-gray-900 mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <button 
                  onClick={()=>{
                    handleNavigate(order._id)
                  }}
                  className="flex-1 border border-gray-300 text-gray-900 py-2.5 px-4 rounded-lg text-sm font-semibold active:scale-95 hover:bg-gray-50">
                    View Details
                  </button>
                  {order.status !== "DELIVERED" && (
                    <button className="flex-1 bg-gray-900 text-white py-2.5 px-4 rounded-lg text-sm font-semibold active:scale-95 hover:bg-gray-800">
                      Track Order
                    </button>
                  )}
                  {order.status === "DELIVERED" && (
                    <button className="flex-1 border border-gray-300 text-gray-900 py-2.5 px-4 rounded-lg text-sm font-semibold active:scale-95 hover:bg-gray-50">
                      Reorder
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default OrderPage