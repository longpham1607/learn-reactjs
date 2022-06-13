import { Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, createTheme } from "@mui/system";
import PropTypes from "prop-types";
import { useMemo } from "react";

const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    margin: theme.spacing(2, 0),
    listStyleType: "none",
    padding: 0,
    "&> li": {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));

const FILTER_LIST = [
  {
    id: 1,
    getLabel: (filters) => "Giao hàng miễn phí",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => "Có khuyến mãi",
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 3,
    getLabel: (filters) =>
      `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) => filters.salePrice_gte && filters.salePrice_lte,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;
      return newFilters;
    },
    onToggle: null,
  },
  //   {
  //     id: 4,
  //     getLabel: (filters) => "Danh mục",
  //     isActive: (filters) => true,
  //     isVisible: (filters) => true,
  //     isRemovable: true,
  //     onRemove: (filters) => {},
  //     onToggle: (filters) => {},
  //   },
];
FiltersViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FiltersViewer({ filters = {}, onChange = null }) {
  const classes = useStyles();

  const visibleList = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);
  return (
    <Box component="ul" className={classes.root}>
      {visibleList.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? "primary" : "default"}
            clickable={!x.isRemovable}
            onClick={
              !x.isRemovable
                ? () => {
                    if (!onChange) return;
                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
                : null
            }
            onDelete={() => {
              if (x.isRemovable) {
                if (!onChange) return;
                const newFilters = x.onRemove(filters);
                onChange(newFilters);
              } else return null;
            }}
          />
        </li>
      ))}
    </Box>
  );
}

export default FiltersViewer;
