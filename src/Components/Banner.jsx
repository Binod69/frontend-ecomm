import React from 'react';

//image import
import banner1 from '../assets/image/banner1.jpg';
import banner2 from '../assets/image/banner2.jpg';
import banner3 from '../assets/image/banner3.jpg';
import banner4 from '../assets/image/banner4.jpg';
import banner5 from '../assets/image/banner5.jpg';
import banner6 from '../assets/image/banner6.jpg';

//slick slider  import
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// card banner import
import bannerCard from './data/bannerData';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };
  return (
    <div className="overflow-hidden banner-rel">
      <Slider {...settings}>
        <div>
          <img className="img img-fluid" src={banner1} alt="banner" />
        </div>
        <div>
          <img className="img img-fluid" src={banner2} alt="banner" />
        </div>
        <div>
          <img className="img img-fluid" src={banner3} alt="banner" />
        </div>
        <div>
          <img className="img img-fluid" src={banner4} alt="banner" />
        </div>
        <div>
          <img className="img img-fluid" src={banner5} alt="banner" />
        </div>
        <div>
          <img className="img img-fluid" src={banner6} alt="banner" />
        </div>
      </Slider>
      <div className="container   banner-abs ">
        <div className="row w-100  row-cols-1 row-cols-md-4 g-4">
          {bannerCard.map((item) => (
            <div key={item.id} className="col">
              <div className="card  h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
