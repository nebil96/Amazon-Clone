    import React, { useEffect, useState } from 'react'
    import axios from 'axios'
    function Product() {
        const [first, setFirst] = useState()

        useEffect(() => {
            axios.get('https://fakestoreapi.com/products')
            .then((res) =>{
            })

        },[])
    return (
        <div>
        


        </div>
    )
    }

    export default Product
