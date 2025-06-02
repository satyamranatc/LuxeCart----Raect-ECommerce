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
    <div>
      <h1>Cart</h1>
      {UniqueProducts.map(product => (
        <div key={product.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.qty}</p>
          <p>Subtotal: ${product.price * product.qty}</p>
        </div>
      ))}
      <h2>Total: ${total}</h2>
    </div>
  );
}
