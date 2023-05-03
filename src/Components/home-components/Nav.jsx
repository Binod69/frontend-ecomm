import React from 'react';
// import AuthBtn from './ui/AuthBtn';
import { Link, NavLink } from 'react-router-dom';
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineUser,
  // AiOutlineHome,
} from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import logo from '../../assets/image/logo.png';
import AppConstant from '../../config/constants';

const Nav = () => {
  let user = JSON.parse(localStorage.getItem(AppConstant.AUTH_USER_KEY));
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm sticky">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="img img-fluid w-25" src={logo} alt={logo} />
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
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <AiOutlineHome className="mb-1" /> Home
              </Link>
            </li> */}
            <form className="d-flex order-1 order-lg-1 " role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="q"
              />
            </form>
          </ul>
          <ul className="navbar-nav">
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
                  <NavLink
                    className="dropdown-item"
                    to="/category/clothing/mens"
                  >
                    Men's Clothing
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item order-lg-2">
              <NavLink className="nav-link" to="/">
                <AiOutlineShoppingCart className="mb-1" /> Cart (0)
              </NavLink>
            </li>
            {user ? (
              <>
                <li className="nav-item order-lg-3">
                  <NavLink className="nav-link " to={'/' + user.role}>
                    <AiOutlineUser className="mb-1" /> {user.name}
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item order-lg-3">
                  <NavLink className="nav-link " to="/login">
                    {/* <AuthBtn
                  title={'Login'}
                  icon={<AiOutlineUser className="mb-1 me-1" />}
                /> */}
                    <AiOutlineUser className="mb-1" /> Login
                  </NavLink>
                </li>

                <li className="nav-item order-lg-4">
                  <NavLink className="nav-link " to="/signup">
                    {/* <AuthBtn
                  title={'Sign Up'}
                  icon={<AiOutlineUserAdd className="mb-1 me-1" />}
                /> */}
                    <AiOutlineUserAdd className="mb-1" /> Signup
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
