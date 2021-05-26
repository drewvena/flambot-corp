import React, {useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';

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
        console.log(state.products);
        if(state.currentCategory === '') {
            return state.products;
        }
        return state.products.filter(product => product.category._id === state.currentCategory);   
    };
    
    return (
        <div>
            {filterProducts().map(product => (
                <div>
                    <h2>{product.name}</h2>
                    <h4>{product.price}</h4>
                </div>
            ))}
        </div>
    )
}

export default ProductList;