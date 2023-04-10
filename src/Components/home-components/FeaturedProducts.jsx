import React from 'react';

import '../style/feature.scss';

import FeaturedCards from './featuredcards/FeaturedCards';

const FeaturedProducts = ({ title }) => {
  return (
    <div className="container py-5">
      <h3 className="py-3">{title}</h3>
      <div className="row">
        <FeaturedCards />
      </div>
    </div>
  );
};

export default FeaturedProducts;
