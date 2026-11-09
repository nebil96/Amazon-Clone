    import React from 'react'
  import classes from './Catagory.module.css';

    


    function CatagoryCard({data = {}}) {
    return (
        <div className={classes.Catagory}>
            <a href="">
                <span> 
                    <h2>{data.title}</h2>
                </span>
                <img src={data.imageLink} alt="" />
                <p>Shop now</p>
            </a>
        
        </div>
    )
    }

    export default CatagoryCard
