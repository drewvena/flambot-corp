import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Image, Button, Header, icon } from "semantic-ui-react"

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }


  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <Image
          alt={name}
          src={`/images/${image}`}
        />
        <Header as="h3">{name}
        <Header.Subheader>Only {quantity} {pluralize("shirt", quantity)} left!</Header.Subheader>
        </Header>
      </Link>
      <Header as="h6">
      </Header>
      <Button primary animated="vertical" onClick={addToCart}>
        <Button.Content hidden>Bag It!</Button.Content>
        <Button.Content visible>${price}</Button.Content>
      </Button>
    </div>
  );
}

export default ProductItem;