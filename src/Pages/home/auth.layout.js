import { Outlet } from 'react-router-dom';
import AuthNav from '../auth/components/AuthNav';

const AuthLayoutPage = () => {
  return (
    <>
      <AuthNav />
      <Outlet />

      {/* footer */}
    </>
  );
};

export default AuthLayoutPage;
