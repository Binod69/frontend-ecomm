import React from 'react';
import Banner from '../Components/Banner';
import Saving from '../Components/Saving';
import FeaturedProducts from '../Components/FeaturedProducts';

const Home = () => {
  return (
    <>
      <Banner />
      <Saving />
      <FeaturedProducts title={'Featured Products'} />
    </>
  );
};

export default Home;
