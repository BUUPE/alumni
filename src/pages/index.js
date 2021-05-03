import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";

import { AuthUserContext, withFirebase } from "@buupe/react-components";
import SEO from "../components/SEO";

const IndexPage = ({ firebase }) => {
  const authUser = useContext(AuthUserContext);

  useEffect(() => {
    const loadUser = async () => {
      const { data: user } = await firebase
        .getUser({ uid: authUser.uid })
        .catch(console.error);
      //if (!user) await firebase.createUser() TODO: Finish this
    };
    if (firebase) loadUser();
  }, [firebase]);

  return authUser ? (
    <>
      <SEO title="Home" />
      <h1>Welcome {authUser.name}</h1>
      <p>Get ready to network.</p>
    </>
  ) : (
    <>
      <SEO title="Alumni" />
      <h1>Welcome.</h1>
      <p>Here are some lovely stats on our alumni..</p>
    </>
  );
};

export default withFirebase(IndexPage);
