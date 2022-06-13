import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import categoryApi from "api/categoryApi";
import { createTheme } from "@mui/system";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyle: "none",
    transition: "all .25s",
    "& > li": {
      marginTop: theme.spacing(1),
      "&:hover": {
        color: "blue",
        cursor: "pointer",
      },
    },
  },
}));

FiltersByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FiltersByCategory({ onChange }) {
  const classes = useStyles();
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await categoryApi.getAll();
        setCategoriesList(data.map((category) => ({ id: category.id, name: category.name })));
      } catch (error) {
        console.log("Fail to fetch categories list", error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Danh mục các sản phẩm</Typography>
      <ul className={classes.menu}>
        {categoriesList.map((category) => (
          <li
            key={category.id}
            onClick={() => {
              handleCategoryClick(category);
            }}
          >
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FiltersByCategory;
