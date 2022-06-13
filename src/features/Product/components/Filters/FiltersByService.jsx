import { Checkbox, createTheme, FormControlLabel, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: { padding: theme.spacing(2), borderTop: `1px solid grey` },
  list: {
    padding: 0,
    margin: 0,
    listStyleType: "none",
    "& > li": {
      margin: 0,
      marginTop: theme.spacing(1),
    },
  },
}));
FiltersByService.propTypes = { onChange: PropTypes.func, filters: PropTypes.object };

function FiltersByService({ filters = {}, onChange }) {
  const classes = useStyles();

  const handleOnChange = (e) => {
    const { name, checked } = e.target;
    if (onChange) onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Dịch Vụ</Typography>
      <ul className={classes.list}>
        {[
          { value: "isPromotion", label: "Có khuyến mãi" },
          { value: "isFreeShip", label: "Miễn phí vận chuyển" },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              label={service.label}
              name={service.value}
              control={
                <Checkbox checked={Boolean(filters[service.value])} onChange={handleOnChange} />
              }
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FiltersByService;
