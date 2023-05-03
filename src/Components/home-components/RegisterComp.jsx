import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import AppConstant from '../../config/constants';
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
import authSvc from '../../services/auth.services';

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const RegisterComp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  let rules = Yup.object({
    name: Yup.string().min(3).required('name is a required field'),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    phone: Yup.string().required(),
    address: Yup.object({
      temp: Yup.object({
        state: Yup.string()
          .matches(
            /(koshi|bagmati|madhesh|gandaki|lumbini|karnali|far-western)/,
            'State name doesnot match'
          )
          .default(null),
        district: Yup.string().default(null),
        municipalityName: Yup.string().default(null),
        wardNo: Yup.number().default(null),
      }),
      perm: Yup.object({
        state: Yup.string()
          .matches(
            /(koshi|bagmati|madhesh|gandaki|lumbini|karnali|far-western)/,
            'State name doesnot match'
          )
          .default(null),
        district: Yup.string().default(null),
        municipalityName: Yup.string().default(null),
        wardNo: Yup.number().default(null),
      }),
    }),
    role: Yup.string()
      .matches(/(seller|customer)/, 'Role doesnot match')
      .default('customer'),
    image: Yup.string().default(null), //if array of object Yup.object().of(Yup.object())
    status: Yup.string().default('active'),
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
    },
    role: '',
    image: '',
    status: 'active',
  };

  const formik = useFormik({
    initialValues: inputDefaultValues,
    validationSchema: rules,
    onSubmit: async (values) => {
      try {
        let formData = new FormData();
        //except object and files
        //binding formData
        //multipart/form-data send
        Object.keys(values).forEach((field, index) => {
          if (field === 'image') {
            formData.append('image', values[field], values[field].name);
          } else if (field === 'address') {
            formData.append('address', JSON.stringify(values.address));
          } else {
            formData.append(field, values[field]);
          }
        });
        let response = await authSvc.register(formData);
        console.log(response);
      } catch (err) {
        console.log('registerlog:', err);
        throw err;
      }
    },
  });
  console.log(formik.values);
  console.log(formik.errors);

  useEffect(() => {
    let token = localStorage.getItem(AppConstant.AUTH_KEY);
    let user = JSON.parse(localStorage.getItem(AppConstant.AUTH_USER_KEY));
    if (token && user) {
      navigate('/' + user.role);
    }
  }, [navigate]);
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

                  <Form.Group as={Row} className="mb-3 pos-rel">
                    <Form.Label className="col-sm-3">Password :</Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="sm"
                        placeholder="Enter password"
                      />

                      <span className="pos-abs" onClick={toggleShowPassword}>
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
                          {formik.errors.address?.temp?.state &&
                          formik.touched.address?.temp?.state ? (
                            <span className="text-danger ">
                              {formik.errors.address?.temp?.state}
                            </span>
                          ) : null}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Select
                            defaultValue="District..."
                            name="address.temp.district"
                            size="sm"
                            onChange={(e) => {
                              let { value } = e.target;
                              formik.setValues({
                                ...formik.values,
                                address: {
                                  ...formik.values.address,
                                  temp: {
                                    ...formik.values.address.temp,
                                    district: value,
                                  },
                                },
                              });
                            }}
                          >
                            <option>District...</option>
                            <option>...</option>
                            <option>jhapa</option>
                            <option>bagmati</option>
                            <option>kathmandu</option>
                          </Form.Select>
                          {formik.errors.address?.temp?.district &&
                          formik.touched.address?.temp?.district ? (
                            <span className="text-danger ">
                              {formik.errors.address?.temp?.district}
                            </span>
                          ) : null}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Control
                            name="address.temp.municipalityName"
                            size="sm"
                            required
                            placeholder="Enter Municipality / Rural Development name"
                            onChange={(e) => {
                              let { value } = e.target;
                              formik.setValues({
                                ...formik.values,
                                address: {
                                  ...formik.values.address,
                                  temp: {
                                    ...formik.values.address.temp,
                                    municipalityName: value,
                                  },
                                },
                              });
                            }}
                          />

                          {formik.errors.address?.temp?.municipalityName &&
                          formik.touched.address?.temp?.municipalityName ? (
                            <span className="text-danger ">
                              {formik.errors.address?.temp?.municipalityName}
                            </span>
                          ) : null}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Control
                            name="address.temp.wardNo"
                            size="sm"
                            required
                            placeholder="Enter Ward Name"
                            onChange={(e) => {
                              let { value } = e.target;
                              formik.setValues({
                                ...formik.values,
                                address: {
                                  ...formik.values.address,
                                  temp: {
                                    ...formik.values.address.temp,
                                    wardNo: value,
                                  },
                                },
                              });
                            }}
                          />

                          {formik.errors.address?.temp?.wardNo &&
                          formik.touched.address?.temp?.wardNo ? (
                            <span className="text-danger ">
                              {formik.errors.address?.temp?.wardNo}
                            </span>
                          ) : null}
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
                          {formik.errors.address?.perm?.state &&
                          formik.touched.address?.perm?.state ? (
                            <span className="text-danger ">
                              {formik.errors.address?.perm?.state}
                            </span>
                          ) : null}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Select
                            defaultValue="District..."
                            name="address.perm.district"
                            size="sm"
                            onChange={(e) => {
                              let { value } = e.target;

                              formik.setValues({
                                ...formik.values,
                                address: {
                                  ...formik.values.address,
                                  perm: {
                                    ...formik.values.address.perm,
                                    district: value,
                                  },
                                },
                              });
                            }}
                          >
                            <option>District...</option>
                            <option>jhapa</option>
                            <option>bagmati</option>
                            <option>kathmandu</option>
                          </Form.Select>
                          {formik.errors.address?.perm?.district &&
                          formik.touched.address?.perm?.district ? (
                            <span className="text-danger ">
                              {formik.errors.address?.perm?.district}
                            </span>
                          ) : null}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Control
                            name="address.perm.municipalityName"
                            size="sm"
                            required
                            placeholder="Enter Municipality / Rural Development name"
                            onChange={(e) => {
                              let { value } = e.target;

                              formik.setValues({
                                ...formik.values,
                                address: {
                                  ...formik.values.address,
                                  perm: {
                                    ...formik.values.address.perm,
                                    municipalityName: value,
                                  },
                                },
                              });
                            }}
                          />

                          {formik.errors.address?.perm?.municipalityName &&
                          formik.touched.address?.perm?.municipalityName ? (
                            <span className="text-danger ">
                              {formik.errors.address?.perm?.municipalityName}
                            </span>
                          ) : null}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Control
                            name="address.perm.wardNo"
                            size="sm"
                            required
                            placeholder="Enter Ward Name"
                            onChange={(e) => {
                              let { value } = e.target;

                              formik.setValues({
                                ...formik.values,
                                address: {
                                  ...formik.values.address,
                                  perm: {
                                    ...formik.values.address.perm,
                                    wardNo: value,
                                  },
                                },
                              });
                            }}
                          />

                          {formik.errors.address?.perm?.wardNo &&
                          formik.touched.address?.perm?.wardNo ? (
                            <span className="text-danger ">
                              {formik.errors.address?.perm?.wardNo}
                            </span>
                          ) : null}
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
                          let { value } = e.target;
                          formik.setValues({
                            ...formik.values,
                            role: value,
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
