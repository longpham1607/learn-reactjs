import { TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";

function Input(props) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <TextField {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
}

Input.propTypes = {};

export default Input;
