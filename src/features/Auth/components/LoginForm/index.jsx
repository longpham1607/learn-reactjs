import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputField from "components/form-controls/InputField";
import PasswordField from "components/form-controls/PasswordField";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

LoginForm.propTypes = {
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
    identifier: yup
      .string()
      .required("Please Enter Your Email")
      .email("Please Enter The Valid Email"),
    password: yup.string().required("Please Enter Your Password"),
  })
  .required();

function LoginForm(props) {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const handleOnSubmit = async (value) => {
    await props.onSubmit(value);
  };

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress />}
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Login
      </Typography>

      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <InputField control={control} name="identifier" rules={{ required: true }} label="Email" />

        <PasswordField
          control={control}
          name="password"
          rules={{ required: true }}
          label="Password"
        />

        <Button className={classes.submit} type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
