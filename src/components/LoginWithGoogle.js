import React from "react";
import GoogleLogin from "react-google-login";
// or
//import { GoogleLogin } from 'react-google-login';

export default function ReactGoogleLogin() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <GoogleLogin
      clientId="1096887807984-m8aesh8fg7o0vi6e4cd9c7rebk2kfon9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      //   cookiePolicy={"single_host_origin"}
    />
  );
}
