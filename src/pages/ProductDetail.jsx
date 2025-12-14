import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Simulasi data (idealnya diambil dari API/State global)
  const product = {
    id: id,
    name: 'Contoh Produk',
    price: 1000000,
    category: 'Electronics',
    description: 'Ini adalah deskripsi detail produk.'
  };

  return (
    <div className="page product-detail">
      <h1>Detail Produk {id}</h1>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">Rp {product.price.toLocaleString('id-ID')}</p>
        <p className="category">{product.category}</p>
        <p>{product.description}</p>
      </div>
      <div className="product-actions">
        <button className="btn btn-primary">Buy Now</button>
        <Link to="/products" className="btn btn-secondary">Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetail;