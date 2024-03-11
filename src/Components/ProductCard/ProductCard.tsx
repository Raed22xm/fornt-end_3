import React from 'react'
import './ProductCard.css'
import axios from 'axios'
const ProductCard = ({ productName, productPrice, productDetails, productImage, productId }) => {
    function addToCart() {
        axios.post("http://localhost:3000/shoppingCart",
            {
                compony: productDetails,
                price: productPrice,
                productName: productName,
                quantity: 1
            }
        )
    }
    return (
        <div className='productCardCont'>
            <img src={"/PublicImages" + productImage} />
            <h3>{productName}</h3>
            <p>{productDetails}</p>
            <p className='product-price' >${productPrice} /-</p>
            <button onClick={addToCart} >Add To Cart</button>
        </div>
    )
}

export default ProductCard