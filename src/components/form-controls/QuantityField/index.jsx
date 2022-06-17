import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, FormControl, FormHelperText, OutlinedInput } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Controller, useController } from "react-hook-form";

QuantityField.propTypes = {
  // form: PropTypes.object.isRequired,
  // name: PropTypes.string.isRequired,
  // label: PropTypes.string,
  // errors: PropTypes.object,
  // hasError: PropTypes.bool,
};

function QuantityField(props) {
  const { field, fieldState } = useController(props);
  const hasError = fieldState.error;
  const { label, name } = props;
  return (
    <div>
      <FormControl
        fullWidth
        margin="normal"
        variant="outlined"
        error={!!hasError}
      >
        <Controller
          name={name}
          control={props.control}
          render={({ onChange, onBlur, value, name }) => (
            <Box>
              <IconButton
                onClick={() =>
                  field.onChange(field.value > 0 ? field.value - 1 : 0)
                }
              >
                <RemoveCircleOutline />
              </IconButton>
              <OutlinedInput
                {...field}
                name={name}
                placeholder={label}
                type="number"
              />
              <IconButton onClick={() => field.onChange(field.value + 1)}>
                <AddCircleOutline />
              </IconButton>
            </Box>
          )}
        />

        <FormHelperText>{fieldState.error?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default QuantityField;
