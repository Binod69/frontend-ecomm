import React from 'react';
import { AdminTopNav, AdminSideBar, AdminFooter } from '../index';

import { Outlet } from 'react-router-dom';
import '../../Components/style/admin.scss';

const AdminLayout = () => {
  return (
    <>
      <div>
        <AdminTopNav />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <AdminSideBar />
          </div>
          <div id="layoutSidenav_content">
            <main>
              <Outlet />
            </main>
            <footer className="py-4 bg-light mt-auto">
              <AdminFooter />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
