import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import InputField from "components/form-controls/InputField";

function TodoForm(props) {
  const form = useForm({
    defaultValues: {
      title: "",
    },
  });

  const handleOnSubmit = (value) => {
    console.log("To do form", value);
  };
  return (
    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
      <InputField name="title" lable="todo" form={form} />
    </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default TodoForm;
