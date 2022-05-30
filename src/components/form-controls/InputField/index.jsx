import { TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";

InputField.propTypes = {
  // form: PropTypes.object.isRequired,
  // name: PropTypes.string.isRequired,
  // label: PropTypes.string,
  // errors: PropTypes.object,
  // hasError: PropTypes.bool,
};

function InputField(props) {
  const { field, fieldState } = useController(props);
  const {label } = props;
  const hasError = fieldState.error;

  return (
    <div>
      <TextField
        {...field}
        placeholder={label}
        fullWidth
        margin="normal"
        variant="outlined"
        error={!!hasError}
        helperText={fieldState.error?.message}
        label={label}
      />
    </div>
  );
}

export default InputField;
