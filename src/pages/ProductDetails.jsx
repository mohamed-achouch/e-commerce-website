import React from "react";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import CommonSection from "../components/UI/CommonSection";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import ProductList from "../components/UI/ProductList";

import "../styles/product-detail.css";
import { useEffect } from "react";
const ProductDetails = () => {
  // get id product in url
  let { id } = useParams();
  const [rating, setRating] = useState(0);

  //get product by Id
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    category,
    description,
    shortDesc,
  } = product;

  const relatedProduct = products.filter((item) => item.category === category);
  const dispatch = useDispatch();
  const [tap, setTap] = useState("desc");

  const reviewMsg = useRef("");
  const reviewUser = useRef("");
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        image: product.imgUrl,
      })
    );
    toast.success("product added");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value.toString();
    const reviewUserMsg = reviewMsg.current.value;
    console.log(reviewUserName, reviewUserMsg, rating);
    const reviewObj = {
      userName: reviewUserName,
      UserMsg: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success("Review Submited");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(product)

  }, [product]);
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <motion.img whileTap={{ scale: 1.1 }} src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__detail ">
                <h2>{productName}</h2>
                <div className="product__rating mt-3 d-flex align-items-center gap-5">
                  <div>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-fill"></i>
                    </span>
                  </div>
                  <span className="rating">
                    ({avgRating})<p> rating</p>
                  </span>
                </div>
                <span className="price">{price} MAD</span>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="by__btn"
                  onClick={addToCart}
                >
                  Add To Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tap__wrapper d-flex align-items-conter gap-5">
                <h6
                  className={`${tap === "desc" ? "active__tap" : ""}`}
                  onClick={() => setTap("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tap === "rev" ? "active__tap" : ""}`}
                  onClick={() => setTap("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              <div className="tap__content mt-4">
                {tap === "desc" ? (
                  <p>{description}</p>
                ) : (
                  <div className="product__review">
                    <div className="review__wrapper">
                      <ul>
                        {reviews?.map((item, index) => (
                          <>
                            <li key={index}>
                              <span>{item.rating} (rating)</span>
                              <p>{item.text}</p>
                            </li>
                          </>
                        ))}
                      </ul>

                      <div className="review__form">
                        <h2>leave your experience</h2>
                        <form action="" onSubmit={submitHandler}>
                          <div className="form__group">
                            <input
                              type="text"
                              placeholder="Enter Name"
                              ref={reviewUser}
                              required
                            />
                          </div>
                          <div className="form__group">
                            <motion.span
                              whileTap={{ scale: 1.3 }}
                              onClick={() => setRating(1)}
                            >
                              {" "}
                              1 <i class="ri-star-fill"></i>
                            </motion.span>
                            <motion.span
                              whileTap={{ scale: 1.1 }}
                              onClick={() => setRating(2)}
                            >
                              {" "}
                              2 <i class="ri-star-fill"></i>
                            </motion.span>
                            <motion.span
                              whileTap={{ scale: 1.1 }}
                              onClick={() => setRating(3)}
                            >
                              {" "}
                              3 <i class="ri-star-fill"></i>
                            </motion.span>
                            <motion.span
                              whileTap={{ scale: 1.1 }}
                              onClick={() => setRating(4)}
                            >
                              {" "}
                              4 <i class="ri-star-fill"></i>
                            </motion.span>
                            <motion.span
                              whileTap={{ scale: 1.1 }}
                              onClick={() => setRating(5)}
                            >
                              {" "}
                              5 <i class="ri-star-fill"></i>
                            </motion.span>
                          </div>
                          <div className="form__group">
                            <textarea
                              ref={reviewMsg}
                              required
                              rows={4}
                              placeholder="review message ..."
                            />
                          </div>
                          <motion.button
                            whileTap={{ scale: 1.1 }}
                            className="by__btn"
                          >
                            Submit
                          </motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Col>
            <Col lg="12">
              {" "}
              <h1 className="related__product">you might also like </h1>
            </Col>
            <ProductList data={relatedProduct} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
