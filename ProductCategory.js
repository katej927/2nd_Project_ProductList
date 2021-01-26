import React, { Component } from "react";
import SubCategory from "../SubCategory/SubCategory";
import Product from "../Product/Product";
import "./ProductCategory.scss";

export default class ProductCategory extends Component {
  render() {
    return (
      <main className="productcategory">
        {this.props.categories.map((category) => {
          return (
            <SubCategory
              key={category.subcategory_id}
              name={category.name}
              desc={category.description}
              products={category.products}
            />
          );
        })}
      </main>
    );
  }
}
