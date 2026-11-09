import { useState } from 'react'
import './App.css'
// import Routing from './Router'
import Carousel from './components/Carousel/CarouselEffect';
import Catagory from './components/Catagory/Catagory';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {
  return (
  <div>  
      <Header/>
      <Carousel/>
      <Catagory/>
      <Product/>
        
</div>
  )
}

export default App
