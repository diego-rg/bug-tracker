import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import validationSchema from "../formValidation/bug";

const BugForm = (props) => {
  return (
    <div>
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <label htmlFor="name">Name:</label>
          <Field name="name" id="name" type="text" />
          <ErrorMessage name="name" component="span" />

          <label htmlFor="description">Description:</label>
          <Field name="description" id="description" type="text" />
          <ErrorMessage name="description" component="span" />

          <label htmlFor="status">Status:</label>
          <Field as="select" id="status" name="status">
            <option value="new">New</option>
            <option value="assigned">Assigned</option>
            <option value="fixed">Fixed</option>
          </Field>
          <ErrorMessage name="status" component="span" />

          <label htmlFor="priority">Priority:</label>
          <Field as="select" id="priority" name="priority">
            <option value="low">Low</option>
            <option value="high">High</option>
          </Field>
          <ErrorMessage name="priority" component="span" />

          <label htmlFor="severity">Severity:</label>
          <Field as="select" id="severity" name="severity">
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
