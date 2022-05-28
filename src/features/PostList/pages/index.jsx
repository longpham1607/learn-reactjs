import React, { useEffect, useState } from "react";
import PaginationFeature from "../../Pagination/pages/index.jsx";
import PostList from "../components/index.jsx";
import queryString from "query-string";
import PostFiltersFormFeature from "../../PostFiltersForm/index.jsx";
import ClockFeature from "../../Clock/index.jsx";

function PostListFeature(props) {
  const [postList, setPostList] = useState();
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  const handleOnPageChange = (newPage) => {
    setFilters({ ...filters, _page: newPage });
  };

  const handleFilterChange = (newFilter) => {
    setFilters({ ...filters, title_like: newFilter.searchTerm, _page: 1 });
  };
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchPostList();
  }, [filters]);

  return (
    <div>
      <PostFiltersFormFeature onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <PaginationFeature
        pagination={pagination}
        onPageChange={handleOnPageChange}
      />

      <ClockFeature/>
    </div>
  );
}

export default PostListFeature;
