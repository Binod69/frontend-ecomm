// import React from 'react';

// const CardBanner = ({ data }) => {
//   return (
//     <>
//       {data &&
//         data.map((item, index) => (
//           <div key={index} className="col">
//             <div className="card  h-100">
//               <div className="card-body">
//                 <h5 className="card-title">{item.title}</h5>
//                 <img src={item.img} className="card-img-top" alt={item.title} />
//               </div>
//             </div>
//           </div>
//         ))}
//     </>
//   );
// };

// export default CardBanner;

import React, { useState, useEffect } from 'react';

import bannercard1 from '../../../assets/image/bannercard1.jpg';
import bannercard2 from '../../../assets/image/bannercard2.jpg';
import bannercard3 from '../../../assets/image/bannercard3.jpg';
import bannercard4 from '../../../assets/image/bannercard4.jpg';
import CardComponents from '../banner-cards/CardComponents';

const CardBanner = () => {
  const [card, setCard] = useState();

  const loadCards = async () => {
    let ApiResponse = [
      {
        id: 1,
        title: 'Mobile, Computers',
        img: bannercard1,
      },
      {
        id: 2,
        title: 'Tv, Appliances, Electronics',
        img: bannercard2,
      },
      {
        id: 3,
        title: 'Mens Fashion',
        img: bannercard3,
      },
      {
        id: 4,
        title: 'Womens Fashion',
        img: bannercard4,
      },
    ];
    setCard(ApiResponse);
  };

  useEffect(() => {
    loadCards();
  }, []);

  return (
    <>
      <CardComponents data={card} />
    </>
  );
};

export default CardBanner;
