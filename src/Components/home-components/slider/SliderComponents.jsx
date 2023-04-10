import React from 'react';

//slick slider  import
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const SliderItem = ({ data }) => {
//   return (
//     <>
//       {data &&
//         data.map((item, index) => (
//           <div key={index}>
//             <img className="img img-fluid" src={item.image} alt={item.title} />
//           </div>
//         ))}
//     </>
//   );
// };

const SliderComponent = ({ config = {}, data = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...config,
  };
  return (
    <>
      <Slider {...settings}>
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <img
                className="img img-fluid"
                src={item.image}
                alt={item.title}
              />
            </div>
          ))}
      </Slider>
    </>
  );
};

export default SliderComponent;
