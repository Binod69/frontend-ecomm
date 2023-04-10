import React, { useState, useEffect } from 'react';
// import AuthBtn from './ui/AuthBtn';
import { Link } from 'react-router-dom';
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineUser,
  AiOutlineHome,
} from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import 'animate.css';

const Nav = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary shadow-sm   ${
        isSticky ? 'fixed-top animate__animated animate__slideInDown' : ' '
      }`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Ecommerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <AiOutlineHome className="mb-1" /> Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BiCategoryAlt className="mb-1" /> Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/category/:catslug">
                    Electronics
                  </Link>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <Link className="dropdown-item" to="/">
                    Fashion
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Furniture
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav">
            <form className="d-flex order-1 order-lg-1 " role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>

            <li className="nav-item order-lg-2">
              <Link className="nav-link" to="/">
                <AiOutlineShoppingCart className="mb-1" /> Cart (0)
              </Link>
            </li>
            <li className="nav-item order-lg-3">
              <Link className="nav-link " to="/login">
                {/* <AuthBtn
                  title={'Login'}
                  icon={<AiOutlineUser className="mb-1 me-1" />}
                /> */}
                <AiOutlineUser className="mb-1" /> Login
              </Link>
            </li>

            <li className="nav-item order-lg-4">
              <Link className="nav-link " to="/signup">
                {/* <AuthBtn
                  title={'Sign Up'}
                  icon={<AiOutlineUserAdd className="mb-1 me-1" />}
                /> */}
                <AiOutlineUserAdd className="mb-1" /> Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
