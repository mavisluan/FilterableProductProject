import React, { Component } from 'react';


class ProductRow extends Component {
  render() {
    return (
      <tr >
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductCatetoryRow extends Component {
  render() {
    return (
      <tr>
        <th colSpan='2'>{this.props.category}</th>
      </tr>
    );
  }
}


class ProductTable extends Component {
  render() {
    let lastCategory = null
    let productInfo = []    

    this.props.products.map((product) => {          
      if (product.category !== lastCategory) {
        productInfo.push(
        <ProductCatetoryRow 
          category={product.category}
          key={product.category}/>
        )
      }

      productInfo.push( 
        <ProductRow 
          product={product}
          key={product.name}/>
      )
      lastCategory = product.category
      return productInfo
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productInfo}</tbody>
      </table>
    )
  }
}

class SearchBar extends Component {
  render() {
    return (
      <div >
        <form >
          <p><input placeholder='Search...' name='search-bar' /></p>
          <input type='checkbox'/>
          {` `}
          Only show products in stock
        </form>
      </div>
    );
  }
}

class FilterableProductTable extends Component {
  render() {
    return (
      <div >
        <SearchBar />
        <ProductTable products={PRODUCTS}/>
      </div>
    );
  }
}

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];



export default FilterableProductTable;
