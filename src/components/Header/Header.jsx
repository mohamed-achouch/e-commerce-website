import React ,{useRef,useEffect}from "react";
import "./header.css";
import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";
import { Container, Row } from "reactstrap";
import { NavLink,useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {useSelector} from 'react-redux'

  const nav_link = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "shop",
      display: "Shop",
    },
    {
      path: "Cart",
      display: "cart",
    },
  ];
const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const [ismobile,setIsmobile] = useState(true);
  const totalQuantity  = useSelector(state=> state.cart.totalQuantity);

const navigateToCart = ()=>{
  navigate("/cart")
}

   const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
      {
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
   }
useEffect(()=>{
  stickyHeaderFunc()
  return () => window.removeEventListener('scroll',stickyHeaderFunc);
})

  return (
    <header className="header"  ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>ShopAch</h1>
              </div>
            </div>
            <div className="navigation">
    <ul className={ismobile ? "menu":"menu-open" } >
                {nav_link.map((item, index) => (
                  <li className="nav__item" key={index} >
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">2</span>
              </span>
              <span className="cart__icon" onClick={()=> navigateToCart()}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span className="user-icon">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={user_icon}
                  alt="user"
                />
              </span>
            </div>
            <div className="mobile__menu">
              <span onClick={()=> setIsmobile(!ismobile)}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
