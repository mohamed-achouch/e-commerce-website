import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import './footer.css'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <h1 className="footer_title">ShopAch</h1>
              </div>             
            </div>
            <p className="footer__text mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                voluptas dignissimos quasi? Sint reprehenderit, nam sit minima
                velit quas quo.
              </p>
          </Col>
          <Col lg="3">
            <div className="footer__quich-links">
              <h4 className="quich__links-title mb-2">Top Categories</h4>
           <ListGroup className="mb-3">
            <ListGroupItem className="ps-0 border-0">
              <Link to="#">Mobile Phones</Link>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0 mb-2">
              <Link to="#">Modern Sofa</Link>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0 ">
              <Link to="#">Arm Chair</Link>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0">
              <Link to="#">Smart Watches</Link>
            </ListGroupItem>
           </ListGroup>
          </div>
          </Col>
          <Col lg="2">
          <div className="footer__quich-links">
              <h4 className="quich__links-title mb-2">Useful Links</h4>
           <ListGroup className="mb-3">
            <ListGroupItem className="ps-0 border-0">
              <Link to="/shop">Shop</Link>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0">
              <Link to="/cart">Cart</Link>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0">
              <Link to="/login">Login</Link>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0">
              <Link to="#">Privacy Policy</Link>
            </ListGroupItem>
           </ListGroup>
          </div>
          </Col>
          <Col lg="3">
          <div className="footer__quich-links">
              <h4 className="quich__links-title mb-2">Contact</h4>
           <ListGroup className="mb-3">
            <ListGroupItem className="ps-0 border-0 d-flex gap-2">
              <span><i class="ri-map-pin-line"></i></span>
              <p>2112 Rabat Morocco</p>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0 d-flex gap-2">
            <span><i class="ri-phone-line"></i></span>
           <p>+212 682147043</p>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0 d-flex gap-2">
              <span><i class="ri-mail-line"></i></span>
              <p>mohamedachouch123@gmail.com</p>
            </ListGroupItem>
           </ListGroup>
          </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">CopyRight {year} developed by mohamed achouch. all rights reserved. </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
