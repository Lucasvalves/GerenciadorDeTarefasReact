import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';



function List(props){
    const items = useSelector(state=> state)

    return(
        <ul>
            {/* <li>{text}</li> exibindo o valor do input na lista  */}
            {items.map(item=><ListItem key={ item.id} item={item} ></ListItem>)}             
        </ul>
    )
    
}

export default List;