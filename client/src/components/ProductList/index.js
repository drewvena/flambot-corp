import React, {useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import ProductItem from '../ProductItem';

function ProductList() {
    const [state, dispatch] = useStoreContext();
    
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    
    useEffect(() => {
        if(data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });
        }
    }, [data, dispatch]);

    function filterProducts() {
        
        if(state.currentCategory === '') {
            return state.products;
        }
        return state.products.filter(product => product.category._id === state.currentCategory);   
    };
    
    return (
        <div className="my-2">
     <div className="flex-row">
            {filterProducts().map(product => (

                    <ProductItem
                        key= {product._id}
                        _id={product._id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                        quantity={product.quantity}
                    />
                
            ))}
            </div>
        </div>
    )
}

export default ProductList;