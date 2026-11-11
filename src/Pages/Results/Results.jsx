    import React, { useEffect, useState } from 'react'
    import Layout from '../../components/Layout/Layout';
    import classes from './Results.module.css'
    import { useParams } from 'react-router-dom';
    import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loder/Loader';

    function Results() {
        const [results, setResults] =useState([]);
        const [isLoading, setIsLoading] = useState(true)
        const {categoryName} = useParams()
        useEffect(() =>{
        axios.get(`${productUrl}/products/category/${categoryName.toLowerCase()}`)
        .then((res) =>{
            setResults(res.data)
            setIsLoading(false)
        }).catch((err) =>{
            console.log(err)
            setIsLoading(false)
        })
        }, [categoryName])
        
    return (
        <Layout>
        <section>
            <h1 style={{ padding: "30px"}}>Results</h1>
            <p style={{ padding: "30px"}}>Category/ {categoryName}</p>
            <hr />
            {isLoading?(<Loader/>): 
            ( <div className={classes.products_container}>
                {results?.map((product) =>(
                    <ProductCard
                    key={product.id}
                    renderAdd= {true}
                    product= {product}
                    />
                ))}
            </div>
        )}
        </section>
        </Layout>
    )
    }

    export default Results
