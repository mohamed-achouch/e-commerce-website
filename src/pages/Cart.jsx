import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../redux/slices/cartSlice";
import CommonSection from "../components/UI/CommonSection";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import "../styles/cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title={"Cart"}>
      <CommonSection title="Shopping Cart" />
      <Container>
        <Row>
          <Col lg="9">
            {cartItems.length === 0 ? (
              <h2 className="vide-product">0 Product</h2>
            ) : (
              <table className="table bordered hover">
                <thead>
                  <tr>
                    <th>Image Product</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <Tr item={item} key={index} />
                  ))}
                </tbody>
              </table>
            )}
          </Col>
          <Col lg="3">
            <div className="total__amount">
              <h6>SubTotal :</h6>
              <span>{totalAmount} $</span>
              <div className="buttons">
                <motion.button whileTap={{ scale: 1.1 }} className="by__btn">
                  <Link to="/shop">Continue Shipping</Link>
                </motion.button>
                <motion.button whileTap={{ scale: 1.1 }} className="by__btn">
                  <Link to="/checkout">CheckOut</Link>
                </motion.button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  const decrementItem = () => {
    dispatch(cartActions.decrement(item));
  };
  const IncrementItem = () => {
    dispatch(cartActions.increment(item));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>
        <span className="increment" onClick={IncrementItem}>
          +
        </span>
        {item.quantity}
        <span className="decrement" onClick={decrementItem}>
          -
        </span>
      </td>

      <td>
        <i class="ri-delete-bin-6-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
