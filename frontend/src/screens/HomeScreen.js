import React from 'react';
import product from '../products';
import Product from '../components/Product';

function HomeScreen() {
  return (
    <div className="home">
      <div className="container">
        <div className="home__title">Популярные товары</div>
        <div className="home__list">
          {product.map((product) => (
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

  