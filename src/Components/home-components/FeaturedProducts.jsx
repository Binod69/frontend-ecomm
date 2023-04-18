import React from 'react';

import '../style/feature.scss';

import { FeaturedCards, Heading } from '../index';

const FeaturedProducts = ({ title, className }) => {
  return (
    <div className="container py-5">
      <Heading className={className} level={3} title={title} />
      <div className="row">
        <FeaturedCards />
      </div>
    </div>
  );
};

export default FeaturedProducts;
