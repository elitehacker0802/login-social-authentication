import React, { Component, useState } from "react";
import FacebookLogin from "react-facebook-login";
import "./App.css";
import LinkedInPage from "./components/LoginWithLinkedIn";
import ReactGoogleLogin from "./components/LoginWithGoogle";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
const style = {
  button: {
    backgroundColor: "red",
    border: "none",
    color: "black",
    padding: "2px",
  },
};

const initialValues = {
  password: "",
  showPassword: false,
  confirmPassword: "",
  username: "",
};

const validationSchema = Yup.object({
  password: Yup.string().required("Required"),
  username: Yup.string()
    .required("Required")
    .test("test-name", "Enter Valid Phone/Email", function (value) {
      const emailRegex =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      const phoneRegex = /^(?=.*\d).\d{8,13}$/; // Change this regex based on requirement
      let isValidEmail = emailRegex.test(value);
      let isValidPhone = phoneRegex.test(value);
      if (!isValidEmail && !isValidPhone) {
        return false;
      }
      return true;
    }),
});

const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedin: false,
  //   };
  // }
  // console.log("checkbox", checkbox);
  const responseFacebook = (response) => {
    console.log(response);
    // this.setState({
    //   isLoggedin: true,
    // });
  };
  const requestLinedIn = () => {
    var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77tp2tqpqq33sm&scope=r_liteprofile&state=123456&redirect_uri=http://localhost:3000/`;
    var width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;

    window.open(
      oauthUrl,
      "Linkedin",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  };
  const handleSubmit = (values) => {
    // console.log("values", values);
    if (values.password !== values.confirmPassword) {
      console.log("password error");
    }
  };
  return (
    <div>
      <FacebookLogin
        appId="321612752965657"
        autoLoad={true}
        // fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
        buttonStyle={style.button}
      />
      <button onClick={requestLinedIn}>Login with Linkedin</button>
      {/* <LinkedInPage /> */}
      <ReactGoogleLogin />
      {/* <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form>
            <div>
              <Field
                name="username"
                placeholder="Enter email or phone number"
              />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <Field
                type={values.showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <Field type="checkbox" name="showPassword" />
            Show Password
            <br />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik> */}
    </div>
  );
};

export default App;
