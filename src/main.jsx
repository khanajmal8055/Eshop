import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductContext from './context/ProductContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
import CartContext from './context/CartContext.jsx'
import AddressContext from './context/AddressContext.jsx'
import CheckoutContext from './context/CheckoutContext.jsx'
import OrderContext from './context/OrderContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserContext>
    <OrderContext>
    <AddressContext>
    <ProductContext>
      <CartContext>
       
      <App />
      
      </CartContext>
    </ProductContext>
    </AddressContext>
    </OrderContext>
  </UserContext>
  </BrowserRouter>
 
)
