    import React,{useContext, useState, useEffect} from 'react'
    import classes from './Orders.module.css'
    import Layout from '../../components/Layout/Layout'
    import { db } from '../../Utility/firebase'
    import { DataContext } from '../../components/DataProvider/DataProvider'
    import { collection, query, orderBy, onSnapshot } from "firebase/firestore"; 
import ProductCard from '../../components/Product/ProductCard'

    function Orders() {
        const [{user}, dispatch ] = useContext(DataContext);
        const [orders, setOrders] = useState([]);
    useEffect(() => {
    if (!user) {
        setOrders([]);
        return;
    }

    const q = query(
        collection(db, "users", user.uid, "orders"),
        orderBy("created", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
        snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }))
        );
    });

    return () => unsubscribe();
    }, [user]);


    return (
        <Layout>
            <section className={classes.container}> 
                <div className={classes.Orders__container}>
                    <h2>Your Orders</h2>
                    {
                        orders?.length == 0 && <h3 style={{padding: "20px"}}>you don't have any order yet.</h3>
                    }
            {/* ordered items */}
                        <div>
                            {
                                orders?.map((eachOrder)=>{
                                    return(
                                        <div > 
                                            <hr />
                                            <p>Order ID: {eachOrder?.id}</p>
                                            {
                                                eachOrder?.data?.basket?.map(order => {
                                                    return(
                                                    <ProductCard flex={true} product={order} key={order.id}/>
                                                )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
        </div>
        </section>
        
        </Layout>
    )
    }

    export default Orders
