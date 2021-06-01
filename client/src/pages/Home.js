import React from "react";
import Cart from '../components/Cart';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
  <div className="container">
    <Filter />
    <ProductList/>
    <Cart />
  </div>
  );
};

export default Home;