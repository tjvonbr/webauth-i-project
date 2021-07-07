import React from 'react';
import { Form, Field, withFormik } from 'formik';

const Login = () => {
  return (
    <div className="login-wrapper">
      <Form className="login-form">
        <h3 className="login-header">Please log in if you already have an account!</h3>
        <p className="field-description">Username</p>
        <Field 
          className="login-input"
          type="text"
          name="username"
          placeholder="Please enter your username" />
        <p className="field-description">Password</p>
        <Field 
          className="login-input"
          type="password"
          name="password"
          placeholder="Please enter your password" />
        <div className="btn-wrapper">
          <button className="btn login-btn">Login</button>
          <button className="btn cancel-btn">Cancel</button>
        </div>
        <p className="register-link">No account? No problem! Click here to get started!</p>
      </Form>
    </div>
  )
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    }
  }
})(Login)

export default FormikLogin;