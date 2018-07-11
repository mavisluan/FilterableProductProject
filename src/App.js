import React, { Component } from 'react';


class ProductRow extends Component {
  render() {
    return (
      <div >
       Product's name & Price
      </div>
    );
  }
}

class ProductCatetoryRow extends Component {
  render() {
    return (
      <div >
       Product's category(no duplicate)
      </div>
    );
  }
}

class ProductTable extends Component {
  render() {
    return (
      <div >
        <p>Name Price</p>
        <ProductCatetoryRow />
        <ProductRow />
      </div>
    );
  }
}

class SearchBar extends Component {
  render() {
    return (
      <div >
        <form >
          <p><input placeholder='Search...' name='search-bar' /></p>
          <input type='checkbox'/>Only show products in stock
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
