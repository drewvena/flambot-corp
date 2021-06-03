import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';

import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import { Button, Header, Segment, Image, Grid, Icon, Divider } from "semantic-ui-react"

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
    } 
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });

    }
  }

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className="container my-20">
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
              <Header.Subheader>
                    <Link to="/">
                      <Icon fitted name="arrow alternate circle left outline"/>
                    Back to Products
                    </Link>
                  </Header.Subheader>
              </Grid.Column>
              <Grid.Column>
                <Header textAlign="left" as="h1">{currentProduct.name}
                  
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Image centered
                size="large"
                src={`/images/${currentProduct.image}`}
                alt={currentProduct.name}
                />
              </Grid.Column>

              <Grid.Column>
                <Segment >
                  {currentProduct.description}
                  <Divider/>
                  <Header as="h4">Price: ${currentProduct.price} </Header>
                  <Button primary onClick={addToCart}>
                    Bag This Swag
                  </Button>
                  <Button 
                    disabled={!cart.find(p => p._id === currentProduct._id)} 
                    onClick={removeFromCart}
                    primary
                  >
                    Remove Swag
                  </Button>
                </Segment>
              </Grid.Column>

            </Grid.Row>

          </Grid>
        
        </div>
      ) : null}
    
      <Cart />
    </>
  );
};
export default Detail;