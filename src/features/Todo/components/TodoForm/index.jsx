import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    Todo: yup.string().required("Please Enter Your Todo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const hasError = formState.touchedFields["Todo"] && errors.Todo?.message;

  const handleOnSubmit = (value) => {
    props.onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <TextField
        name="Todo"
        {...register("Todo")}
        error={!!hasError}
        helperText={errors.Todo?.message}
      />
    </form>
  );
}

export default TodoForm;
