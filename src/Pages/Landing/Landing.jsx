
    import Layout from '../../components/Layout/Layout';
    
    import Category from '../../components/Catagory/CatagoryCard';
    import Product from '../../components/Product/ProductCard';
import CarouselEffect from '../../components/Carousel/CarouselEffect';
    function Landing() {
        return (
        <Layout>
            <CarouselEffect />
            <Category />
            <Product />
        </Layout>
        )

    }

    export default Landing
