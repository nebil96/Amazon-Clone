    import React from 'react'
    import classes from './Catagory.module.css';
    import { Link } from 'react-router-dom';

    


    function CatagoryCard({data = {}}) {
        
    return (
        <div className={classes.Catagory}>
            <Link to={`/category/${encodeURIComponent(data.title)}`}>
                <span> 
                    <h2>{data.title}</h2>
                </span>
                <img src={data.imageLink} alt="" />
                <p>Shop now</p>
            </Link>
        
        </div>
    )
    }

    export default CatagoryCard
