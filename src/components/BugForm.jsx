import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import validationSchema from "../formValidation/bug";

const BugForm = (props) => {
  return (
    <div>
      <Formik {...props} validationSchema={validationSchema}>
        <Form className="dark:bg-gray-800 dark:border-gray-700">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Name:
          </label>
          <Field name="name" id="name" type="text" />
          <ErrorMessage
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            name="name"
            component="span"
          />

          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Description:
          </label>
          <Field name="description" id="description" type="text" />
          <ErrorMessage
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            name="description"
            component="span"
          />

          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Status:
          </label>
          <Field as="select" id="status" name="status">
            <option value="" disabled defaultValue hidden>
              Select...
            </option>
            <option value="new">New</option>
            <option value="assigned">Assigned</option>
            <option value="fixed">Fixed</option>
          </Field>
          <ErrorMessage
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            name="status"
            component="span"
          />

          <label
            htmlFor="priority"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Priority:
          </label>
          <Field as="select" id="priority" name="priority">
            <option value="" disabled defaultValue hidden>
              Select...
            </option>
            <option value="low">Low</option>
            <option value="high">High</option>
          </Field>
          <ErrorMessage
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            name="priority"
            component="span"
          />

          <label
            htmlFor="severity"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Severity:
          </label>
          <Field as="select" id="severity" name="severity">
            <option value="" disabled defaultValue hidden>
              Select...
            </option>
            <option value="low">Low</option>
            <option value="high">High</option>
          </Field>
          <ErrorMessage
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            name="severity"
            component="span"
          />

          <button
            type="submit"
            className="my-2 flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save bug
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BugForm;
