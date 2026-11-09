    import React from 'react'
    import {catagoryImage} from './Catagoryfull';
    import CatagoryCard from './CatagoryCard';
    import classes from './Catagory.module.css';
    
    

    function Catagory() {
    return (

        <section className={classes.Catagory__container}>
        {
            catagoryImage.map((catagoryItem)=>(
            <CatagoryCard data = {catagoryItem}
                />
            ))
    }
        </section>
    )
    }

    export default Catagory
