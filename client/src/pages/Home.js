import React, {useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from '../utils/queries';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from "../utils/actions";
import Filter from '../components/Filter';

const Home = () => {
  return (
  <div className="container">
    <Filter />
  </div>
  );
};

export default Home;