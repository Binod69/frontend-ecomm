import React from 'react';
import AdminBreadCrumbs from '../components/Admin.BreadCrumbs';

const AdminCategoryModulePage = () => {
  return (
    <div className="container-fluid px-4">
      <AdminBreadCrumbs
        pageTitle={'Category Page'}
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
  );
};

export default AdminCategoryModulePage;
