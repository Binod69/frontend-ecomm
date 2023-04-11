import React from 'react';
import Banner from '../Components/home-components/Banner';
import Saving from '../Components/home-components/Saving';
import FeaturedProducts from '../Components/home-components/FeaturedProducts';

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
