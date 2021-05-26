import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from '../utils/queries';
import { useStoreContext } from '../utils/GlobalState';

const Home = () => {
  const [state, dispatch] = useStoreContext();
  console.log(state);
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];
  if(!loading) {
    const products = data.products;
  }
  return (
  <div className="container">
      {products.map(product => (
        <h2>{product.name} ${product.price}</h2>
      ))}
  </div>
  );
};

export default Home;