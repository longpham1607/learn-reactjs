import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import QuantityField from "components/form-controls/QuantityField";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
AddToCartForm.propTypes = { onSubmit: PropTypes.func };

const useStyles = makeStyles({
  root: { paddingTop: "10px" },
  avatar: { margin: "0 auto" },
  title: { textAlign: "center" },
  submit: {},
});
const schema = yup.object().shape({
  quantity: yup
    .number()
    .required("Please Enter the quantity")
    .min(1, "Minimum value is 1")
    .typeError("Please enter a number"),
});

function AddToCartForm(props) {
  const classes = useStyles();
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      quantity: 1,
    },
  });

  const { handleSubmit, control } = form;
  const handleOnSubmit = (value) => {
    props.onSubmit(value);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <QuantityField
          control={control}
          name="quantity"
          rules={{ required: true }}
          type="number"
          form={form}
        />

        <Button
          className={classes.submit}
          type="submit"
          variant="contained"
          color="primary"
        >
          Buy
        </Button>
      </form>
    </div>
  );
}

export default AddToCartForm;
