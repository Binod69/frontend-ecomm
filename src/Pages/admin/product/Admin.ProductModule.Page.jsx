import React from 'react';
import AdminBreadCrumbs from '../components/Admin.BreadCrumbs';

const AdminProductModulePage = () => {
  return (
    <>
      <div className="container-fluid px-4">
        <AdminBreadCrumbs
          pageTitle={'Products Page'}
          links={[
            {
              title: 'Dashboard',
              link: '/admin',
            },
            {
              title: 'Banner List',
              link: '/admin/banner',
            },

            {
              title: 'Brand List',
              link: '/admin/brand',
            },
            {
              title: 'Category List',
              link: '/admin/category',
            },
            {
              title: 'User List',
              link: '/admin/user',
            },
            {
              title: 'Products List',
              link: null,
            },
          ]}
        />
        <div className="card mb-4">
          <div className="card-body">
            {/* <DataTable
              columns={columns}
              data={data}
              sortIcon={sortIcons}
              pagination
              title="Latest Order"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProductModulePage;
