import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";
import { useController } from "react-hook-form";

PasswordField.propTypes = {
  // form: PropTypes.object.isRequired,
  // name: PropTypes.string.isRequired,
  // label: PropTypes.string,
  // errors: PropTypes.object,
  // hasError: PropTypes.bool,
};

function PasswordField(props) {
  const { field, fieldState } = useController(props);
  const [showPassword, setShowPassword] = useState(false);
  const hasError = fieldState.error;
  const { label, name } = props;
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <FormControl
        fullWidth
        margin="normal"
        variant="outlined"
        error={!!hasError}
      >
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <OutlinedInput
          {...field}
          name={name}
          placeholder={label}

          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText>{fieldState.error?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default PasswordField;
