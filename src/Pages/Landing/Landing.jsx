
    import Layout from '../../components/Layout/Layout';
    import Category from '../../components/Catagory/Catagory';
    import Product from '../../components/Product/Product';
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
