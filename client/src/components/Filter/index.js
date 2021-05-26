import React, {useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY, REMOVE_CURRENT_CATEGORY } from '../../utils/actions';

function Filter() {
    const [state, dispatch] = useStoreContext();
    
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    
    useEffect(() => {
        if(data) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: data.categories
            });
        }
    }, [data, dispatch]);

    function click(id) {
        if(!state.currentCategory.includes(id)) {
            dispatch({
                type: UPDATE_CURRENT_CATEGORY,
                currentCategory: id
            });
        } else {
            dispatch({
                type: REMOVE_CURRENT_CATEGORY,
                currentCategory: id
            })
        }
    }
    
    return (
        <fieldset>
            <legend>Filter:</legend>
            {state.categories.map(category => (
                <div>
                    <label htmlFor={category.name}>{category.name}</label>
                    <input type='checkbox' id={category._id} value={category.name} name={category.name} onClick={() => {click(category._id)}}/>
                </div>
            ))}
        </fieldset>
    )
}

export default Filter;