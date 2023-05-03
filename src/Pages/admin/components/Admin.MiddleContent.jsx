import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AdminMiddleContent = () => {
  return (
    <>
      <div className="container-fluid px-4">
        <h1 className="mt-4">DashBoard</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            <a href="index.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Static Navigation</li>
        </ol>
        <Row>
          <Col>
            <div
              className="card text-bg-primary mb-3"
              style={{ maxWidth: '18rem' }}
            >
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <div />
        <div className="card mb-4">
          <div className="card-body">
            When scrolling, the navigation stays at the top of the page. This is
            the end of the static navigation demo.
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMiddleContent;
