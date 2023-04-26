import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const CategoryList = () => {
  let params = useParams();

  let [query, setQuery] = useSearchParams();

  useEffect(() => {
    setQuery({
      q: 'test',
    });
  });

  return (
    <>
      <p>
        Category slug: {params.catSlug}
        Child slug: {params.childCat}
      </p>

      <p>searchQuery: {query.get('q')}</p>
    </>
  );
};

export default CategoryList;
