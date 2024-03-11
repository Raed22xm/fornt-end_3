import { useEffect, useState } from 'react'
import './CheckoutCont.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const CheckoutCont = () => {
  const [noOfProducts, setNoOfProducts] = useState(0)
  const [totalProductsPrice, setProductsPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [discount, setDisount] = useState(0)
  async function fetchAndUpdate() {
    await axios.get("http://localhost:3000/shoppingCart").then((res) => {
      setNoOfProducts(res.data.length)
      let currentPrice = 0
      for (let i = 0; i < res.data.length; i++) {
        currentPrice += (res.data[i].price * res.data[i].quantity)
      }
      setProductsPrice(currentPrice)
      if (currentPrice >= 300) {
        let discountPrice = (currentPrice / 10)
        setDisount(discountPrice)
        setTotalPrice(currentPrice - discountPrice)
      } else {
        setTotalPrice(currentPrice)
      }
    }).catch((err) => {
      console.log(err)
    })

  }
  useEffect(() => { fetchAndUpdate() }, [])
  return (
    <div className='CheckoutCont'>
      <h3>Order Summary</h3>
      <hr />
      <div className='quantity-details' >
        <p>ITEMS {noOfProducts}</p>
        <p>${totalProductsPrice}</p>
      </div>
      <div className='quantity-details' >
        <p>Discount</p>
        <p>- ${discount}</p>
      </div>
      <hr />
      <div className='quantity-details' >
        <p>TOTAL COST</p>
        <p>${totalPrice}</p>
      </div>
      <Link to="/deliveryForm" >
        <button >CHECKOUT</button>
      </Link>
    </div>
  )
}

export default CheckoutCont