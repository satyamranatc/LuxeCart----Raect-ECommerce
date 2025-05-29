import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import NavBar from "./Components/Navbar.jsx"
import SideBar from "./Components/Sidebar.jsx"

import Home from "./Pages/Home.jsx"
import Products from "./Pages/Products.jsx"
import Category from "./Pages/Category.jsx"
import SubProducts from "./Pages/SubProducts.jsx"
import ProductDetails from "./Pages/ProductDetails.jsx" 
import Cart from "./Pages/Cart.jsx"



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/subproducts" element={<SubProducts/>}/>
          <Route path="/productdetails" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
