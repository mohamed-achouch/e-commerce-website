import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/product-cart.css";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from 'react-toastify';

const ProductCart = ({ item }) => {
  const dispatch = useDispatch();


  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );  
    toast.success('product added')
  };

  return (
    <> 
      <Col lg="3" md="4" className="mb-2">
        <div className="product__item">
          <div className="product__img">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={item.imgUrl}
              alt="imageProduct"
            />
          </div>
          <div className="p-2 product__info">
            <h3 className="product__name">
              <Link to={`/shop/${item.id}`}> {item.productName}</Link>
            </h3>
            <span>{item.category}</span>
          </div>
          <div className="product__cart-bottom d-flex align-items-center justify-content-between">
            <span className="price">{item.price} $</span>
            <motion.span whileTap={{ scale: 1.2 }}>
              <i class="ri-add-line" onClick={addToCart}></i>
            </motion.span>
          </div>
        </div>
      </Col>
    </>
 
  );
};

export default ProductCart;
