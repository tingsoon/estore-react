import React from "react";

export default props => {
  return (
    <form>
      Product Title: <br />
      <input
        type="text"
        name="productTitle"
        onChange={props.handleChange}
        value={props.productTitle}
      />
      <br />
      Product Price: <br />
      <input
        type="number"
        name="productPrice"
        onChange={props.handleChange}
        value={props.productPrice}
      />
      <br />
      Product Stock: <br />
      <input
        type="number"
        name="productStock"
        onChange={props.handleChange}
        value={props.productStock}
      />
      <br />
      <button type="submit" onClick={props.handleSubmit}>
        Add Product
      </button>
    </form>
  );
};
