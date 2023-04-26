import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Heading from '../../typography/Heading';
import { Link } from 'react-router-dom';

const CardComponents = ({ data }) => {
  return (
    <>
      <Container className="my-3">
        <Heading title={'Browse By Category :'} level={3} className={'py-2'} />
        <Row md={4} className="g-4">
          {data &&
            data.map((item, index) => (
              <div key={index} className="col">
                <div className="card">
                  <div className="card-body">
                    <Heading
                      className={'card-title'}
                      title={item.title}
                      level={5}
                    />
                    <Link to={'/'}>
                      <img
                        src={item.img}
                        className="card-img-top"
                        alt={item.title}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CardComponents;
