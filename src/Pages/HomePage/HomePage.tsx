import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import ProductCard from '../../Components/ProductCard/ProductCard'
import axios from 'axios'

const HomePage = () => {
    const [products, setProducts] = useState([])

    async function getProductData() {
        const dataFetched = await axios.get("http://localhost:3000/productsData")
        setProducts(dataFetched.data)
    }
    useEffect(() => {
        getProductData()
    }, [])


    return (
        <div>
            <Navbar />
            <div className='products-cont' >
                {
                    (products || []).map((data) => {
                        return <ProductCard key={data.id} productId={data.id} productImage={data.productImg} productName={data.productName} productPrice={data.productPrice} productDetails={data.productDetail} />
                    })
                }
            </div>
        </div>
    )
}

export default HomePage