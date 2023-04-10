import React, { useState, useEffect } from 'react';
import SliderComponent from '../slider/SliderComponents';

//image import
import banner1 from '../../../assets/image/banner1.jpg';
import banner2 from '../../../assets/image/banner2.jpg';
import banner3 from '../../../assets/image/banner3.jpg';
import banner4 from '../../../assets/image/banner4.jpg';
import banner5 from '../../../assets/image/banner5.jpg';
import banner6 from '../../../assets/image/banner6.jpg';

const HomeBanner = () => {
  const [banner, setBanner] = useState();

  const loadBanner = async () => {
    //TODO: API CALL

    let ApiResponse = [
      {
        id: 1,
        image: banner1,
        title: 'Title One',
        link: '',
      },
      {
        id: 2,
        title: 'Title Two',
        image: banner2,
        link: '',
      },
      {
        id: 3,
        title: 'Title Three',
        image: banner3,
        link: '',
      },
      {
        id: 4,
        title: 'Title Four',
        image: banner4,
        link: '',
      },
      {
        id: 5,
        title: 'Title Five',
        image: banner5,
        link: '',
      },
      {
        id: 6,
        title: 'Title six',
        image: banner6,
        link: '',
      },
    ];
    setBanner(ApiResponse);
  };

  //TODO:
  useEffect(() => {
    loadBanner();
  }, []);
  return (
    <>
      <SliderComponent data={banner} />
    </>
  );
};

export default HomeBanner;
