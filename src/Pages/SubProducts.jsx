import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { 
  Star, 
  Heart, 
  Eye, 
  ShoppingCart
} from 'lucide-react'

export default function SubProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()
        console.log(data.products)
        setProducts(data.products)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const filtered = products.filter((product) => product.category === category)
    setFilteredProducts(filtered)
  }, [products, category])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      
      {/* Header Section */}
      <section className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 capitalize">
              {category}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our premium collection of {category} products designed to elevate your lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length > 0 ? filteredProducts.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={item.images?.[0] || '/api/placeholder/300/300'} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 right-4 space-y-2">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                      <Eye className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Discount Badge */}
                {item.discountPercentage && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                      -{Math.round(item.discountPercentage)}%
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-4 h-4 ${
                          star <= Math.floor(item.rating || 4) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    ({item.rating || '4.0'})
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                  {item.description}
                </p>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-purple-600">
                      ${item.price}
                    </span>
                    {item.discountPercentage && (
                      <span className="text-sm text-gray-500 line-through">
                        ${Math.round(item.price * (1 + item.discountPercentage / 100))}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 space-y-2">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
                    Buy Now
                  </button>
                  <button className="w-full px-4 py-3 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          )):
          (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-600">No products found in this category.</p>
            </div>
          )
          }
        </div>

        {/* Loading State */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading amazing products...</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold hover:shadow-xl transition-all duration-200 hover:scale-105">
              Load More Products
            </button>
          </div>
        )}
      </main>
    </div>
  )
}