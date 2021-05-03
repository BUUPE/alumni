import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { withFirebase } from "@buupe/react-components";
import Logo from "../components/Logo";
import SEO from "../components/SEO";
import { Centered } from "../styles/global";

const Login = ({ firebase }) => {
  const [loading, setLoading] = useState(true);
  const [authenticating, setAuthenticating] = useState(false);

  useEffect(() => {
    setLoading(false);
    if (firebase) {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      if (token) {
        setAuthenticating(true);
        const pathname = window.localStorage.getItem("pathname");
        window.localStorage.removeItem("pathname");
        firebase
          .doSignInWithToken(token)
          .then(() => navigate(pathname ? pathname : "/"))
          .catch(console.error);
      }
    }
  }, [firebase]);

  return (
    <>
      <SEO title="Login" route="/login" />
      <Centered>
        <Logo size="medium" />
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : authenticating ? (
          <h1>Authenticating...</h1>
        ) : (
          <Button
            onClick={() =>
              (window.location.href =
                "https://upe-authenticator.herokuapp.com/")
            }
          >
            Login with BU
          </Button>
        )}
      </Centered>
    </>
  );
};

export default withFirebase(Login);
