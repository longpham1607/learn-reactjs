import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm";
Login.propTypes = { closeDialog: PropTypes.func };

function Login(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleOnSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      if (props.closeDialog) {
        props.closeDialog();
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
 
  return (
    <div>
      <LoginForm onSubmit={handleOnSubmit} />
    </div>
  );
}

export default Login;
