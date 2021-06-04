import React from "react";
import Cart from '../components/Cart';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
  <div className="container">
            <input type="text" value="F1412" id="myInput" style={{color:'white', border:'0px solid white'}}></input>

    <Filter />
    <ProductList/>
  </div>
  );
};

export default Home;