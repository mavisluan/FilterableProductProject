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
    const filterText = this.props.filterText
    const inStockOnly = this.props.inStockOnly

    return (
      <div >
        <form >
          <p>
            <input
              type='text' 
              placeholder='Search...'
              value={filterText}
            />
          </p>
          <input 
            type='checkbox'
            checked={inStockOnly}
          />{` `}Only show products in stock
        </form>
      </div>
    );
  }
}

class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false
  }
  render() {
    return (
      <div >
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable 
          products={PRODUCTS}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
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
