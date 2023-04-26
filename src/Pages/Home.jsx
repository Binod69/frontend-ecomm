import React from 'react';
import {
  Banner,
  Saving,
  FeaturedProducts,
  CardBanner,
} from '../Components/index';

const Home = () => {
  return (
    <>
      <Banner />
      <CardBanner />
      <Saving />
      <FeaturedProducts title={'Featured Products'} className={'py-3'} />
    </>
  );
};

export default Home;
