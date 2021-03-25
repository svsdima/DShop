import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';

function HomeScreen() {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <div className="home">
      <div className="container">
        <div className="home__title">Популярные товары</div>
        { loading ? (
          <Loader />
        ) : error ? ( 
          <h3 className="errorScreen">{error}</h3>
        ) : (        
          <div className="home__list">
            {products.map((product) => (
              <div key={product._id} className="home__item">
                  <Product product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomeScreen

  