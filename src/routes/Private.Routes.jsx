import { useState } from 'react';
import { Loading } from '../Components/index';

const PrivateRoutes = ({ children, toCheck }) => {
  const [loading, setLoading] = useState(true);

  let token = 'string';
  let role = 'admin';

  return loading ? <Loading /> : children;
};

export default PrivateRoutes;
