import React, { Component } from 'react';


class ProductRow extends Component {
  render() {
    const { product } = this.props
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>

    return (
      <tr >
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductCatetoryRow extends Component {
  render() {
    const {category} = this.props
    return (
      <tr>
        <th colSpan='2'>{category}</th>
      </tr>
    )
  }
}


class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText
    const inStockOnly = this.props.inStockOnly

    let lastCategory = null
    let productInfo = []    

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return
      }
      if (inStockOnly && !product.stocked) {
        return
      }
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
  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange = (e) => {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <div >
        <form >
          <p>
            <input
              type='text' 
              placeholder='Search...'
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
            />
          </p>
          <input 
            type='checkbox'
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
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
  
  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    })
  }

  handleInStockChange = (inStockOnly) => {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div >
        <SearchBar          
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange} 
          onInStockChange={this.handleFilterTextChange}
        />
        <ProductTable 
          products={PRODUCTS}
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText} 
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
