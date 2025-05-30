import React from 'react'
import { 
  Star, 
  ShoppingBag, 
  Truck, 
  Shield, 
  Headphones, 
  Award,
  ArrowRight,
  Heart,
  Eye,
  TrendingUp,
  Gift,
  Zap,
  Users
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Luxury Shopping
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Redefined
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover exclusive collections, premium brands, and unmatched quality. 
              Experience shopping like never before with LuxeCart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-xl">
                Shop Now
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200">
                Explore Collections
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose LuxeCart?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our premium features</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Free Shipping", desc: "Free delivery on orders over $100", color: "from-blue-500 to-cyan-500" },
              { icon: Shield, title: "Secure Payment", desc: "100% secure and encrypted payments", color: "from-green-500 to-emerald-500" },
              { icon: Headphones, title: "24/7 Support", desc: "Round the clock customer support", color: "from-purple-500 to-violet-500" },
              { icon: Award, title: "Premium Quality", desc: "Only the finest products curated", color: "from-orange-500 to-red-500" }
            ].map((feature, index) => (
              <div key={index} className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
              <p className="text-xl text-gray-600">Handpicked items just for you</p>
            </div>
            <button className="flex items-center space-x-2 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-200">
              <span className="font-semibold">View All</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                      <Eye className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                      -25%
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">(128)</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Premium Product {item}</h3>
                  <p className="text-gray-600 text-sm mb-4">Luxury item with exceptional quality and design</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-purple-600">$89</span>
                      <span className="text-sm text-gray-500 line-through">$119</span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find exactly what you're looking for</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books', 'Beauty', 
              'Toys', 'Automotive', 'Health', 'Jewelry', 'Art', 'Music'
            ].map((category, index) => (
              <div key={category} className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${
                  ['from-blue-500 to-cyan-500', 'from-pink-500 to-rose-500', 'from-green-500 to-emerald-500', 
                   'from-yellow-500 to-orange-500', 'from-purple-500 to-violet-500', 'from-red-500 to-pink-500'][index % 6]
                } rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-300">Join our growing community of satisfied customers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "50,000+", label: "Happy Customers" },
              { icon: ShoppingBag, number: "100,000+", label: "Products Sold" },
              { icon: Award, number: "500+", label: "Premium Brands" },
              { icon: TrendingUp, number: "99.9%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Special Offers</h2>
            <p className="text-xl text-gray-600">Don't miss out on these amazing deals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 hover:scale-105 transition-transform duration-300">
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Gift className="w-8 h-8 mr-3" />
                  <span className="text-2xl font-bold">Weekend Sale</span>
                </div>
                <h3 className="text-4xl font-bold mb-4">Up to 70% OFF</h3>
                <p className="text-xl mb-6 opacity-90">On selected premium items this weekend only</p>
                <button className="px-8 py-3 bg-white text-purple-600 rounded-xl font-bold hover:shadow-lg transition-all duration-200">
                  Shop Now
                </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 hover:scale-105 transition-transform duration-300">
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 mr-3" />
                  <span className="text-2xl font-bold">Flash Deal</span>
                </div>
                <h3 className="text-4xl font-bold mb-4">Buy 2 Get 1 FREE</h3>
                <p className="text-xl mb-6 opacity-90">On all electronics and gadgets today</p>
                <button className="px-8 py-3 bg-white text-orange-600 rounded-xl font-bold hover:shadow-lg transition-all duration-200">
                  Grab Deal
                </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and get exclusive deals, new arrivals, and style tips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/20"
            />
            <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:shadow-lg transition-all duration-200 hover:scale-105">
              Subscribe
            </button>
          </div>

          <p className="text-sm opacity-70 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

     

    </div>
  )
}