    import React from 'react'
    import Rating from '@mui/material/Rating';
    import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
    import classes from './Product.module.css';
    import { Link } from 'react-router-dom';

    function ProductCard({product}) {
    const { image, title, id, rating = {}, price } = product;
    return (
        <div className={`${classes.card__container}`}>
        <Link to = {`/products/${id}`}>
            <img src={image} alt="#" />
        </Link>
        <div>
            <h3>{title}</h3>
            <div className={classes.rating}>
                {/* Rating */}
                <Rating value={rating.rate} precision={0.1}/>
                {/* Rating number */}
                <small>{rating.count}</small>
            </div>
            <div>
                {/* Price */}
                <CurrencyFormat amount={price}/>
            </div>
            <button className={classes.button}>
                add to cart
            </button>
        </div>
        </div>
    )
    }

    export default ProductCard
