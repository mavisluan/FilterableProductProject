import React, { Component } from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import './App.css'

class FilterableProductTable extends Component {
  state = {
      filterText: '',
      inStockOnly: false   
  }
  
  handleFilterTextChange = (filterText) => this.setState({ filterText })

  handleInStockChange = (inStockOnly) => this.setState({ inStockOnly })

  render() {
    const { filterText, inStockOnly } = this.state

    return (
      <div className='app'>
        <SearchBar          
          filterText={ filterText }
          inStockOnly={ inStockOnly }
          onFilterTextChange={this.handleFilterTextChange} 
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable 
          products={PRODUCTS}
          filterText={ filterText }
          inStockOnly={ inStockOnly }
        />
      </div>
    )
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
