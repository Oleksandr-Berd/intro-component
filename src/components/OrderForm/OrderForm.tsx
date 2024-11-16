import { validSchema } from "../../utils/validationShema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as SC from "./OrderFormStyled";
import { IProps } from "../../utils/interfaces";

const OrderForm: React.FC<IProps> = ({ handleSubmit }) => {
  return (
    <div>
      <SC.OrderContent>
        <h3>
          Try it free 7 days <span> then $20/mo. thereafter</span>
        </h3>
      </SC.OrderContent>
      <SC.FormCon>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={validSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values); 
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <SC.InputCon>
                <label>First Name</label>
                <Field type="text" name="firstName" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error"
                />
              </SC.InputCon>
              <SC.InputCon>
                <label>Last Name</label>
                <Field type="text" name="lastName" />
                <ErrorMessage
                  name="secondName"
                  component="div"
                  className="error"
                />
              </SC.InputCon>
              <SC.InputCon>
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </SC.InputCon>
              <SC.InputCon>
                <label>Password</label>
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </SC.InputCon>
              <button type="submit" disabled={isSubmitting}>
                Claim your free trial
              </button>
            </Form>
          )}
        </Formik>
      </SC.FormCon>
      <div>
        <p>
          By clicking the button, you are agreeing to our{" "}
          <a
            href="https://www.linkedin.com/in/oleksandr-berdychevskyi-83336761/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms and Services
          </a>
        </p>
      </div>
    </div>
  );
};

export default OrderForm;
