import React from 'react';
import { Banner, Saving, FeaturedProducts } from '../Components/index';

const Home = () => {
  return (
    <>
      <Banner />
      <Saving />
      <FeaturedProducts title={'Featured Products'} className={'py-3'} />
    </>
  );
};

export default Home;
