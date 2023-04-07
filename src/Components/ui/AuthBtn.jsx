import React from 'react';

const AuthBtn = ({ title, icon }) => {
  return (
    <button type="button" className="btn btn-outline-info">
      {icon}
      {title}
    </button>
  );
};

export default AuthBtn;
