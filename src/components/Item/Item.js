import React from 'react';
import './Item.css';
const Item = (props)=>{
    return(
        <label className="Item">
            {props.name}
        </label>
    );
};

export default Item;