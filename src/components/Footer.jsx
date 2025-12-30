import React from 'react'

const Footer = () => {
  return (
    <>
    {/* Updated Tailwind classes for mobile-friendly spacing */}
    <footer className="bg-white  py-12 text-gray-800">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold ">EShop</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Your one-stop destination for quality products at the best prices.
            Shop smart, shop easy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold ">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/shop" className="hover:text-black">Shop</a></li>
            <li><a href="/about" className="hover:text-black">About Us</a></li>
            <li><a href="/contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold  mb-4">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="/faq" className="hover:text-black">FAQ</a></li>
            <li><a href="/returns" className="hover:text-black">Returns</a></li>
            <li><a href="/shipping" className="hover:text-black">Shipping</a></li>
            <li><a href="/privacy" className="hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold  mb-4">
            Newsletter
          </h3>
          <p className="text-sm mb-4 text-gray-700">
            Subscribe to get special offers and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md border text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="sm:w-auto w-full bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md  text-sm font-medium text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.5 8.5 0 01-2.7 1.03 4.25 4.25 0 00-7.23 3.88A12.06 12.06 0 013 4.9a4.25 4.25 0 001.32 5.67 4.23 4.23 0 01-1.93-.53v.05a4.25 4.25 0 003.41 4.17 4.3 4.3 0 01-1.92.07 4.25 4.25 0 003.97 2.96A8.52 8.52 0 012 19.54 12.02 12.02 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.36 8.36 0 0022.46 6z"/>
              </svg>
            </a>

            <a href="#" className="hover:text-black">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.16c-5.43 0-9.84 4.41-9.84 9.84 0 4.34 2.82 8.02 6.74 9.33.49.09.67-.21.67-.47v-1.64c-2.74.6-3.32-1.32-3.32-1.32-.45-1.14-1.11-1.44-1.11-1.44-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.19-.25-4.49-1.09-4.49-4.86 0-1.07.38-1.94 1.01-2.63-.1-.25-.44-1.27.1-2.64 0 0 .82-.26 2.69 1.01a9.32 9.32 0 014.9 0c1.87-1.27 2.69-1.01 2.69-1.01.54 1.37.2 2.39.1 2.64.63.69 1.01 1.56 1.01 2.63 0 3.78-2.3 4.61-4.5 4.85.36.31.68.92.68 1.85v2.74c0 .26.18.57.68.47a9.84 9.84 0 006.74-9.33c0-5.43-4.41-9.84-9.84-9.84z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );

}


export default Footer