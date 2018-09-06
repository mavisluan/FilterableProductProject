import React from 'react'

const ProductRow = ({ product }) =>  (
    <div className='product'>
        <span style={{ color: !product.stocked && 'red'}}>{product.name}</span>
        <span>{product.price}</span>
    </div>
)

export default ProductRow