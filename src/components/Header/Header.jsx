    import React from 'react'
    import classes from './Header.module.css';
    import LowerHeader from './LowerHeader';
    import { HiOutlineLocationMarker } from "react-icons/hi";
    import { AiOutlineSearch } from "react-icons/ai";
    import { BiCart } from "react-icons/bi";

    function Header() {
        return (
            <>
            <section >
                <div className={classes.header__container}>
                {/* logo */}
                <div className={classes.logo__container}>
                
                <a href="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon-logo" />
                </a>
                </div>
                {/* Delivery */}
                <div className={classes.delivery}>
                <span>
                <HiOutlineLocationMarker />
                </span>
                
                <div>
                <p>Delivere to</p>
                <span>Ethiopia</span>
                </div>
                </div>
            
            <div className= {classes.search}>
                {/* Search-bar */}
                <select name = "" id="">
                <option value="">All</option>
                </select>
                <input type="text" id="" placeholder='Search Products' />
                <AiOutlineSearch  size ={25}/>
            </div>
            {/* right side link */}
            <div className={classes.right__side}>
                <a href="" className={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="" />
                
                <select name="" id="">
                    <option value="">EN</option>
                </select>
                
                </a>
                
                {/* three-components */}
                <a href="">
                <div>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                </div>
                </a>
                {/* orders */}
                <a href="">
                <p>Returns</p>
                <span>& Orders</span>
                </a>
                {/* cart */}
                <a href='' className={classes.cart}>
                {/* icon */}
                    <BiCart  size={35}/>
                    <span>0</span>
                </a>
                

            
            </div>
            </div>
            </section>
            <LowerHeader />
        </>
        
        );
        
    };

    export default Header;
