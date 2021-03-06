import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";
import PropTypes from "prop-types";
Register.propTypes = { closeDialog: PropTypes.func };

function Register(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleOnSubmit = async (values) => {
    values.username = values.email;
    try {
      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      enqueueSnackbar("Successful", { variant: "success" });
      if (props.closeDialog) {
        props.closeDialog();
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleOnSubmit} />
    </div>
  );
}

export default Register;
