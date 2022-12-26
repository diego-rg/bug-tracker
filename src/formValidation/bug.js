import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("You must provide a name for the bug"),
  description: Yup.string().required("You must provide a description for the bug"),
  status: Yup.string().oneOf(["new", "assigned", "fixed"]).required("You must provide the status of the the bug"),
  priority: Yup.string().oneOf(["low", "high"]).required("You must provide a priority level for the bug"),
  severity: Yup.string().oneOf(["low", "high"]).required("You must provide a severity level for the bug"),
});

export default validationSchema;
