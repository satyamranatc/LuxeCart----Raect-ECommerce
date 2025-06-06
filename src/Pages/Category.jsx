import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Category() {
  let navigate = useNavigate()
  let[allCategory, setAllCategory] = useState([])
  
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()
        console.log(data.products)
        let allProducts = data.products 
        
        let allCategories = [...new Set(allProducts.map((product) => product.category))]
        setAllCategory(allCategories)
       } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    getData()
  }, [])
 
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Category</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          allCategory.map((category) => 
            <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize">{category}</h2>
                <button onClick={()=>{
                  navigate(`/productsBy/${category}`)
                }} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  See Products
                </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}