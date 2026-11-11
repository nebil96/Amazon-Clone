    import React, { useEffect, useState } from 'react'
    import Layout from '../../components/Layout/Layout';
    import classes from './ProductDetail.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../components/Product/ProductCard' 
import Loader from '../../components/Loder/Loader';

    function ProductDetail() {
        const {productId} = useParams();
        const [product, setProduct] = useState({});
        const [isLoading, setIsLoading] = useState(true)
        useEffect(() => {
            setIsLoading(true)
            axios.get(`${productUrl}/products/${productId}`)
            .then((res) =>{
                setProduct(res.data)
                setIsLoading(false)
            }).catch((err) =>{
                console.log(err)
                setIsLoading(false)
            })
        }, [])
    return (
        <Layout>
            {isLoading? (<Loader/>): ( <ProductCard product={product} flex={true} renderDesc={true}/>) }
        
        </Layout>
    )
    }

    export default ProductDetail
