import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Heading } from '../index';

import { BiReset } from 'react-icons/bi';
import { FaRegPaperPlane } from 'react-icons/fa';

import registerimg from '../../assets/image/register2-removebg-preview.png';
import '../style/logincomp.scss';

const RegisterComp = () => {
  let rules = Yup.object({
    name: Yup.string().min(3).required('name is a required field'),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    phone: Yup.string().required(),
    address: Yup.object({
      temp: Yup.object({
        state: Yup.string()
          .matches(
            '/(koshi|bagmati|madhesh | gandaki|lumbini|karnali|far-western)/'
          )
          .default(null),
        district: Yup.string().default(null),
        municipalityName: Yup.string().default(null),
        wardNo: Yup.number().default(null),
      }),
      perm: Yup.object({
        state: Yup.string()
          .matches(
            '/(koshi|bagmati|madhesh | gandaki|lumbini|karnali|far-western)/'
          )
          .default(null),
        district: Yup.string().default(null),
        municipalityName: Yup.string().default(null),
        wardNo: Yup.number().default(null),
      }),
      role: Yup.string().matches('/(seller | customer)/').default('customer'),
      image: Yup.object().default(null), //if array of object Yup.object().of(Yup.object())
    }),
  });

  let inputDefaultValues = {
    name: '',
    email: '',
    password: '',
    phone: '',
    address: {
      temp: {
        state: '',
        district: '',
        municipalityName: '',
        wardNo: '',
      },
      perm: {
        state: '',
        district: '',
        municipalityName: '',
        wardNo: '',
      },
      role: '',
      image: '',
      status: 'inactive',
    },
  };

  const formik = useFormik({
    initialValues: inputDefaultValues,
    validationSchema: rules,
    onSubmit: (values) => {},
  });
  console.log(formik.values);
  console.log(formik.errors);
  return (
    <>
      <Container className="my-5">
        <Row className="py-2">
          <Col lg={6} className="right-side">
            <Card>
              <div className="title-back">
                <Heading level={2} title={'Register'} className={'ms-3 my-1'} />
              </div>
              <Form onSubmit={formik.handleSubmit}>
                <Card.Body>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="col-sm-3">Name :</Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        name="name"
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="sm"
                        placeholder="Enter name"
                      />
                      {formik.errors.name && formik.touched.name ? (
                        <span className="text-danger pl-3">
                          {formik.errors.name}
                        </span>
                      ) : null}
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="col-sm-3">Email :</Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="email"
                        name="email"
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="sm"
                        placeholder="Enter email"
                      />
                      {formik.errors.email && formik.touched.email ? (
                        <span className="text-danger pl-3">
                          {formik.errors.email}
                        </span>
                      ) : null}
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="col-sm-3">Password :</Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="password"
                        name="password"
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="sm"
                        placeholder="Enter password"
                      />
                      {formik.errors.password && formik.touched.password ? (
                        <span className="text-danger pl-3">
                          {formik.errors.password}
                        </span>
                      ) : null}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="col-sm-3">
                      Address (Temp) :
                    </Form.Label>
                    <Col sm={9}>
                      <Row>
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Select
                            defaultValue="State..."
                            name="address.temp.state"
                            size="sm"
                            onChange={(e) => {
                              let { value } = e.target;

                              formik.setValues({
                                ...formik.values,
                                address: {
                                  ...formik.values.address,
                                  temp: {
                                    ...formik.values.temp,
                                    state: value,
                                  },
                                },
                              });

                              //writing custom validation
                              // setData({
                              //   ...data,
                              //   address: {
                              //     ...data.address,
                              //     temp:{
                              //       ...data.address.temp,
                              //       state: value
                              //     }
                              //   }
                              // })
                            }}
                          >
                            <option>State...</option>
                            <option value={'koshi'}>Koshi Pradesh</option>
                            <option value={'madesh'}>Madesh Pradesh</option>
                            <option value={'bagmati'}>Bagmati Pradesh</option>
                            <option value={'gandaki'}>Gandaki Pradesh</option>
                            <option value={'lumbini'}>Lumbini Pradesh</option>
                            <option value={'karnali'}>Karnali Pradesh</option>
                            <option value={'far-western'}>
                              Far-Western State
                            </option>
                          </Form.Select>
                          {formik.errors?.state && formik.touched?.state ? (
                            <span className="text-danger ">
                              {formik.errors?.state}
                            </span>
                          ) : null}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Select
                            defaultValue="District..."
                            name="address.temp.district"
                            size="sm"
                          >
                            <option>District...</option>
                            <option>...</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Control
                            name="address.temp.municipalityName"
                            size="sm"
                            required
                            placeholder="Enter Municipality / Rural Development name"
                          />

                          <span className="text-danger"></span>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Control
                            name="address.temp.wardNo"
                            size="sm"
                            required
                            placeholder="Enter Ward Name"
                          />

                          <span className="text-danger"></span>
                        </Form.Group>
                      </Row>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="col-sm-3">
                      Address (perma) :
                    </Form.Label>
                    <Col sm={9}>
                      <Row>
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Select
                            defaultValue="State..."
                            name="address.perm.state"
                            size="sm"
                            onChange={(e) => {
                              let { value } = e.target;

                              formik.setValues({
                                ...formik.values,
                                address: {
                                  ...formik.values.address,
                                  perm: {
                                    ...formik.values.perm,
                                    state: value,
                                  },
                                },
                              });

                              //writing custom validation
                              // setData({
                              //   ...data,
                              //   address: {
                              //     ...data.address,
                              //     temp:{
                              //       ...data.address.temp,
                              //       state: value
                              //     }
                              //   }
                              // })
                            }}
                          >
                            <option>State...</option>
                            <option value={'koshi'}>Koshi Pradesh</option>
                            <option value={'madesh'}>Madesh Pradesh</option>
                            <option value={'bagmati'}>Bagmati Pradesh</option>
                            <option value={'gandaki'}>Gandaki Pradesh</option>
                            <option value={'lumbini'}>Lumbini Pradesh</option>
                            <option value={'karnali'}>Karnali Pradesh</option>
                            <option value={'far-western'}>
                              Far-Western Pradesh
                            </option>
                          </Form.Select>
                          {formik.errors?.state && formik.touched?.state ? (
                            <span className="text-danger ">
                              {formik.errors?.state}
                            </span>
                          ) : null}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Select
                            defaultValue="District..."
                            name="address.perm.district"
                            size="sm"
                          >
                            <option>District...</option>
                            <option>...</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Control
                            name="address.perm.municipalityName"
                            size="sm"
                            required
                            placeholder="Enter Municipality / Rural Development name"
                          />

                          <span className="text-danger"></span>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Control
                            name="address.perm.wardNo"
                            size="sm"
                            required
                            placeholder="Enter Ward Name"
                          />

                          <span className="text-danger"></span>
                        </Form.Group>
                      </Row>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="col-sm-3">Phone :</Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="tel"
                        name="phone"
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="sm"
                        placeholder="Enter phone number"
                      />
                      {formik.errors?.phone && formik.touched?.phone ? (
                        <span className="text-danger ">
                          {formik.errors?.phone}
                        </span>
                      ) : null}
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="col-sm-3">Role :</Form.Label>
                    <Col sm={9}>
                      <Form.Select
                        size="sm"
                        name="role"
                        required
                        defaultValue="Choose..."
                        onChange={(e) => {
                          formik.setValues({
                            ...formik.values,
                            role: e.target.role,
                          });
                        }}
                        onBlur={formik.handleBlur}
                      >
                        <option>Choose...</option>
                        <option value={'seller'}>Seller</option>
                        <option value={'customer'}>Customer</option>
                      </Form.Select>
                      {formik.errors?.role && formik.touched?.role ? (
                        <span className="text-danger ">
                          {formik.errors?.role}
                        </span>
                      ) : null}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="col-sm-3">Image :</Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="file"
                        name="image"
                        required
                        size="sm"
                        accept="image"
                        onChange={(e) => {
                          formik.setValues({
                            ...formik.values,
                            image: e.target.files[0],
                          });
                        }}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.image && formik.touched.image ? (
                        <span className="text-danger ">
                          {formik.errors.image}
                        </span>
                      ) : null}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Col sm={{ offset: 3, span: 9 }}>
                      <Button
                        type="reset"
                        variant="danger"
                        className=" me-3"
                        onChange={formik.handleReset}
                      >
                        <BiReset /> Reset
                      </Button>
                      <Button type="submit" variant="success" className="me-3">
                        <FaRegPaperPlane /> Register
                      </Button>
                    </Col>
                    {/* <Col sm={{ offset: 3, span: 9 }}>
                      <Button className="btn-danger">
                        <FaRegPaperPlane /> Register
                      </Button>
                    </Col> */}
                  </Form.Group>
                </Card.Body>
              </Form>
            </Card>
          </Col>
          <Col className="left-side" lg={6}>
            <img className="img img-fluid" src={registerimg} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterComp;
