import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import axios from 'axios';

function HomeScreen() {
  const [products, setProducts] = useState( [] );

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="home__title">Популярные товары</div>
        <div className="home__list">
          {products.map((product) => (
            <div key={product._id} className="home__item">
                <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen

  