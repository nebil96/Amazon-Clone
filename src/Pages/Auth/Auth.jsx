    import React, { useState, useContext} from 'react'
    import {auth} from "../../Utility/firebase"
    import classes from './Auth.module.css'
    import { Link } from 'react-router-dom'
    import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
    import { DataContext } from '../../components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'


    function Auth() {
        const [email, setEmail] = useState("");
        const [password, setPasword] = useState("");
        const [erorr, serErorr] = useState("");
        
        const [{user}, dispatch] = useContext(DataContext)
        
        const authHandler = async (e)=>{
            e.preventDefault();
            if(e.target.name == "signin"){
                signInWithEmailAndPassword(auth, email, password)
                .then((userInfo) =>{
                    dispatch({
                        type: Type.SET_USER,
                        user:userInfo.user
                    })
                })
                .catch((err)=>{
                    serErorr(err.message);
                })

            }else{
                createUserWithEmailAndPassword(auth, email, password)
                .then((userInfo)=>{
                    dispatch({
                        type: Type.SET_USER,
                        user:userInfo.user
                    })
                })
                .catch((err)=>{
                    serErorr(err.message);
                })

            }
        }
    return (
        <section  className={classes.login}> 
            {/* logo */}
            <Link>
            <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/1920px-Amazon_2024.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail" alt="logo" />
            </Link>
            {/* form */}
            <div className={classes.login__container}>
                <h1>Sign-in</h1>
                <form action="">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input value = {password} onChange={(e) => setPasword (e.target.value)} type="password" id='password' />
                    </div>
                    <button type='submit' onClick={authHandler} name ="signin" className={classes.login__signInBtn}>Sign in</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZONE FAKE CLONE  
                    Conditions of Use & Sale. Please See our Privacy Notice, 
                    Our Cookies Notice and Our Interst-Based Ads Notice. 
                </p>
                {/* create acc btn */}
                <button type='submit' onClick={authHandler} name ="signup"  className={classes.login__registerBtn}> Create your Amazone Account</button>
                {
                    erorr && (
                        <small style={{paddingTop: "5px" , color : "red"}}>{erorr}</small>
                    )
                }
            </div>
        </section>
    )
    }

    export default Auth
