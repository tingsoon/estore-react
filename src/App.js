import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "iPhone XS",
        price: 1800,
        stock: 20
      },
      {
        id: 2,
        title: "iPhone XS Max",
        price: 2000,
        stock: 20
      },
      {
        id: 3,
        title: "Pixel 3",
        price: 800,
        stock: 30
      }
    ],
    productTitle: "",
    productPrice: "",
    productStock: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    let { productTitle, productPrice, productStock } = this.state;
    let products = [
      ...this.state.products,
      {
        id: this.state.products.length + 1,
        title: productTitle,
        price: productPrice,
        stock: productStock
      }
    ];
    console.log(this.state);
    this.setState({
      products,
      productTitle: "",
      productPrice: "",
      productStock: ""
    });
  };

  sellItem = id => {
    let products = [...this.state.products];
    products[id - 1].stock -= 1;
    this.setState({ products });
  };

  handleChange = event => {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddProduct
          handleChange={this.handleChange}
          productTitle={this.state.productTitle}
          productPrice={this.state.productPrice}
          productStock={this.state.productStock}
          handleSubmit={this.handleSubmit}
        />
        <ProductList
          products={this.state.products}
          clickHandler={this.clickHandler}
          sellItem={this.sellItem}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
