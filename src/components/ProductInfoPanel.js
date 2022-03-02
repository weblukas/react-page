import React from 'react'
import Button from './Button'

const ProductInfoPanel = () => {
  return (
    <>
       <h1>{name}</h1>
                    <div className="btn-container">
                      <Button handleAddItem={handleAddItem} productId={id} />
                      {/* czy lepiej onClick={handleAddItem} */}
                      <span>Jbl Flip 6 {radioValue} color</span>
                      <h3>{price} zł</h3>
                      <p>{description}</p>
                    </div> 
    </>
  )
}

export default ProductInfoPanel