import React from 'react';
import DataTable from 'react-data-table-component';

const Tablecomponents = ({ columns, data, pagination, sortIcon }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      sortIcon={sortIcon}
      pagination={pagination}
      title="Latest Order"
    />
  );
};

export default Tablecomponents;
