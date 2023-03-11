import React from "react";
import UserForm from "../components/common/Form";
import { useAllPostContext } from "../components/context/FetchPosts";

const SignIn = () => {
  const { setUserEmail, setUserPassword, handleUser } = useAllPostContext();
  return (
    <>
      <UserForm
        title="Login"
        setUserEmail={setUserEmail}
        setUserPassword={setUserPassword}
        handleUser={() => handleUser(1)}
      />
    </>
  );
};

export default SignIn;
