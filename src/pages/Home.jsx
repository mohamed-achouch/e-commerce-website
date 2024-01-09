import React from "react";
import "../styles/Home.css";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import { useEffect, useState } from "react";
import conterImg from '../assets/images/counter-timer-img.png'
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, settrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);


  const year = new Date().getFullYear();

  useEffect(() => {
    //Trending products
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    settrendingProducts(filteredTrendingProducts);
    //best sales products
    const filteredBeastSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    setBestSalesProducts(filteredBeastSalesProducts);
    // mobile products 
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    setMobileProducts(filteredMobileProducts);
     // wireless products 
     const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    setWirelessProducts(filteredWirelessProducts);
    //Popular products
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    setPopularProducts(filteredPopularProducts)
  }, []);

  return (
    <Helmet title={"home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="heru__subtitle">Trending product in {year}</p>
                <h2>make your interior more minimalistic & modern</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                  tenetur qui quo tempora minima beatae culpa fugiat?
                  Aspernatur, maxime obcaecati!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="by__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col>
              <div className="hero__image">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products" id="chair">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales" id="sofa">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>        
            <ProductList data={bestSalesProducts} />         
          </Row>
        </Container>
      </section>
      <section className="timer__counter">
        <Container>
          <Row>
            <Col md='6' lg='6'>
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                <h3 className="text-white fs-5 mb-3" >quality Armchair</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{scale:1.1}} className="by__btn store__btn"><Link to="/shop">Visit store</Link></motion.button>
            </Col>
            <Col md='6' lg='6' className="text-end">
              <img src={conterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals" id="mobile">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>        
            <ProductList data={mobileProducts}/>  
            <ProductList data={wirelessProducts}/>         
          </Row>
        </Container>
      </section>
      <section className="popular__category" id="watch">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Popular in Category</h2>
            </Col>        
            <ProductList data={popularProducts}/>                   
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
