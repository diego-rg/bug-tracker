import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { AiOutlineClose } from "react-icons/ai";

import validationSchema from "../formValidation/bug";

const BugForm = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Fill the bug data</h3>
          <button
            onClick={() => props.setShow(false)}
            type="button"
            className="btn-menu"
          >
            <AiOutlineClose size={24} />
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <Formik {...props} validationSchema={validationSchema}>
          <Form className="p-4">
            <div className="pb-4">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <Field name="name" id="name" type="text" className="form-input" />
              <ErrorMessage
                className="error-message"
                name="name"
                component="span"
              />
            </div>

            <div className="pb-4">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <Field
                as="textarea"
                rows="5"
                name="description"
                id="description"
                type="text"
                className="form-input"
              />
              <ErrorMessage
                className="error-message"
                name="description"
                component="span"
              />
            </div>

            <div className="pb-4">
              <label htmlFor="status" className="form-label">
                Status:
              </label>
              <Field
                as="select"
                id="status"
                name="status"
                className="form-input"
              >
                <option value="" disabled defaultValue hidden>
                  Select...
                </option>
                <option value="new">New</option>
                <option value="assigned">Assigned</option>
                <option value="fixed">Fixed</option>
              </Field>
              <ErrorMessage
                className="error-message"
                name="status"
                component="span"
              />
            </div>

            <div className="pb-4">
              <label htmlFor="priority" className="form-label">
                Priority:
              </label>
              <Field
                as="select"
                id="priority"
                name="priority"
                className="form-input"
              >
                <option value="" disabled defaultValue hidden>
                  Select...
                </option>
                <option value="low">Low</option>
                <option value="high">High</option>
              </Field>
              <ErrorMessage
                className="error-message"
                name="priority"
                component="span"
              />
            </div>

            <div className="pb-4">
              <label htmlFor="severity" className="form-label">
                Severity:
              </label>
              <Field
                as="select"
                id="severity"
                name="severity"
                className="form-input"
              >
                <option value="" disabled defaultValue hidden>
                  Select...
                </option>
                <option value="low">Low</option>
                <option value="high">High</option>
              </Field>
              <ErrorMessage
                className="error-message"
                name="severity"
                component="span"
              />
            </div>

            {props.errorMessage && (
              <p className="error-message">{props.errorMessage}</p>
            )}

            <div className="flex ">
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
  );
};

export default BugForm;
