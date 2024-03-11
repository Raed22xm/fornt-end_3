import React from 'react'
import './ShoppingCart.css'
import ShoppingCartMain from '../../Components/ShopingCartMain/ShoppingCartMain'
import CheckoutCont from '../../Components/CheckoutCont/CheckoutCont'
import Navbar from '../../Components/Navbar/Navbar'
const ShoppingCart = () => {
    return (
        <div className='shoppingCartPageCont' >
            <Navbar />
            <div className="cartAndCheckOutCont" >
                <ShoppingCartMain />
                <CheckoutCont />
            </div>
        </div>
    )
}

export default ShoppingCart