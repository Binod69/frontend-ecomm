import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const AdminBreadCrumbs = ({ pageTitle, links, showAdd, btnLink }) => {
  return (
    <>
      <h4 className="mt-4">
        {pageTitle} Page
        {showAdd ? (
          <>
            <NavLink to={btnLink} className="btn btn-success float-end">
              <FaPlus />
              Add{pageTitle}
            </NavLink>
          </>
        ) : null}
      </h4>
      <ol className="breadcrumb mb-4">
        {links &&
          links.map((item, index) => (
            <li
              key={index}
              className={
                links.length - 1 === index
                  ? 'breadcrumb-item active'
                  : 'breadcrumb-item'
              }
            >
              {item.link ? (
                <NavLink to={item.link}>{item.title}</NavLink>
              ) : (
                item.title
              )}
            </li>
          ))}
      </ol>
    </>
  );
};

export default AdminBreadCrumbs;
