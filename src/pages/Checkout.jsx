import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import "../styles/checkout.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const Checkout = () => {
  return (
    <Helmet title="Check-Out">
      <CommonSection title="CheckOut" />
      <Container>
        <Row>
          <Col lg="8">
            <Form>
              <h4 className="mb-4"> Billing information</h4>
              <FormGroup className="form__group">
                <input type="text" placeholder="enter your name" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="email" placeholder="enter your email" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="phone number" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="street adress" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="city" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="postal code" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="Country" />
              </FormGroup>
            </Form>
          </Col>
          <Col lg="4">
            <div className="checkout__cart">
              <h6>Total Quantity : <span>0</span></h6>
              <h6>SubTotal : <span>120 $</span></h6>
              <h6>Shipping : <span>0</span></h6>
              <h6>Free Chipping</h6>
              <h4>Total Cost :120 $</h4>
            </div>
            <button className="by__btn">Place an order</button>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Checkout;
