import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data.products || [];
  if(!loading) {
    const products = data.products;
    console.log(products);
  }
  return (
  <div className="container">
      {products.map(product => (
        <h2>{product.name}</h2>
      ))}
  </div>
  );
};

export default Home;