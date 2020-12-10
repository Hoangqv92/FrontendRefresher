import ReactDOM from 'react-dom';
import React from 'react';

var GroceryList = (props) => (
  <div>
     {props.groceries.map((item, key) =>
        <li key={key} type="1">
          <span>{" " + item.name + " "}</span>
          <span>{item.quantity}</span>
        </li>
      )}
  </div>
)

export default GroceryList;