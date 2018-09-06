import React from 'react'
import escaptRegExp from 'escape-string-regexp'
import ProductRow from './ProductRow'

const ProductTable = ({filterText, inStockOnly, products }) => {
    let lastCategory = null
    let productInfo = []    

    products.forEach((product) => {
        const match = new RegExp(escaptRegExp(filterText), 'i')
        const { name, category, stocked } = product
        if (!match.test(name)) {
            return
        }
        if (inStockOnly && !stocked) {
            return
        }

        if (category !== lastCategory) {
            productInfo.push(
                <div className='categories' key={category}>{category}</div>
            )
        }

        productInfo.push(<ProductRow product={product} key={name}/> )
    
        lastCategory = category
    })

    return (
    <div className='products-list'>
        <div className='header'>
            <span>Name</span>
            <span>Price</span>
        </div>
        <div>{productInfo}</div>
    </div>
    )
}
  
export default ProductTable