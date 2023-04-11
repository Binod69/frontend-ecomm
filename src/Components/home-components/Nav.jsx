import React, { useRef, useEffect } from 'react';
// import AuthBtn from './ui/AuthBtn';
import { Link, NavLink } from 'react-router-dom';
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineUser,
  AiOutlineHome,
} from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';

const Nav = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        ref.current.classList.add('sticky');
      } else {
        ref.current.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary shadow-sm sticky"
      ref={ref}
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
                  <NavLink className="dropdown-item" to="/category/electronic">
                    Electronics
                  </NavLink>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <NavLink className="dropdown-item" to="/category/clothing">
                    Clothing
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/clothing/mens">
                    Men's Clothing
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
                name="q"
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
