import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleRight, FaUsers } from 'react-icons/fa';
import AdminBreadCrumbs from '../components/Admin.BreadCrumbs';
import Tablecomponents from '../../../Components/table/Table.components';
import { BsArrowDownShort } from 'react-icons/bs';
import { useEffect } from 'react';
import bannerSvc from '../../../services/banner.services';
import { toast } from 'react-toastify';

const sortIcon = <BsArrowDownShort />;

const AdminDashboard = () => {
  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Link',
      selector: (row) => row.link,
      sortable: true,
    },
    {
      name: 'Image',
      selector: (row) => row.image,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: 'Action',
      selector: (row) => 'Edit / Delete ',
    },
  ];

  const [data, setData] = useState();

  const loadAllBanner = async () => {
    try {
      let response = await bannerSvc.listAllBanner();
      setData(response.result);
    } catch (err) {
      console.log(err);
      toast.warning(err.msg);
    }
  };

  useEffect(() => {
    loadAllBanner();
  }, []);

  return (
    <>
      <div className="container-fluid px-4">
        <AdminBreadCrumbs
          pageTitle={'Dashboard'}
          links={[
            {
              title: 'Dashborad',
              link: null,
            },
          ]}
        />
        <div className="row">
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
                <a className="small text-white stretched-link" href="/">
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
                <a className="small text-white stretched-link" href="/">
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
                <a className="small text-white stretched-link" href="/">
                  View Details
                </a>
                <div className="small text-white">
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div />
        <div className="card mb-4">
          <div className="card-body">
            <Tablecomponents
              columns={columns}
              data={data}
              pagination={[]}
              sortIcon={sortIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
