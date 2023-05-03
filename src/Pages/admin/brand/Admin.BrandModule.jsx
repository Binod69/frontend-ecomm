import React from 'react';
import AdminBreadCrumbs from '../components/Admin.BreadCrumbs';

const AdminBrandModule = () => {
  return (
    <>
      <div className="container-fluid px-4">
        <AdminBreadCrumbs
          pageTitle={'Brand Page'}
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

export default AdminBrandModule;
