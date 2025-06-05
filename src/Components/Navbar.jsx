
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
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

// NavBar Component
export default function NavBar({set_Search,Cart_Products}) {
    const [isSearchFocused, setIsSearchFocused] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    let CartUniqueData = new Set(Cart_Products);
    
        
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                                <ShoppingBag className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    LUXECART
                                </h2>
                                <p className="text-xs text-gray-500 -mt-1">Shop The Best</p>
                            </div>
                        </div>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className={`relative w-full transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className={`w-5 h-5 transition-colors duration-200 ${isSearchFocused ? 'text-purple-500' : 'text-gray-400'}`} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products, brands, categories..."
                                className="w-full pl-12 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 placeholder-gray-400"
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                                onChange={(e) => set_Search(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Navigation Items - Desktop */}
                    <div className="hidden md:flex items-center space-x-2">
                        <Link className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-purple-50 transition-all duration-200 group">
                            <div className="relative">
                                <Bell className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                                Notifications
                            </span>
                        </Link>

                        <Link to="/cart" className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-purple-50 transition-all duration-200 group relative">
                            <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                                Cart
                            </span>
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                                {CartUniqueData.size}
                            </span>
                        </Link>

                        <Link to={"/account"} className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-purple-50 transition-all duration-200 group">
                            <User className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                                Account
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                                />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <Link className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors">
                                    <Bell className="w-5 h-5 text-gray-600" />
                                    <span className="font-medium">Notifications</span>
                                </Link>
                                <Link to="/cart" className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors">
                                    <ShoppingCart className="w-5 h-5 text-gray-600" />
                                    <span className="font-medium">Cart</span>
                                </Link>
                                <Link className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors">
                                    <User className="w-5 h-5 text-gray-600" />
                                    <span className="font-medium">Account</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
