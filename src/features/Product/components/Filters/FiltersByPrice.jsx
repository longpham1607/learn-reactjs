import { Button, createTheme, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useState } from "react";

const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: { padding: theme.spacing(2), borderTop: `1px solid grey` },
  range: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    "& > span": {
      margin: `0 ${theme.spacing(1.5)}`,
    },
  },
}));
FiltersByPrice.propTypes = { onChange: PropTypes.func };

function FiltersByPrice({ onChange }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((preValues) => ({ ...preValues, [name]: value }));
  };
  const handleSubmit = () => {
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Chọn Khoảng Giá</Typography>
      <Box className={classes.range}>
        <TextField
          name="salePrice_gte"
          onChange={handleOnChange}
          value={values.salePrice_gte}
          variant="standard"
        />
        <span>-</span>
        <TextField
          name="salePrice_lte"
          onChange={handleOnChange}
          value={values.salePrice_lte}
          variant="standard"
        />
      </Box>
      <Button size="small" variant="outlined" color="primary" onClick={handleSubmit}>
        Áp Dụng
      </Button>
    </Box>
  );
}

export default FiltersByPrice;
