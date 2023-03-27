import React, { useState } from "react";

import { useLinkedIn } from "react-linkedin-login-oauth2";
// You can use provided image shipped by this package or using your own
// import { linkedin } from "react-linkedin-login-oauth2";

export default function LinkedInPage() {
  const { linkedInLogin } = useLinkedIn({
    clientId: "77tp2tqpqq33sm",
    redirectUri: `http://localhost:3000/linkedin`,
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <img
      onClick={linkedInLogin}
      //   src={linkedin}
      alt="Sign in with Linked In"
      style={{ maxWidth: "180px", cursor: "pointer" }}
    />
  );
}
