import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from '../assets/data/products';
import { useState } from "react";
import ProductList from "../components/UI/ProductList";
import '../styles/shop.css'
const Shop = () => {

  const [productsData,setProductsData] = useState(products)

   const handelFilter =(e)=>{
        const filterValue = e.target.value;
        // filterd by safa category
        if(filterValue==="sofa"){
          const FilteredProducts = products.filter(
            (item) => item.category === "sofa"
          );
          setProductsData(FilteredProducts);
        }
        // filterd by mobile category
        if(filterValue==="mobile"){
          const FilteredProducts = products.filter(
            (item) => item.category === "mobile"
          );
          setProductsData(FilteredProducts);
        }
          // filterd by chair category
        if(filterValue==="chair"){
          const FilteredProducts = products.filter(
            (item) => item.category === "chair"
          );
          setProductsData(FilteredProducts);
        }
          // filterd by watch category
          if(filterValue==="watch"){
            const FilteredProducts = products.filter(
              (item) => item.category === "watch"
            );
            setProductsData(FilteredProducts);
          }
          // filterd by Wireless category
        if(filterValue==="wireless"){
          const FilteredProducts = products.filter(
            (item) => item.category === "wireless"
          );
          setProductsData(FilteredProducts);
        }
  }

  const handleSearch =(e)=>{
    const searchTerm = e.target.value;
    const searchProducts = products.filter((item)=>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
      setProductsData(searchProducts);
     
  }
  return (
    <Helmet title={"Shop"}>
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4">
              <div className="filter__widget">
                <select name="" id="" onChange={handelFilter}>
                  <option value="sofa">Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>{" "}
            </Col>
            <Col lg="3" md="4">
              <div className="filter__widget">
                <select name="" id="">
                  <option value="sofa">Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input type="text" placeholder="Search ...." onChange={handleSearch}/>
                <span><i className="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
            <Row>
              {
                productsData.length === 0 ? <h1 className="text-center fs-4">No Product are Found!</h1>
                : <ProductList data={productsData}/>
              }
            </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
