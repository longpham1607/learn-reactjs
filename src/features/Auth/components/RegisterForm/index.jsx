import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputField from "components/form-controls/InputField";
import PasswordField from "components/form-controls/PasswordField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles({
  root: { paddingTop: "10px" },
  avatar: { margin: "0 auto" },
  title: { textAlign: "center" },
  submit: {},
});

const schema = yup
  .object()
  .shape({
    fullName: yup.string().required("Please Enter Your FullName"),
    email: yup
      .string()
      .required("Please Enter Your Email")
      .email("Please Enter The Valid Email"),
    password: yup
      .string()
      .required("Please Enter Your Password")
      .min(6, "Please Enter At Least 6 Characters"),
    retypePassword: yup
      .string()
      .required("Please Enter Your Retype-Password")
      .oneOf([yup.ref("password")], "Password Doesn't Match"),
  })
  .required();

function RegisterForm(props) {
  const classes = useStyles();

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
  });

  const handleOnSubmit = (value) => {
    console.log("form value: ", value);
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Create An Account
      </Typography>

      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <InputField
          control={control}
          name="fullName"
          rules={{ required: true }}
          label="FullName"
        />

        <InputField
          control={control}
          name="email"
          rules={{ required: true }}
          label="Email"
        />

        <PasswordField
          control={control}
          name="password"
          rules={{ required: true }}
          label="Password"
        />
        <PasswordField
          control={control}
          name="retypePassword"
          rules={{ required: true }}
          label="Retype-Password"
        />
        <Button
          className={classes.submit}
          type="submit"
          variant="contained"
          color="primary"
        >
          Create An Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
