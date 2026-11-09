    
    import classes from './Carousel.module.css';
    import {img}from './data'
    import { Carousel } from 'react-responsive-carousel';
    import "react-responsive-carousel/lib/styles/carousel.min.css";
    
    

    function CarouselEffect() {
    return (
        <div>
            <Carousel
                autoPlay= {true}
                infiniteLoop={true}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}   
                showArrows={false} >  
            {
                img.map((imageItemLink)=>{
                    return <img src={imageItemLink}/>
                })
            }
            </Carousel>
            <div className = {classes.hero__img}> 

            </div>
        </div>
    )
    }

    export default CarouselEffect
