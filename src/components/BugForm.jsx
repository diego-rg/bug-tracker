import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import validationSchema from "../formValidation/bug";

const BugForm = (props) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-gray-800 bg-opacity-80 flex justify-center">
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto m-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 p-4">
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Bug Form
            </h3>
            <button
              onClick={() => props.setShow(false)}
              type="button"
              className="btn-close"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
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

              <div className="flex">
                <button type="submit" className="btn-primary">
                  Save bug
                </button>
                <button
                  onClick={() => props.setShow(false)}
                  type="button"
                  className="btn-danger"
                >
                  Close
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default BugForm;
