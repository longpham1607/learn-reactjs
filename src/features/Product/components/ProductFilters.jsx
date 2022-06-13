import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import FiltersByCategory from "./Filters/FiltersByCategory";
import FiltersByPrice from "./Filters/FiltersByPrice";
import FiltersByService from "./Filters/FiltersByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = { "category.id": newCategoryId };
    onChange(newFilters);
  };

  const handleChange = (newFilters) => {
    if (!onChange) return;
    onChange(newFilters);
  };
  return (
    <Box>
      <FiltersByCategory onChange={handleCategoryChange} />
      <FiltersByPrice onChange={handleChange} />
      <FiltersByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
