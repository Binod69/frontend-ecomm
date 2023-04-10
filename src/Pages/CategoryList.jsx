import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryList = () => {
  let params = useParams();
  return <>Category {CategoryList.params}</>;
};

export default CategoryList;
