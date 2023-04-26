import React from 'react';
import { Card, Heading } from '../index';

const Saving = () => {
  return (
    <div className="container py-5">
      <Heading title={'What We Offer :'} level={3} className={'py-2'} />
      <div className="row">
        <div className="col-lg-12 d-lg-flex justify-lg-content-center  align-items-lg-center gap-lg-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Saving;
