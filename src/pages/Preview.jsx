import React from "react";

const OrderPreview = () => {
  const order = {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "Delivered",
    items: [
      {
        id: 1,
        name: "Classic White T-Shirt",
        price: 29.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 2,
        name: "Denim Jacket",
        price: 79.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=200&q=80",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      phone: "+1 234 567 8900",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
    },
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    itemsTotal: 139.97,
    shipping: 9.99,
    tax: 11.20,
    total: 161.16,
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Processing":
        return "bg-purple-100 text-purple-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button className="text-sm text-gray-600 hover:text-gray-900">← Back</button>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Order Details</h1>
          <div className="w-14"></div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 pb-4 border-b border-gray-200">
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">Order {order.id}</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Placed on {formatDate(order.date)}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Shipping Address</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-semibold text-gray-900">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.phone}</p>
                  <p>{order.shippingAddress.address}</p>
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Payment Information</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <span className="font-semibold text-gray-900">Method:</span> {order.paymentMethod}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Status:</span>{" "}
                    <span className="text-green-600 font-semibold">{order.paymentStatus}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Ordered Items</h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{item.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm sm:text-base font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Items Total</span>
                <span className="text-gray-900 font-medium">${order.itemsTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span className="text-gray-900 font-medium">${order.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tax</span>
                <span className="text-gray-900 font-medium">${order.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 pt-3 border-t border-gray-200">
                <span>Grand Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {order.status !== "Delivered" && (
              <button className="flex-1 bg-gray-900 text-white py-3 px-4 rounded-lg text-sm font-semibold active:scale-95 hover:bg-gray-800">
                Track Order
              </button>
            )}
            {order.status === "Delivered" && (
              <button className="flex-1 border border-gray-300 text-gray-900 py-3 px-4 rounded-lg text-sm font-semibold active:scale-95 hover:bg-gray-50">
                Reorder
              </button>
            )}
            <button className="flex-1 border border-gray-300 text-gray-900 py-3 px-4 rounded-lg text-sm font-semibold active:scale-95 hover:bg-gray-50">
              Download Invoice
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderPreview;
