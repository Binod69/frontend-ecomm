import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../style/logincomp.scss';
import { toast } from 'react-toastify';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { BiReset, BiPaperPlane, BiArrowBack } from 'react-icons/bi';
import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs';
import loginimg from '../../assets/image/login-img.svg';

import { Heading } from '../index';
import authSvc from '../../services/auth.services';
import { ToastContainer } from 'react-bootstrap';
import AppConstant from '../../config/constants';
import { Circles } from 'react-loader-spinner';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const LoginComp = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  let rules = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  let formik = useFormik({
    initialValues: {
      email: null,
      password: null,
    },
    validationSchema: rules,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        let response = await authSvc.login(values);
        toast.success(response.msg);
        navigate('/' + response.userDetail.role);
      } catch (err) {
        toast.error(err.data.msg);
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    let token = localStorage.getItem(AppConstant.AUTH_KEY);
    let user = JSON.parse(localStorage.getItem(AppConstant.AUTH_USER_KEY));
    if (token && user) {
      navigate('/' + user.role);
    }
  }, [navigate]);

  return (
    <>
      <ToastContainer />
      <div className="background">
        <Container>
          <Link to={'/'}>
            <BiArrowBack />
            Go back
          </Link>
          <Row className="center">
            <Col lg={4}>
              <Form onSubmit={formik.handleSubmit}>
                <Card className="shadow">
                  <div className="title-back">
                    <Heading
                      level={2}
                      title={'Login'}
                      className={'ms-3 my-1'}
                    />
                  </div>

                  <Col>
                    <Card.Body>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        required
                        placeholder="Enter Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.email && formik.touched.email ? (
                        <span className="text-danger pl-3">
                          {formik.errors.email}
                        </span>
                      ) : null}
                    </Card.Body>
                  </Col>
                  <Col>
                    <Card.Body>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <div className="pos">
                          <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            required
                            placeholder="Enter Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span
                            className="pointer"
                            onClick={toggleShowPassword}
                          >
                            {showPassword ? (
                              <>
                                <AiOutlineEyeInvisible />
                              </>
                            ) : (
                              <>
                                <AiOutlineEye />
                              </>
                            )}
                          </span>
                        </div>
                        {formik.errors.password && formik.touched.password ? (
                          <span className="text-danger pl-3">
                            {formik.errors.password}
                          </span>
                        ) : null}
                      </Form.Group>
                      <Form.Group
                        className="mb-1"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                    </Card.Body>
                  </Col>
                  <Col>
                    <Button
                      type="Reset"
                      variant="btn btn-danger"
                      className="me-2 ms-3"
                    >
                      <BiReset /> Reset
                    </Button>

                    <Button
                      disabled={loading}
                      type="submit"
                      variant="btn btn-success"
                      className="me-2 ms-3 my-2"
                    >
                      {loading ? (
                        <>
                          <Circles
                            height="80"
                            width="80"
                            color="#fff"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                          />
                        </>
                      ) : (
                        <>
                          <BiPaperPlane /> Login
                        </>
                      )}
                    </Button>
                  </Col>
                  <hr />
                  <Col>
                    <p className="ms-3 py-2">Or Login With:</p>
                    <Link to={'/'}>
                      <Button className="ms-3 mb-3" variant="outline-success">
                        <BsGoogle className="icon" /> Google
                      </Button>
                    </Link>

                    <Link to={'/'}>
                      <Button className="ms-2 mb-3" variant="outline-success">
                        <BsFacebook className="icon" /> Facebook
                      </Button>
                    </Link>
                    <Link to={'/'}>
                      <Button className="ms-2 mb-3" variant="outline-success">
                        <BsTwitter className="icon" /> Twitter
                      </Button>
                    </Link>
                  </Col>

                  <span className="py-2 ms-3">
                    Dont have an account ?
                    <Link className="ms-2" to={'/signup'}>
                      Create an Account
                    </Link>
                  </span>
                </Card>
              </Form>
            </Col>
            <Col className="d-none d-lg-block" lg={8}>
              <figure className="shadow">
                <img className="img img-fluid" src={loginimg} alt="" />
              </figure>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LoginComp;
