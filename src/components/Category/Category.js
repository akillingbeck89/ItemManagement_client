import React from 'react';
import Item from '../Item/Item';
import './Category.css';
const Category = (props)=>{

    const items = props.items.map(item=>{
        return <Item name={item.name} key={item.name} />
    });
   
    return (
        <div className="category">
            <label className="categoryTitle">{props.name}</label>
            <div className="ItemsList"> {items} </div>
        </div>
    );
};


export default Category;