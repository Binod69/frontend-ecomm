import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/image/logo.png';

const AuthNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm sticky">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="img img-fluid w-25" src={logo} alt={logo} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default AuthNav;
