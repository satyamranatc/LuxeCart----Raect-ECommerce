import React from 'react';

export default function Cart({ Cart_Products }) {
  // Calculate quantity per unique product
  const productMap = new Map();

  Cart_Products.forEach(product => {
    if (productMap.has(product.id)) {
      productMap.get(product.id).qty += 1;
    } else {
      productMap.set(product.id, { ...product, qty: 1 });
    }
  });

  const UniqueProducts = Array.from(productMap.values());

  // Calculate total
  const total = UniqueProducts.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      
      <div className="space-y-4">
        {UniqueProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-4">
              {product.images && product.images[0] && (
                <img 
                  src={product.images[0]} 
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              )}
              
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-gray-700">Price: ${product.price}</p>
                    <p className="text-gray-600">Quantity: {product.qty}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xl font-bold text-purple-600">
                      ${(product.price * product.qty).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {UniqueProducts.length > 0 && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Total:</h2>
            <p className="text-3xl font-bold text-purple-600">${total.toFixed(2)}</p>
          </div>
        </div>
      )}

      {UniqueProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      )}
    </div>
  );
}