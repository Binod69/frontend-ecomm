import React from 'react';
import AdminBreadCrumbs from '../components/Admin.BreadCrumbs';

const AdminReviewServicesPage = () => {
  return (
    <div className="container-fluid px-4">
      <AdminBreadCrumbs
        pageTitle={'Review Page'}
        links={[
          {
            title: 'Dashboard',
            link: '/admin',
          },
          {
            title: 'Offer List',
            link: '/admin/offer',
          },
          {
            title: 'Review List',
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

export default AdminReviewServicesPage;
