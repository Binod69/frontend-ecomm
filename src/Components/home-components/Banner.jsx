import React from 'react';

// card banner import
import { HomeBanner, CardBanner } from '../index';

const Banner = () => {
  return (
    <div className="overflow-hidden banner-rel">
      <HomeBanner />
      <div className="container  banner-abs ">
        <div className="row w-100  row-cols-1 row-cols-md-4 g-4">
          <CardBanner />
        </div>
      </div>
    </div>
  );
};

export default Banner;
