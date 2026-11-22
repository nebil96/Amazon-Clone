import React from 'react'
import Layout from '../../components/Layout/Layout';
import classes from './Payment.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider';
import { useContext,useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"
import ProductCard from '../../components/Product/ProductCard';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
import { ClipLoader } from 'react-spinners';
import { db  } from '../../Utility/firebase';
import { doc, setDoc } from "firebase/firestore";
import { Type } from "../../Utility/action.type";

    

    function Payment() {
        const [{user, basket}, dispatch] = useContext(DataContext);
        


    //total amount
    const total = basket.reduce((amount, item) =>{
            return item.price * item.amount + amount
        },0)
        // total item
        const totalItem = basket?.reduce((amount,item)=>{
            return item.amount + amount
        },0)
        const [cardError, setCardError] = useState(null)
        const [processing, setProcessing] = useState(false)

        const stripe = useStripe();
        const elements = useElements();
        const navigate = useNavigate();

        const handleChange = (e) =>{
            e?.error?.message? setCardError( e?.error?.message):(setCardError(""))
        };
        const handlePayment = async(e )=>{
            e.preventDefault()

            try {// backend || functions contact to the client secret
                setProcessing(true)
                const response = await axiosInstance({
                    method: "POST",
                    url: `/payment/create?total=${total}`
                })
                const clientSecret = response.data?.clientSecret;

                // client side (react side confirmation)
                const {paymentIntent} = await stripe.confirmCardPayment(
                    clientSecret,
                    {
                        payment_method:{
                            card: elements.getElement(CardElement)
                        }
                    }
                )
                // after the confirmation--> order fire store database clear basket
                await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                });
                // clear the basket
                    dispatch({type:Type.EMPTY_BASKET});

                setProcessing(false)
                navigate("/Orders", {state:{msg:"you have placed a new order"}})
            }catch (error){
                console.log(error)
                setProcessing(false)
            }
        }
    return (
        <Layout>
            {/* header */}
            <div className={classes.payment__header}>
                Checkout({totalItem}) items
            </div>
                {/* payment method */}
            <section className={classes.Payment}>
            {/* address */}
            <div className={classes.flex}>
                <h3>Delivery Address</h3>
                <div>
                    <div>{user?.email}</div>
                    <div>AddisAbaba</div>
                    <div> Ethiopia</div>
                </div>
            </div>
            <hr />

            {/* product */}
            <div className={classes.flex}>
                <h3>Review items and delivery</h3>
                <div>
                    {
                        basket?.map((item)=> <ProductCard product={item } flex={true}/>)
                    }
                </div>
            </div>
            <hr />

            {/* card form */}
            <div className={classes.flex}>
                <h3>Payment methods</h3>
                <div className={classes.payment__card__container}>
                    <div className={classes.payment__detail}>
                        <form onSubmit={handlePayment}>
                            {/* Error */}
                            {cardError && (<small style={{color: "red"}}> {cardError}</small>)}
                            {/* card element */}
                            <CardElement onChange={handleChange}/>
                            {/* price */}
                            <div className={classes.payment__price}>
                                <div>
                                    <span style={{display:"flex" ,gap: "10px"}}>
                                        <p>  Total Order | </p> <CurrencyFormat amount={total}/>
                                    </span>
                                </div>
                                <button type='submit'>
                                    {
                                        processing? (
                                            <div className={classes.loading}> 
                                                <ClipLoader color='grey' size={12}/>
                                                <p>Please Wait...</p>
                                            </div>
                                        ):"Pay Now"
                                    }
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            </section>
        
        </Layout>
    )
    }

    export default Payment
