import React from 'react'

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockChange }) => {
    const handleFilterTextChange = (e) => {
      onFilterTextChange(e.target.value);
    }
    
    const handleInStockChange = (e) => {
      onInStockChange(e.target.checked);
    }
  
    return (
        <form>
            <div className='search-box'>
                <input
                    type='text' 
                    placeholder='Search...'
                    value={filterText}
                    onChange={handleFilterTextChange}/>
            </div>
            <div className='check-box'>
                <input 
                    type='checkbox'
                    checked={inStockOnly}
                    onChange={handleInStockChange}/>
                {` `}Only show products in stock
            </div>
        </form>
    )
}

export default SearchBar