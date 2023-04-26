import React, { useState, useEffect } from 'react';
import { SliderComponent } from '../../index';

//image import
import banner1 from '../../../assets/image/1.webp';
import banner2 from '../../../assets/image/2.webp';
import banner3 from '../../../assets/image/3.webp';
import banner4 from '../../../assets/image/4.webp';
import banner5 from '../../../assets/image/5.webp';
import banner6 from '../../../assets/image/6.webp';
import banner7 from '../../../assets/image/7.webp';
import banner8 from '../../../assets/image/8.webp';
import banner9 from '../../../assets/image/9.webp';
import banner10 from '../../../assets/image/10.webp';

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
      {
        id: 7,
        title: 'Title seven',
        image: banner7,
        link: '',
      },
      {
        id: 8,
        title: 'Title eight',
        image: banner8,
        link: '',
      },
      {
        id: 9,
        title: 'Title nine',
        image: banner9,
        link: '',
      },
      {
        id: 10,
        title: 'Title ten',
        image: banner10,
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
