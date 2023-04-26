import React from 'react';

const AdminFooter = () => {
  return (
    <div>
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center justify-content-between small">
          <div className="text-muted">Copyright © Your Website 2023</div>
          <div>
            <a href="/">Privacy Policy</a>·
            <a href="/">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFooter;
