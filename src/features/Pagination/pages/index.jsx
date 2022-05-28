import React from "react";
import PropTypes from "prop-types";
import Pagination from "../components";

function PaginationFeature(props) {
  return (
    <div>
      <Pagination
        pagination={props.pagination}
        onPageChange={props.onPageChange}
      />
    </div>
  );
}

PaginationFeature.propTypes = {};

export default PaginationFeature;
