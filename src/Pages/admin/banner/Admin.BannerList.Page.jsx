import React from 'react';
// import { NavLink } from 'react-bootstrap';
// import { FaAngleRight, FaUsers } from 'react-icons/fa';
import AdminBreadCrumbs from '../components/Admin.BreadCrumbs';
import DataTable from 'react-data-table-component';
import { BsArrowDownShort } from 'react-icons/bs';

const sortIcons = <BsArrowDownShort className="me-2" />;

const AdminBannerListPage = () => {
  const columns = [
    {
      name: 'User Id',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Customer',
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: 'Amount',
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: 'Action',
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ];
  return (
    <>
      <div className="container-fluid px-4">
        <AdminBreadCrumbs
          showAdd={true}
          btnLink="/admin/banner/create"
          pageTitle={'Banner'}
          links={[
            {
              title: 'Dashboard',
              link: '/admin',
            },
            {
              title: 'Banner List',
              link: null,
            },
          ]}
        />
        {/* <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body">
                <FaUsers className="me-2" size={'20px'} /> Users
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <NavLink
                  className="small text-white stretched-link"
                  to="/admin/users"
                >
                  View Details
                </NavLink>
                <div className="small text-white">
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-warning text-white mb-4">
              <div className="card-body">Warning Card</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">
                  View Details
                </a>
                <div className="small text-white">
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-success text-white mb-4">
              <div className="card-body">Success Card</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">
                  View Details
                </a>
                <div className="small text-white">
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-danger text-white mb-4">
              <div className="card-body">Danger Card</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">
                  View Details
                </a>
                <div className="small text-white">
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div />
        <div className="card mb-4">
          <div className="card-body">
            <DataTable
              columns={columns}
              data={data}
              sortIcon={sortIcons}
              pagination
              title="Latest Order"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBannerListPage;
