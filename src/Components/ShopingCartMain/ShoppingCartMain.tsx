import './ShopingCartMain.css'
import CartProductCard from '../CartProductCard/CartProductCard'
import CheckoutCont from '../CheckoutCont/CheckoutCont'
import { useEffect, useState } from 'react'
import axios from 'axios'
function ShoppingCartMain() {


    // console.log(noOfProduct)
    const [shoppingData, setShoppingData] = useState([])

    function fetchShoppingData() {
        console.log("hook Called")
        axios.get("http://localhost:3000/shoppingCart").then((recievedData) => {
            setShoppingData(recievedData.data)
            console.log(recievedData.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(fetchShoppingData, [])
    return (
        <div className='shoppingCartCont'>

            <div className='heading-cont' >
                <h2>Shoping Cart</h2>
                <h2>{shoppingData.length} items</h2>
            </div>
            <hr />
            <div className='product-headers' >
                <p className='details' >Product Details</p>
                <p className='quantity' >Quantity</p>
                <p className='price' >Price</p>
                <p className='total' >Total</p>
            </div>
            {
                shoppingData.map((product) => {
                    return <CartProductCard key={product.id} productId={product.id} productCompany={product.compony} productName={product.productName} productPrice={product.price} productQuantity={product.quantity} />
                })
            }
                {/* <CartProductCard /> */}
        </div>
    )
}


export default ShoppingCartMain
