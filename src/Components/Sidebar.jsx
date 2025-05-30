import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Home,
    ShoppingBag,
    Grid3X3,
    ShoppingCart,
    Bell,
    User,
    Search,
    Menu,
    X,
    Heart,
    Package,
    Star
} from 'lucide-react'
export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navItems = [
    { to: "/", icon: Home, label: "Home", color: "from-blue-500 to-cyan-500" },
    { to: "/products", icon: Package, label: "Products", color: "from-green-500 to-emerald-500" },
    { to: "/category", icon: Grid3X3, label: "Categories", color: "from-purple-500 to-violet-500" },
    { to: "/cart", icon: ShoppingCart, label: "Cart", color: "from-orange-500 to-red-500" }
  ]

  return (
    <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white/90 backdrop-blur-xl border-r border-gray-200/50 shadow-xl z-40 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-2 rounded-xl hover:bg-purple-50 transition-colors mb-6"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-200 relative overflow-hidden"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              
              {!isCollapsed && (
                <div className="flex-1">
                  <span className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {item.label}
                  </span>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-200 rounded-xl"></div>
            </Link>
          ))}
        </nav>

        {!isCollapsed && (
          <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <div className="flex items-center space-x-3 mb-3">
              <Heart className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-800">Special Offer</span>
            </div>
            <p className="text-sm text-purple-700 mb-3">
              Get 20% off on your first purchase!
            </p>
            <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
              Claim Now
            </button>
          </div>
        )}
      </div>
    </aside>
  )
}
