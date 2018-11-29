import React from "react";
import ProductListItem from "./ProductListItem";

export default props => {
  const renderProducts = props.products.map(product => (
    <ProductListItem
      key={product.id}
      product={product}
      clickHandler={props.sellItem}
    />
  ));

  return (
    <div>
      <h3>Products</h3>
      {renderProducts}
    </div>
  );
};
