import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import NavBar from "./Components/Navbar.jsx"
import SideBar from "./Components/Sidebar.jsx"
import Fotter from './Components/Fotter.jsx'

import Home from "./Pages/Home.jsx"
import Products from "./Pages/Products.jsx"
import Category from "./Pages/Category.jsx"
import SubProducts from "./Pages/SubProducts.jsx"
import ProductDetails from "./Pages/ProductDetails.jsx" 
import Cart from "./Pages/Cart.jsx"


export default function App() {
  let [Cart_Products, set_Cart_Products] = useState([]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <BrowserRouter>
        <NavBar />
        <div className="flex">
          <SideBar />
          <main className="flex-1 ml-64 pt-16 transition-all duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/category" element={<Category />} />
              <Route path="/subproducts" element={<SubProducts />} />
              <Route path="/productdetails/:id" element={<ProductDetails Cart_Products = {Cart_Products} set_Cart_Products = {set_Cart_Products} />} />
              <Route path="/cart" element={<Cart Cart_Products = {Cart_Products} />} />
            </Routes>
        <Fotter />
          </main>
        </div>
      </BrowserRouter>
    </div>
  )
}