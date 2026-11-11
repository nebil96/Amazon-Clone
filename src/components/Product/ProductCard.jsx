    import React, { useContext } from 'react'
    import Rating from '@mui/material/Rating';
    import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
    import classes from './Product.module.css';
    import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

    function ProductCard({product, flex, renderDesc}) {
    const { image, title, id, rating , price, description } = product;

    const [state, dispatch] = useContext(DataContext);
        
    const addToCart = () =>{
        dispatch ({
            type: Type.ADD_TO_BASKET,
            item: {
                image, title, id, rating , price, description 
            }
        })
    }
    return (
        <div className={`${classes.card__container} ${flex? classes.product__flexed: ''}`}>
        <Link to = {`/products/${id}`}>
            <img src={image} alt="#" />
        </Link>
        <div>
            <h3>{title}</h3>
            {renderDesc && <div style={{maxWidth: "550px"}}> {description}</div>}
            <div className={classes.rating}>
                {/* Rating */}
                <Rating value={Number(rating?.rate) || 0} precision={0.5} readOnly />
                {/* Rating number */}
                <small>{rating.count}</small>
            </div>
            <div>
                {/* Price */}
                <CurrencyFormat amount={price}/>
            </div>
            <button className={classes.button} onClick={addToCart}>
                add to cart
            </button>
        </div>
        </div>
    )
    }

    export default ProductCard
