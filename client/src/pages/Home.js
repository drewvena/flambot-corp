import React from "react";

import Filter from '../components/Filter';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
  <div className="container">
    <Filter />
    <ProductList />
  </div>
  );
};

export default Home;