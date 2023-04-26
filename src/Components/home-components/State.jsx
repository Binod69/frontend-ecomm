import React, { useState, useEffect } from 'react';

const State = () => {
  // const [data, setData] = useState({
  //   email: '',
  //   password: '',
  // });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('im always trigger');
  });

  useEffect(() => {
    console.log('i am only loaded once');
    setLoading(true);
  }, []);

  useEffect(() => {
    console.log('im loaded when loading is called');
  }, [loading]);

  return <div>State</div>;
};

export default State;
