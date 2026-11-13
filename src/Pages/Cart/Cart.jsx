    import React, { useContext } from 'react'
    import Layout from '../../components/Layout/Layout';
    import classes from './Cart.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import { Link } from 'react-router-dom';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { Type } from '../../Utility/action.type';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


    function Cart() {
        const [{basket ,user }, dispatch ] = useContext(DataContext);
        const total = basket.reduce((amount, item) =>{
            return item.price * item.amount + amount
        },0)
        const increment =(item)=>{
            dispatch({
                type:Type.ADD_TO_BASKET,
                item
            })
        }
        const decrement =(id)=>{
            dispatch({
                type:Type.REMOVE_FROM_BASKET,
                id
            })
        }
    return (
        <Layout>
        <section className={classes.container}> 
            <div className={classes.cart__container}>
                <h2>Hello</h2>
                <h3>Your shoping basket</h3>
                <hr />
                {
                    basket?.length==0?(<p>Oops!! No item in your cart </p>):(
                        basket.map((item,i) =>{
                            return <section className={classes.cart__product}> 
                    <ProductCard
                            key ={i}
                            product={item}
                            renderDesc={true}
                            renderAdd={false}
                            flex={true}
                            />
                            <div className={classes.btn__container}>
                                <button className={classes.btn} onClick={()=>increment(item)}><IoIosArrowUp size={25} /></button>
                                <span>{item.amount}</span>
                                <button className={classes.btn}  onClick={()=>decrement(item.id)}><IoIosArrowDown size={25 } /></button>
                            </div>
                            </section>
                        
                        })
                    )
                }
            </div>
            {
                basket?.length !==0&&(
                <div className={classes.subtotal}>
                    <div>
                        <p>Subtotal ({basket?.length} items)</p>
                        <CurrencyFormat amount = {total}/>
                    </div>
                    <span>
                        <input type="checkbox" />
                        <small>This order contains a gift</small>
                    </span>
                    <Link to= "/payment"> Continue to checkout</Link>
                </div>
                )}
        </section>
        </Layout>
    )}

    export default Cart
