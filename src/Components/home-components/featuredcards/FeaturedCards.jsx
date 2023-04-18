import React, { useState, useEffect } from 'react';
import { FeaturedCardsSlider } from '../../index';

//image import
import feature1 from '../../../assets/image/feature1.jpg';
import feature2 from '../../../assets/image/feature2.jpg';
import feature3 from '../../../assets/image/feature3.jpg';
import feature4 from '../../../assets/image/feature4.jpg';
import feature5 from '../../../assets/image/feature5.jpg';
import feature6 from '../../../assets/image/feature1.jpg';
import feature7 from '../../../assets/image/feature1.jpg';
import feature8 from '../../../assets/image/feature1.jpg';

const FeaturedCards = () => {
  const [cards, setCards] = useState();

  const loadCards = async () => {
    let ApiResponse = [
      {
        id: 1,
        title: 'Apple 2022 MacBook Air Laptop with M2 chip',
        price: `1,13,490`,
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod repellendus expedita tempore asperiores deserunt amet, quasi beatae quia non libero excepturi minima voluptatem magni a odit ut, eveniet fugiat.',
        category: 'electronic',
        image: feature1,
        rating: {
          rate: 3.9,
          count: 120,
        },
        link: '',
      },

      {
        id: 2,
        title: 'Sony PS5 PlayStation Console',
        price: `43,490`,
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod repellendus expedita tempore asperiores deserunt amet, quasi beatae quia non libero excepturi minima voluptatem magni a odit ut, eveniet fugiat.',
        category: 'electronic',
        image: feature2,
        rating: {
          rate: 3.9,
          count: 120,
        },
        link: '',
      },

      {
        id: 3,
        title: 'Apple iPhone 14 Pro Max (128 GB) - Space Black',
        price: `1,10,490`,
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod repellendus expedita tempore asperiores deserunt amet, quasi beatae quia non libero excepturi minima voluptatem magni a odit ut, eveniet fugiat.',
        category: 'electronic',
        image: feature3,
        rating: {
          rate: 3.9,
          count: 120,
        },
        link: '',
      },

      {
        id: 4,
        title: 'OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart (Black)',
        price: `29,490`,
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod repellendus expedita tempore asperiores deserunt amet, quasi beatae quia non libero excepturi minima voluptatem magni a odit ut, eveniet fugiat.',
        category: 'electronic',
        image: feature4,
        rating: {
          rate: 4.0,
          count: 20,
        },
        link: '',
      },

      {
        id: 5,
        title: 'Lymio Casual Shirt for Men',
        price: `490`,
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod repellendus expedita tempore asperiores deserunt amet, quasi beatae quia non libero excepturi minima voluptatem magni a odit ut, eveniet fugiat.',
        category: 'men fasion',
        image: feature5,
        rating: {
          rate: 3.9,
          count: 120,
        },
        link: '',
      },

      {
        id: 6,
        title: 'Apple 2022 MacBook Air Laptop with M2 chip',
        price: `1,13,490`,
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod repellendus expedita tempore asperiores deserunt amet, quasi beatae quia non libero excepturi minima voluptatem magni a odit ut, eveniet fugiat.',
        category: 'electronic',
        image: feature6,
        rating: {
          rate: 3.9,
          count: 120,
        },
        link: '',
      },

      {
        id: 7,
        title: 'Apple 2022 MacBook Air Laptop with M2 chip',
        price: `1,13,490`,
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod repellendus expedita tempore asperiores deserunt amet, quasi beatae quia non libero excepturi minima voluptatem magni a odit ut, eveniet fugiat.',
        category: 'electronic',
        image: feature7,
        rating: {
          rate: 3.9,
          count: 120,
        },
        link: '',
      },

      {
        id: 8,
        title: 'Apple 2022 MacBook Air Laptop with M2 chip',
        price: `1,13,490`,
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod repellendus expedita tempore asperiores deserunt amet, quasi beatae quia non libero excepturi minima voluptatem magni a odit ut, eveniet fugiat.',
        category: 'electronic',
        image: feature8,
        rating: {
          rate: 3.9,
          count: 120,
        },
        link: '',
      },
    ];
    setCards(ApiResponse);
  };

  useEffect(() => {
    loadCards();
  }, []);
  return (
    <>
      <FeaturedCardsSlider data={cards} />
    </>
  );
};

export default FeaturedCards;
