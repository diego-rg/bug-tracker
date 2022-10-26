import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const BugForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string("You must provide a name for the bug").required(
      "Required"
    ),
    description: Yup.string(
      "You must provide a description for the bug"
    ).required("Required"),
    status: Yup.string("You must provide the status of the the bug")
      .oneOf(["new", "assigned", "fixed"])
      .required("Required"),
    priority: Yup.string("You must provide a priority level for the bug")
      .oneOf(["low", "high"])
      .required("Required"),
    severity: Yup.string("You must provide a severity level for the bug")
      .oneOf(["low", "high"])
      .required("Required"),
  });

  return (
    <div>
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="span" />

          <Field name="description" type="text" />
          <ErrorMessage name="description" component="span" />

          <Field as="select" name="status">
            <option value="new">New</option>
            <option value="assigned">Assigned</option>
            <option value="fixed">Fixed</option>
          </Field>
          <ErrorMessage name="status" component="span" />

          <Field as="select" name="priority">
            <option value="low">Low</option>
            <option value="high">High</option>
          </Field>
          <ErrorMessage name="priority" component="span" />

          <Field as="select" name="severity">
            <option value="low">Low</option>
            <option value="high">High</option>
          </Field>
          <ErrorMessage name="severity" component="span" />

          <button type="submit">{props.children}</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BugForm;
