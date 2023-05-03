import { NavLink } from 'react-router-dom';
import { FaHome, FaImages, FaUsers } from 'react-icons/fa';
import { TbBrandAsana } from 'react-icons/tb';
import { BiCategoryAlt } from 'react-icons/bi';
import { MdProductionQuantityLimits } from 'react-icons/md';
import {
  BsFillBagFill,
  BsReverseLayoutTextWindowReverse,
  BsFillCreditCard2FrontFill,
} from 'react-icons/bs';
import { AiOutlineCoffee } from 'react-icons/ai';

const AdminSideBar = () => {
  return (
    <>
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Home</div>
            <NavLink className="nav-link" to="/" target="_blank">
              <div className="sb-nav-link-icon">
                <FaHome />
              </div>
              Home
            </NavLink>
            <div className="sb-sidenav-menu-heading">Modules</div>
            <NavLink className="nav-link" to="/admin/banner">
              <div className="sb-nav-link-icon">
                <FaImages />
              </div>
              Banner Module
            </NavLink>
            <NavLink className="nav-link" to="/admin/brand">
              <div className="sb-nav-link-icon">
                <TbBrandAsana />
              </div>
              Brand Module
            </NavLink>

            <NavLink className="nav-link" to="/admin/category">
              <div className="sb-nav-link-icon">
                <BiCategoryAlt />
              </div>
              Category Module
            </NavLink>
            <NavLink className="nav-link" to="/admin/user">
              <div className="sb-nav-link-icon">
                <FaUsers />
              </div>
              User Module
            </NavLink>
            <NavLink className="nav-link" to="/admin/product">
              <div className="sb-nav-link-icon">
                <MdProductionQuantityLimits />
              </div>
              Product Module
            </NavLink>
            <NavLink className="nav-link" to="/admin/order">
              <div className="sb-nav-link-icon">
                <BsFillBagFill />
              </div>
              Order Module
            </NavLink>

            <div className="sb-sidenav-menu-heading">Services</div>
            <NavLink className="nav-link" to="/admin/offer">
              <div className="sb-nav-link-icon">
                <AiOutlineCoffee />
              </div>
              Offer Module
            </NavLink>
            <NavLink className="nav-link" to="/admin/review">
              <div className="sb-nav-link-icon">
                <BsReverseLayoutTextWindowReverse />
              </div>
              Review Module
            </NavLink>
            <NavLink className="nav-link" to="/admin/payment">
              <div className="sb-nav-link-icon">
                <BsFillCreditCard2FrontFill />
              </div>
              Payment Module
            </NavLink>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </>
  );
};

export default AdminSideBar;
