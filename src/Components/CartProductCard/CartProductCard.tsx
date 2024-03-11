import axios from 'axios'
import './CartProductCard.css'
import { useEffect, useState } from 'react'

const CartProductCard = ({ productName, productId, productPrice, productQuantity, productCompany }) => {
    const [productData, setProductData] = useState({})
    fetchProduct()

    const [quantity, setQuantity] = useState(productQuantity)
    const [total, setTotal] = useState(productPrice * quantity)
    const [view, setView] = useState("")

    function fetchProduct() {
        axios.get("http://localhost:3000/shoppingCart/" + productId).then((data) => {
            // console.log(data.data)
            setProductData(data.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    function updateQuantity(newQuantity) {
        axios.put("http://localhost:3000/shoppingCart/" + productId, {
            compony: productData.compony,
            id: productData.id,
            price: productData.price,
            productName: productData.productName,
            quantity: newQuantity
        }).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }

    function incrementQuantity() {
        let currentQuantity = quantity
        if (currentQuantity >= 10) {
            alert("Cant go more then 10 ")
        } else {
            currentQuantity++
            setQuantity(currentQuantity)
            updateQuantity(currentQuantity)
        }
    }

    function decrementQuantity() {

        let currentQuantity = quantity
        if (currentQuantity <= 1) {
            alert("cant be less then 1")
        } else {
            currentQuantity--
            setQuantity(currentQuantity)
            updateQuantity(currentQuantity)
        }

    }
    function updateTotalPrice() {
        setTotal(productPrice * quantity)
    }

    useEffect(updateTotalPrice, [quantity])

    function deleteProduct(productID) {
        axios.delete("http://localhost:3000/shoppingCart/" + productID).then((res) => {
            console.log(res)
        }).catch((data) => {
            console.log(data)
        })
    }
    // deleteProduct()
    return (
        <div className='product-card-cont'  >
            <div className='product-details'>
                <img src="https://cdn.nwscdn.com/media/wysiwyg/3kf/cricket/SetComp-Main.jpg" alt="" className='product-img' />
                <div>
                    <p> <b> {productName} </b> </p>
                    <p style={{ color: "red", fontSize: "small" }} >{productCompany}</p>
                    <button onClick={() => deleteProduct(productId)} >Remove</button>
                </div>
            </div>
            <div className='product-quantity' >
                <button className='quantity-changer' onClick={decrementQuantity} >-</button>
                <input type="text" value={quantity} />
                <button className='quantity-changer' onClick={incrementQuantity} >+</button>
            </div>
            <p className='product-price' >{productPrice}$</p>
            <p className='product-total' >{total}$</p>

        </div>
    )
}

export default CartProductCard