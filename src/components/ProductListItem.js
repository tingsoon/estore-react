import React from "react";

export default props => {
  const { id, title, price, stock } = props.product;
  return (
    <div>
      <h4>{title}</h4>
      <p>Price: ${price}</p>
      <p>Stocks: {stock}pcs</p>
      <button onClick={() => props.clickHandler(id)}>Buy this</button>
      <hr />
    </div>
  );
};
