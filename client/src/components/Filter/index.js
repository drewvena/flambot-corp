import React, {useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY, REMOVE_CURRENT_CATEGORY } from '../../utils/actions';
import {Container, Menu} from 'semantic-ui-react'

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
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id
        }); 
    }
    
    return (
        <Container textAlign="center">
            <fieldset className="flex-row space-between my-20">
            <Menu text fluid widths={5} size='massive'>
                <Menu.Item header>Shop:</Menu.Item>
                <Menu.Item>
                <input type='radio' id='all' value='all' name='category' onClick={() => {click('')}}/>
                <label htmlFor='all'>All</label>
                </Menu.Item>
                {state.categories.map(category => (
                    <Menu.Item> 
                        <input key={category._id} type='radio' id={category._id} value={category.name} name='category' onClick={() => {click(category._id)}}/>
                        <label htmlFor={category.name}>{category.name}</label>
                    </Menu.Item>
                ))}
            </Menu>    
            </fieldset>
        </Container>
        
    )
}

export default Filter;