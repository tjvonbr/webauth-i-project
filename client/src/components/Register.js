import React from 'react';
import { Form, Field, withFormik } from 'formik';
import { connect } from 'react-redux';

import { registerUser } from '../actions/userActions';

const Register = props => {
  return (
    <div className="register-wrapper">
      <Form className="register-form">
        <h3 className="register-header">Please complete the registration form to access our amazing content!</h3>
        <p className="field-description">First Name</p>
        <Field 
          className="register-input"
          type="text"
          name="firstName"
          placeholder="Please enter your first name" />
        <p className="field-description">Last Name</p>
        <Field 
          className="register-input"
          type="text"
          name="lastName"
          placeholder="Please enter your last name" />
        <p className="field-description">Email</p>
        <Field 
          className="register-input"
          type="email"
          name="email"
          placeholder="Please enter your email address" />
        <p className="field-description">Username</p>
        <Field 
          className="register-input"
          type="text"
          name="username"
          placeholder="Please enter your desired username" />
        <p className="field-description">Password</p>
        <Field 
          className="register-input"
          type="password"
          name="password"
          placeholder="Please enter your desired password" />
        <div className="btn-wrapper">
          <button className="btn login-btn" type="submit">Register</button>
          <button className="btn cancel-btn">Cancel</button>
        </div>
      </Form>
    </div>
  );
};

const FormikRegister = withFormik({
  mapPropsToValues({ firstName, lastName, email, username, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      username: username || "",
      password: password || "",
    };
  },

  handleSubmit(values, {props}) {
    props.registerUser(values)
  }

})(Register)

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(FormikRegister);