import { Outlet } from 'react-router-dom';
import { Nav } from '../../Components/index';

const HomePageLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />

      {/* footer section */}
    </>
  );
};

export default HomePageLayout;
