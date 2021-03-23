import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './styles/app.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
        <div className="container">
          <h1 className="title">Добро пожаловать в DShop</h1>
        </div>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
      <Footer />
    </Router>
  );
}

export default App;
