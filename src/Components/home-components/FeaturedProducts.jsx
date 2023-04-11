import React from 'react';

import '../style/feature.scss';

import FeaturedCards from './featuredcards/FeaturedCards';
import { Heading } from '../typography/Heading';

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
