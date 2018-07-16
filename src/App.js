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
      <tr>
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
    const {filterText, inStockOnly, products} = this.props 
    let lastCategory = null
    let productInfo = []    

    products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return
      }
      if (inStockOnly && !product.stocked) {
        return
      }
      // remove the duplicate categories. 
      if (product.category !== lastCategory) {
        productInfo.push(
        <ProductCatetoryRow 
          category={product.category}
          key={product.category}/>
        )
      }
      // display all the products' names and prices
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
  // event.target returns the element that triggered the event
  // e.target.value is the value entered in the input
  // call function 'handleFilterTextChange' through props to update the state(filterText) 
  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  }
  
  // e.target.checked is true when the checkbox is checked.
  // call function 'onInStockChange' through props to update the state(inStockOnly).
  handleInStockChange = (e) => {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
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
      //when SearchBar input changed, it call handleFilterTextChange( event.target.value ) through props.
      // state.filterText will be updated to event.target.value
      filterText: filterText
    })
  }

  handleInStockChange = (inStockOnly) => {
    //when checkbox changes, it call handleInStockChange( event.target.checked ) through props.
    // state.inStockly will be updated to event.target.checked (true when it's checked)
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
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable 
          products={PRODUCTS}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} 
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
