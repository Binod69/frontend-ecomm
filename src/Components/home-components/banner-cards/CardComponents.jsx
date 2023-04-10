import React from 'react';

const CardComponents = ({ data }) => {
  return (
    <>
      {data &&
        data.map((item, index) => (
          <div key={index} className="col">
            <div className="card  h-100">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <img src={item.img} className="card-img-top" alt={item.title} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardComponents;
