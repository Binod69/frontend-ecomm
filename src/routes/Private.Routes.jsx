import { useState, useEffect, useCallback } from 'react';
import { Loading } from '../Components/index';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import authSvc from '../services/auth.services';
import AppConstant from '../config/constants';

const PrivateRoutes = ({ children, toCheck }) => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const getUser = useCallback(async () => {
    try {
      let response = await authSvc.getLoggedInUser();
      if (response.result.role === toCheck) {
        setLoading(false);
      } else {
        toast.warning('You do not have the permission to this page');
        navigate('/' + response.result.role);
      }

      console.log(response);
    } catch (err) {
      throw err;
    }
  }, [toCheck, navigate]);

  useEffect(() => {
    let token = localStorage.getItem(AppConstant.AUTH_KEY);
    if (!token) {
      toast.warning('Please login to continue');
      navigate('/login');
    } else {
      getUser();
    }
  }, [getUser, navigate]);
  return loading ? <Loading /> : children;
};

export default PrivateRoutes;
