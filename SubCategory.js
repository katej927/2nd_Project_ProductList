import React, { Component } from "react";
import Product from "../Product/Product";
import "./SubCategory.scss";

export default class SubCategory extends Component {
  render() {
    const { key, name, desc, products } = this.props;
    return (
      <div>
        <span>{name}</span>
        <span>{desc}</span>
        {this.props.products.map((product) => {
          return (
            <Product
              id={product.id}
              image={product.image}
              isnew={product.isnew}
              isseason={product.isseason}
              title={product.title}
            />
          );
        })}
      </div>
    );
  }
}
