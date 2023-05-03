import { useState } from 'react';
import { FaRegUser, FaBars } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import AppConstant from '../../../config/constants';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { PasswordInputComponent } from '../../../Components/input/Input.component';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { MdLockReset } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import authSvc from '../../../services/auth.services';
import { toast } from 'react-toastify';
import ActionButton from '../../../Components/input/Action.button';
import LoadingBtn from '../../../Components/loadingbtn/Loading.Btn';
// import { AiFillEye, AiTwotoneEyeInvisible } from 'react-icons/ai';

const AdminTopNav = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [showPassword, setShowPassword] = useState();

  // const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    document.body.classList.toggle('sb-sidenav-toggled');
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem(AppConstant.AUTH_KEY);
    localStorage.removeItem(AppConstant.AUTH_USER_KEY);
    navigate('/login');
  };
  const passwordSchema = Yup.object({
    old_password: Yup.string().required(),
    new_password: Yup.string().min(8).required(),
    re_new_password: Yup.string()
      .min(8)
      .oneOf([Yup.ref('new_password'), null], 'Password Does not Match')
      .required(),
  });

  const formik = useFormik({
    initialValues: {
      current_password: null,
      new_password: null,
      re_type_password: null,
    },
    validationSchema: passwordSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await authSvc.updatePassword(values);
        toast.success('Password updated successfully');
        localStorage.removeItem(AppConstant.AUTH_KEY);
        localStorage.removeItem(AppConstant.AUTH_USER_KEY);
        navigate('/login');
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  });
  // console.log(formik.values);

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <NavLink className="navbar-brand ps-3 text-light" to={'/admin'}>
          Admin Panel
        </NavLink>

        <button
          onClick={handleClick}
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
        >
          <FaBars />
        </button>
        <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></div>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaRegUser className="text-light" />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <NavLink className="dropdown-item" to="/">
                  <CgProfile /> Update Profile
                </NavLink>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <NavLink onClick={handleShow} className="dropdown-item" to="/">
                  <MdLockReset /> Change Password
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <NavLink
                  onClick={logout}
                  className="dropdown-item"
                  to={'/login'}
                >
                  <RiLogoutCircleLine /> Logout
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        size="lg"
        onHide={handleClose}
      >
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="adminpos">
                <PasswordInputComponent
                  // type={showPassword ? 'text' : 'password'}
                  error={formik.errors.current_password}
                  changeEvent={formik.handleChange}
                  label={'Current Password'}
                  placeholder={'Enter Your Current Password'}
                  name={'old_password'}
                />
                {/* {
                  <span className="adminpointer1" onClick={toggleShowPassword}>
                    {showPassword ? (
                      <>
                        <AiFillEye />
                      </>
                    ) : (
                      <>
                        <AiTwotoneEyeInvisible />
                      </>
                    )}
                  </span>
                } */}
                <PasswordInputComponent
                  // type={showPassword ? 'text' : 'password'}
                  error={formik.errors.new_password}
                  changeEvent={formik.handleChange}
                  label={'New Password'}
                  placeholder={'Enter Your New Password'}
                  name={'new_password'}
                />
                {/* {
                  <span className="adminpointer2" onClick={toggleShowPassword}>
                    {showPassword ? (
                      <>
                        <AiFillEye />
                      </>
                    ) : (
                      <>
                        <AiTwotoneEyeInvisible />
                      </>
                    )}
                  </span>
                } */}
                <PasswordInputComponent
                  // type={showPassword ? 'text' : 'password'}
                  error={formik.errors.re_type_password}
                  changeEvent={formik.handleChange}
                  label={'Confirm Password'}
                  placeholder={'Enter Your New Password'}
                  name={'re_new_password'}
                />
                {/* {
                  <span className="adminpointer3" onClick={toggleShowPassword}>
                    {showPassword ? (
                      <>
                        <AiFillEye />
                      </>
                    ) : (
                      <>
                        <AiTwotoneEyeInvisible />
                      </>
                    )}
                  </span>
                } */}
              </div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            {loading ? (
              <>
                <LoadingBtn />
              </>
            ) : (
              <>
                <ActionButton
                  disabled={loading}
                  cancelText="Cancel"
                  submitText="Update Password"
                />
              </>
            )}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AdminTopNav;
