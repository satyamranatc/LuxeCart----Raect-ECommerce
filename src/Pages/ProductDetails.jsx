import React, { useEffect, useState } from 'react'
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Truck, 
  Shield, 
  RotateCcw, 
  Package,
  Award,
  Weight,
  Info,
  ArrowLeft,
  Plus,
  Minus,
  Share2
} from 'lucide-react'
import { useParams } from 'react-router-dom'

export default function ProductDetails({Cart_Products, set_Cart_Products}) {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)

  function handleCart(e)
  {
    set_Cart_Products([...Cart_Products, product])
  }

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true)
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        console.log(data)
        setProduct(data)
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    )
  }

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, Math.min(product.stock || 99, prev + change)))
  }

  const originalPrice = product.price && product.discountPercentage 
    ? Math.round(product.price * (1 + product.discountPercentage / 100)) 
    : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button className="flex items-center text-purple-600 hover:text-purple-700 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={product.images?.[selectedImage] || '/api/placeholder/600/600'} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="flex space-x-4 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-purple-500' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header Section */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-5 h-5 ${
                      star <= Math.floor(product.rating || 4) 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} out of 5
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-purple-600">
                ${product.price}
              </span>
              {originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${originalPrice}
                </span>
              )}
              {product.discountPercentage && (
                <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                  -{Math.round(product.discountPercentage)}% OFF
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-gray-500">
                {product.stock} in stock
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-200 hover:scale-105">
                Buy Now
              </button>
              <button onClick={()=> handleCart(product)} className="w-full py-4 border-2 border-purple-600 text-purple-600 rounded-xl font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button className="w-full py-4 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Product Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              {/* Brand */}
              {product.brand && (
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Award className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500">Brand</p>
                    <p className="font-medium text-gray-900">{product.brand}</p>
                  </div>
                </div>
              )}

              {/* SKU */}
              {product.sku && (
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Package className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500">SKU</p>
                    <p className="font-medium text-gray-900">{product.sku}</p>
                  </div>
                </div>
              )}

              {/* Weight */}
              {product.weight && (
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Weight className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500">Weight</p>
                    <p className="font-medium text-gray-900">{product.weight} kg</p>
                  </div>
                </div>
              )}

              {/* Minimum Order */}
              {product.minimumOrderQuantity && (
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Info className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500">Min. Order</p>
                    <p className="font-medium text-gray-900">{product.minimumOrderQuantity} units</p>
                  </div>
                </div>
              )}
            </div>

            {/* Service Information */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">Service Information</h3>
              
              {/* Warranty */}
              {product.warrantyInformation && (
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Warranty</p>
                    <p className="text-gray-600">{product.warrantyInformation}</p>
                  </div>
                </div>
              )}

              {/* Shipping */}
              {product.shippingInformation && (
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Truck className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Shipping</p>
                    <p className="text-gray-600">{product.shippingInformation}</p>
                  </div>
                </div>
              )}

              {/* Return Policy */}
              {product.returnPolicy && (
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <RotateCcw className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Return Policy</p>
                    <p className="text-gray-600">{product.returnPolicy}</p>
                  </div>
                </div>
              )}

              {/* Availability */}
              {product.availabilityStatus && (
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className={`w-3 h-3 rounded-full ${
                    product.availabilityStatus === 'In Stock' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <div>
                    <p className="font-medium text-gray-900">Availability</p>
                    <p className="text-gray-600">{product.availabilityStatus}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}